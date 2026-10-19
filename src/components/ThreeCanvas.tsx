"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { sound } from "@/lib/sound";

interface ThreeCanvasProps {
  className?: string;
  onInteract?: () => void;
  isBackground?: boolean;
}

export function ThreeCanvas({
  className = "",
  onInteract,
  isBackground = false,
}: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 600);
    const height = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 600);

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const isMobile = width < 768;
    camera.position.z = isBackground ? (isMobile ? 8.5 : 6.5) : 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for entire model
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core - Geometric Icosahedron with Wireframe & Points
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    
    // Wireframe material
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x9370db,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(coreGeometry, wireMaterial);
    coreGroup.add(wireMesh);

    // Points at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.05,
      transparent: true,
      opacity: 0.85,
    });
    const pointsMesh = new THREE.Points(coreGeometry, pointsMaterial);
    coreGroup.add(pointsMesh);

    // 2. Arc Reactor Electromagnetic Coils Ring (10 segmented coil nodes)
    const coilsGroup = new THREE.Group();
    const coilGeometry = new THREE.BoxGeometry(0.08, 0.22, 0.12);
    const coilMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });

    const coilRadius = 1.95;
    const coilCount = 10;
    for (let i = 0; i < coilCount; i++) {
      const angle = (i / coilCount) * Math.PI * 2;
      const coilMesh = new THREE.Mesh(coilGeometry, coilMaterial);
      coilMesh.position.set(Math.cos(angle) * coilRadius, Math.sin(angle) * coilRadius, 0);
      coilMesh.rotation.z = angle + Math.PI / 2;
      coilsGroup.add(coilMesh);
    }
    coreGroup.add(coilsGroup);

    // 2b. Inscribed Triangular Aperture (Mark VI / Mark L Arc Reactor geometry)
    const triangleGeom = new THREE.RingGeometry(0.7, 0.74, 3);
    const triangleMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });
    const triangleMesh = new THREE.Mesh(triangleGeom, triangleMat);
    triangleMesh.rotation.z = Math.PI; // Inverted triangle
    coreGroup.add(triangleMesh);

    // 3. Orbital Gyroscopic Rings
    const ringMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.45 }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 }),
      new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.3 }),
    ];

    const rings: THREE.Mesh[] = [];
    const ringRadii = [2.2, 2.7, 3.1];

    ringRadii.forEach((radius, i) => {
      const ringGeom = new THREE.TorusGeometry(radius, 0.015, 16, 120);
      const ringMesh = new THREE.Mesh(ringGeom, ringMaterials[i]);
      ringMesh.rotation.x = Math.PI / (2 + i * 0.5);
      ringMesh.rotation.y = (Math.PI / 4) * i;
      coreGroup.add(ringMesh);
      rings.push(ringMesh);
    });

    // 4. Floating Data Particles Field
    const particleCount = 240;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const violetColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = cyanColor.clone().lerp(violetColor, Math.random());
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleField);

    // 5. Subtle Inner Palladium Glow Core
    const innerCoreGeom = new THREE.SphereGeometry(0.85, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x083344,
      transparent: true,
      opacity: 0.85,
    });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    coreGroup.add(innerCore);

    // Mouse tracking & physics variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let burstVelocity = 1;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
      burstVelocity = 2.4;
      sound.playRepulsorCharge();
      if (onInteract) onInteract();
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        burstVelocity = 2.0;
        sound.playRepulsorCharge();
        if (onInteract) onInteract();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);

        const deltaX = touch.clientX - previousMousePosition.x;
        const deltaY = touch.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.012;

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 600);
      const h = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 600);
      camera.aspect = w / h;
      if (isBackground) {
        camera.position.z = w < 768 ? 8.5 : 6.5;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (isDragging) return;
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("resize", handleResize);
    if (isBackground) {
      window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    }
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;
      burstVelocity = THREE.MathUtils.lerp(burstVelocity, 1.0, 0.03);

      // Base rotation
      coreGroup.rotation.y += 0.003 * burstVelocity;
      coreGroup.rotation.x += 0.0015 * burstVelocity;

      // Mouse influence lerp
      targetRotationY = THREE.MathUtils.lerp(targetRotationY, mouseX * 0.6, 0.05);
      targetRotationX = THREE.MathUtils.lerp(targetRotationX, -mouseY * 0.6, 0.05);

      coreGroup.rotation.y += targetRotationY * 0.02;
      coreGroup.rotation.x += targetRotationX * 0.02;

      // Arc reactor coils & triangle rotation
      coilsGroup.rotation.z -= 0.002 * burstVelocity;
      triangleMesh.rotation.z += 0.003 * burstVelocity;

      // Ring rotations
      rings.forEach((ring, idx) => {
        const dir = idx % 2 === 0 ? 1 : -1;
        ring.rotation.z += 0.005 * dir * (idx + 1) * 0.5 * burstVelocity;
        ring.rotation.x += 0.002 * dir * (idx + 1) * 0.4;
      });

      // Particle subtle breathing pulsation
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      particleField.scale.set(scale, scale, scale);

      // Palladium core breathing pulsation
      const corePulse = 1 + Math.sin(elapsedTime * 2.5) * 0.05;
      innerCore.scale.set(corePulse, corePulse, corePulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (isBackground) {
        window.removeEventListener("mousemove", handleWindowMouseMove);
      }
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      
      // Cleanup Three.js resources
      coreGeometry.dispose();
      wireMaterial.dispose();
      pointsMaterial.dispose();
      coilGeometry.dispose();
      coilMaterial.dispose();
      triangleGeom.dispose();
      triangleMat.dispose();
      rings.forEach((r) => r.geometry.dispose());
      ringMaterials.forEach((m) => m.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      innerCoreGeom.dispose();
      innerCoreMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onInteract, isBackground]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsInteracting(false);
      }}
      className={`relative cursor-grab active:cursor-grabbing select-none ${className}`}
      data-cursor-label="DRAG 3D"
    >
      {/* Interactive Arc Reactor HUD overlay badge */}
      <div
        className={`pointer-events-none ${
          isBackground
            ? "fixed bottom-4 left-6 z-20 hidden md:flex"
            : "absolute bottom-3 left-4 flex"
        } items-center gap-2 rounded-full border border-[var(--system-rule)] bg-[var(--system-paper)]/85 px-3 py-1 font-mono text-[10px] tracking-widest backdrop-blur-md transition-all shadow-lg`}
      >
        <span
          className={`size-1.5 rounded-full ${
            isInteracting ? "bg-amber-400 animate-ping" : "bg-cyan-400 animate-pulse"
          }`}
        />
        <span className="text-[var(--system-ink-70)]">
          {isInteracting
            ? "REPULSOR OVERCHARGE // CAPACITY 400%"
            : isHovered
            ? "J.A.R.V.I.S. // PALLADIUM HARMONICS: NOMINAL"
            : "ARC CORE MK-LXXXV // OUTPUT: 3.0 GJ/s"}
        </span>
      </div>
    </div>
  );
}
