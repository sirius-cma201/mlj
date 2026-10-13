"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  className?: string;
  onInteract?: () => void;
}

export function ThreeCanvas({ className = "", onInteract }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

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

    // 2. Orbital Gyroscopic Rings
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

    // 3. Floating Data Particles Field
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

    // 4. Subtle Inner Glow Core
    const innerCoreGeom = new THREE.SphereGeometry(0.85, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x180b33,
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
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
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

      // Ring rotations
      rings.forEach((ring, idx) => {
        const dir = idx % 2 === 0 ? 1 : -1;
        ring.rotation.z += 0.005 * dir * (idx + 1) * 0.5 * burstVelocity;
        ring.rotation.x += 0.002 * dir * (idx + 1) * 0.4;
      });

      // Particle subtle breathing pulsation
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      particleField.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
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
  }, [onInteract]);

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
      {/* Interactive HUD overlay badge */}
      <div className="pointer-events-none absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-[var(--system-rule)] bg-[var(--system-paper)]/80 px-3 py-1 font-mono text-[10px] tracking-widest text-[var(--system-ink-45)] backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>INTERACTIVE CORE // {isInteracting ? "DRAGGING" : isHovered ? "ACTIVE" : "ONLINE"}</span>
      </div>
    </div>
  );
}
