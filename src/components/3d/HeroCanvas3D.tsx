import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 240;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      container.appendChild(renderer.domElement);

      // Particle Sphere Group
      const sphereGroup = new THREE.Group();
      scene.add(sphereGroup);

      // Geometry & Material for Outer Particle Cloud
      const particleCount = 450;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color('#38bdf8'); // Cyan
      const color2 = new THREE.Color('#818cf8'); // Indigo
      const color3 = new THREE.Color('#06b6d4'); // Teal
      const color4 = new THREE.Color('#a855f7'); // Purple

      const radius = 75;

      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const r = radius + (Math.random() - 0.5) * 8;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixedColor = i % 4 === 0 ? color1 : i % 4 === 1 ? color2 : i % 4 === 2 ? color3 : color4;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      sphereGroup.add(particles);

      // Inner Wireframe Icosahedron Core
      const coreGeometry = new THREE.IcosahedronGeometry(45, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x0284c7,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      sphereGroup.add(coreMesh);

      // Tech Orbital Rings
      const ring1Geo = new THREE.RingGeometry(88, 89.5, 32);
      const ring1Mat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      sphereGroup.add(ring1);

      const ring2Geo = new THREE.RingGeometry(96, 97.5, 32);
      const ring2Mat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = Math.PI / 4;
      sphereGroup.add(ring2);

      // Mouse Interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX = (x / (rect.width / 2)) * 0.4;
        mouseY = -(y / (rect.height / 2)) * 0.4;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize, { passive: true });

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        sphereGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.8;
        sphereGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + targetY * 0.8;

        coreMesh.rotation.y = -elapsedTime * 0.15;
        ring1.rotation.z = elapsedTime * 0.1;
        ring2.rotation.z = -elapsedTime * 0.14;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer?.dispose();
        geometry.dispose();
        material.dispose();
        coreGeometry.dispose();
        coreMaterial.dispose();
        ring1Geo.dispose();
        ring1Mat.dispose();
        ring2Geo.dispose();
        ring2Mat.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to CSS animation:', err);
      setHasWebGLError(true);
    }
  }, []);

  if (hasWebGLError) {
    return (
      <div className="w-full h-[400px] relative flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-radial from-cyan-500/20 via-purple-500/10 to-transparent animate-pulse blur-xl" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] sm:h-[480px] lg:h-[520px] relative flex items-center justify-center pointer-events-none select-none"
    >
      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
export default HeroCanvas3D;
