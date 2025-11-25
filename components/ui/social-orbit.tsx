"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IconConfig {
	icon: React.ReactNode;
	orbitIndex: number; // 1 or 2 for inner/outer orbit
	position: number; // 0-360 degrees
	href?: string; // Optional link
	label?: string; // Accessibility label
}

interface SocialOrbitProps {
	children: React.ReactNode;
	rippleCount?: number;
	text?: string;
	rippleDuration?: number;
	textOrbitIndex?: number;
	textDuration?: number;
	orbitDuration?: number;
	iconDelay?: number;
	iconDuration?: number;
	icons?: IconConfig[];
	className?: string;
}

export function SocialOrbit({
	children,
	rippleCount = 3,
	text = "",
	rippleDuration = 2,
	textOrbitIndex = 3,
	textDuration = 20,
	orbitDuration = 30,
	iconDelay = 200,
	iconDuration = 800,
	icons = [],
	className,
}: SocialOrbitProps) {
	const [animatedIcons, setAnimatedIcons] = useState<Set<number>>(new Set());
	const [rotationStarted, setRotationStarted] = useState(false);

	// Orbit radii
	const orbit1Radius = 60; // Inner orbit
	const orbit2Radius = 100; // Outer orbit
	const textOrbitRadius =
		textOrbitIndex === 1 ? orbit1Radius : textOrbitIndex === 2 ? orbit2Radius : 140;

	useEffect(() => {
		const timeoutIds: NodeJS.Timeout[] = [];

		// Animate icons with delay
		icons.forEach((_, index) => {
			const id = setTimeout(() => {
				setAnimatedIcons((prev) => new Set([...prev, index]));
			}, index * iconDelay);
			timeoutIds.push(id);
		});

		// Start rotation after all icons are animated
		const rotationTimeout = setTimeout(
			() => {
				setRotationStarted(true);
			},
			icons.length * iconDelay + iconDuration
		);
		timeoutIds.push(rotationTimeout);

		return () => {
			timeoutIds.forEach((id) => clearTimeout(id));
			setAnimatedIcons(new Set());
			setRotationStarted(false);
		};
	}, [icons.length, iconDelay, iconDuration]);

	const getOrbitRadius = (orbitIndex: number) => {
		return orbitIndex === 1 ? orbit1Radius : orbit2Radius;
	};

	const calculatePosition = (radius: number, angle: number) => {
		const radian = (angle * Math.PI) / 180;
		return {
			x: Math.cos(radian) * radius,
			y: Math.sin(radian) * radius,
		};
	};

	return (
		<div className={cn("relative w-32 h-32", className)}>
			{/* Ripple effects */}
			{Array.from({ length: rippleCount }, (_, i) => (
				<div
					key={`ripple-${i}`}
					className="absolute inset-0 rounded-full border border-white/20"
					style={{
						animation: `ripple-${i} ${rippleDuration}s ease-out infinite`,
						animationDelay: `${i * 0.5}s`,
					}}
				/>
			))}

			{/* Orbit paths */}
			<div
				className="absolute rounded-full border border-white/10"
				style={{
					width: `${orbit1Radius * 2}px`,
					height: `${orbit1Radius * 2}px`,
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			/>
			<div
				className="absolute rounded-full border border-white/10"
				style={{
					width: `${orbit2Radius * 2}px`,
					height: `${orbit2Radius * 2}px`,
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			/>

			{/* Text orbit */}
			{text && (
				<div
					className="absolute"
					style={{
						width: `${textOrbitRadius * 2}px`,
						height: `${textOrbitRadius * 2}px`,
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						animation: rotationStarted
							? `text-rotate ${textDuration}s linear infinite`
							: "none",
					}}
				>
					<div
						className="absolute text-xs text-white/40 tracking-wider"
						style={{
							transform: "translate(-50%, -50%)",
							transformOrigin: "center",
							left: "50%",
							top: "0%",
						}}
					>
						{text}
					</div>
				</div>
			)}

			{/* Icons */}
			{icons.map((iconConfig, index) => {
				const radius = getOrbitRadius(iconConfig.orbitIndex);
				const isAnimated = animatedIcons.has(index);

				const IconWrapper = iconConfig.href ? "a" : "div";

				return (
					<div
						key={index}
						className="absolute"
						style={{
							left: "50%",
							top: "50%",
							width: `${radius * 2}px`,
							height: `${radius * 2}px`,
							transform: "translate(-50%, -50%)",
							animation: rotationStarted
								? `orbit-${iconConfig.orbitIndex} ${orbitDuration}s linear infinite`
								: "none",
						}}
					>
						<div
							className="absolute"
							style={{
								left: "50%",
								top: "0%",
								transform: isAnimated
									? `translate(-50%, -50%) scale(1) rotate(${iconConfig.position}deg)`
									: "translate(-50%, -50%) scale(0) rotate(${iconConfig.position}deg)",
								transition: `transform ${iconDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
								opacity: isAnimated ? 1 : 0,
								animation: rotationStarted
									? `counter-rotate-${iconConfig.orbitIndex} ${orbitDuration}s linear infinite`
									: "none",
							}}
						>
							<IconWrapper
								className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								{...(iconConfig.href && {
									href: iconConfig.href,
									target: iconConfig.href.startsWith("http")
										? "_blank"
										: undefined,
									rel: iconConfig.href.startsWith("http")
										? "noopener noreferrer"
										: undefined,
									"aria-label": iconConfig.label,
								})}
							>
								{iconConfig.icon}
							</IconWrapper>
						</div>
					</div>
				);
			})}

			{/* Center content */}
			<div className="absolute inset-0 flex items-center justify-center z-10">{children}</div>

			{/* Global styles for animations */}
			<style jsx>{`
				@keyframes ripple-0 {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(4);
						opacity: 0;
					}
				}
				@keyframes ripple-1 {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(4);
						opacity: 0;
					}
				}
				@keyframes ripple-2 {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(4);
						opacity: 0;
					}
				}
				@keyframes text-rotate {
					from {
						transform: translate(-50%, -50%) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) rotate(360deg);
					}
				}
				@keyframes orbit-1 {
					from {
						transform: translate(-50%, -50%) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) rotate(360deg);
					}
				}
				@keyframes orbit-2 {
					from {
						transform: translate(-50%, -50%) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) rotate(360deg);
					}
				}
				@keyframes counter-rotate-1 {
					from {
						transform: translate(-50%, -50%) scale(1) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) scale(1) rotate(-360deg);
					}
				}
				@keyframes counter-rotate-2 {
					from {
						transform: translate(-50%, -50%) scale(1) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) scale(1) rotate(-360deg);
					}
				}
			`}</style>
		</div>
	);
}
