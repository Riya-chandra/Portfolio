"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticlesProps {
	color?: string;
	particleCount?: number;
	particleSize?: number;
	animate?: boolean;
	className?: string;
}

export function Particles({
	color = "#ff3366",
	particleCount = 10000,
	particleSize = 35,
	animate = true,
	className = "",
}: ParticlesProps) {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = mountRef.current;
		if (!container) return;

		// Reduce particle count on mobile for better performance
		const isMobile = window.innerWidth < 768;
		const adjustedParticleCount = isMobile
			? Math.min(particleCount * 0.3, 3000)
			: particleCount;
		const shouldAnimate = isMobile ? false : animate;

		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let material: THREE.PointsMaterial;
		let animationFrameId: number;
		let mouseX = 0;
		let mouseY = 0;

		const init = () => {
			camera = new THREE.PerspectiveCamera(
				55,
				window.innerWidth / window.innerHeight,
				2,
				2000
			);
			camera.position.z = 1000;

			scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(0x000000, 0.001);

			const geometry = new THREE.BufferGeometry();
			const vertices: number[] = [];

			for (let i = 0; i < adjustedParticleCount; i++) {
				vertices.push(
					2000 * Math.random() - 1000,
					2000 * Math.random() - 1000,
					2000 * Math.random() - 1000
				);
			}

			geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

			const sprite = new THREE.TextureLoader().load("/assets/disc.png");
			material = new THREE.PointsMaterial({
				size: particleSize,
				sizeAttenuation: true,
				map: sprite,
				alphaTest: 0.5,
				transparent: true,
			});
			material.color.setStyle(color);

			const particles = new THREE.Points(geometry, material);
			scene.add(particles);

			const renderer = new THREE.WebGLRenderer({
				antialias: !isMobile,
				alpha: true,
			});
			// Cap pixel ratio on mobile for better performance
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
			renderer.setSize(window.innerWidth, window.innerHeight);
			container.appendChild(renderer.domElement);

			return renderer;
		};

		const handleResize = () => {
			if (!camera || !renderer) return;
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		let rafId: number | null = null;
		const handlePointerMove = (event: PointerEvent) => {
			if (event.isPrimary) {
				// Debounce pointer updates using RAF
				if (rafId !== null) return;
				rafId = requestAnimationFrame(() => {
					mouseX = event.clientX - window.innerWidth / 2;
					mouseY = event.clientY - window.innerHeight / 2;
					rafId = null;
				});
			}
		};

		let lastFrameTime = Date.now();
		const targetFPS = isMobile ? 30 : 60; // Cap at 30fps on mobile
		const frameInterval = 1000 / targetFPS;

		const animateScene = () => {
			if (!camera || !scene || !renderer || !material) return;

			const now = Date.now();
			const elapsed = now - lastFrameTime;

			// Throttle frame rate
			if (elapsed < frameInterval) {
				animationFrameId = requestAnimationFrame(animateScene);
				return;
			}

			lastFrameTime = now - (elapsed % frameInterval);

			if (shouldAnimate) {
				const time = now * 0.00005;
				const h = ((360 * (1.0 + time)) % 360) / 360;
				material.color.setHSL(h, 0.5, 0.5);
			}

			// Reduce camera movement smoothing on mobile for better performance
			const smoothFactor = isMobile ? 0.02 : 0.05;
			camera.position.x += (mouseX - camera.position.x) * smoothFactor;
			camera.position.y += (-mouseY - camera.position.y) * smoothFactor;
			camera.lookAt(scene.position);

			renderer.render(scene, camera);
			animationFrameId = requestAnimationFrame(animateScene);
		};

		const renderer = init();
		window.addEventListener("resize", handleResize);
		window.addEventListener("pointermove", handlePointerMove);
		animateScene();

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("pointermove", handlePointerMove);
			cancelAnimationFrame(animationFrameId);

			if (renderer) {
				renderer.dispose();
				container.removeChild(renderer.domElement);
			}

			if (material) material.dispose();
		};
	}, [color, particleCount, particleSize, animate]);

	return (
		<div
			ref={mountRef}
			className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
		/>
	);
}
