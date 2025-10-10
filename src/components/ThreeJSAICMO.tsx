import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeJSAICMO = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0A192F');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Central Sphere (AI CMO)
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e90ff,
      emissive: 0x1e90ff,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.2,
    });
    const centralSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(centralSphere);

    // Orbiting Spheres (Agents)
    const agentSpheres = [];
    const agentColors = [0x34d399, 0x60a5fa, 0xa78bfa, 0x38bdf8];
    const orbitRadius = 3;

    for (let i = 0; i < 4; i++) {
      const agentGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const agentMaterial = new THREE.MeshStandardMaterial({
        color: agentColors[i],
        emissive: agentColors[i],
        emissiveIntensity: 0.4,
        metalness: 0.8,
        roughness: 0.3,
      });
      const agentSphere = new THREE.Mesh(agentGeometry, agentMaterial);
      const angle = (i / 4) * Math.PI * 2;
      agentSphere.position.set(
        orbitRadius * Math.cos(angle),
        0,
        orbitRadius * Math.sin(angle)
      );
      scene.add(agentSphere);
      agentSpheres.push(agentSphere);
    }

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate agents
      agentSpheres.forEach((sphere, index) => {
        const angle = Date.now() * 0.0005 + (index / 4) * Math.PI * 2;
        sphere.position.set(
          orbitRadius * Math.cos(angle),
          0,
          orbitRadius * Math.sin(angle)
        );
      });

      controls.update();
      composer.render();
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeJSAICMO;
