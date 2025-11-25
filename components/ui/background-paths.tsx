"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundPathsProps {
	children?: React.ReactNode;
	className?: string;
	svgOptions?: {
		duration?: number;
	};
}

export function BackgroundPaths({
	children,
	className,
	svgOptions = { duration: 8 },
}: BackgroundPathsProps) {
	const { duration = 8 } = svgOptions;

	return (
		<div className={cn("relative w-full bg-black dark:bg-black overflow-hidden", className)}>
			{/* Animated SVG background paths */}
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none z-0"
				style={{
					mixBlendMode: "screen",
					willChange: "transform",
					transform: "translateZ(0)",
				}}
				viewBox="0 0 1200 800"
				preserveAspectRatio="none"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					{/* Bright gradients – very visible on dark bg */}
					<linearGradient
						id="bp-blue"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							stopColor="rgba(37, 99, 235, 0)"
						/>
						<stop
							offset="25%"
							stopColor="rgba(59, 130, 246, 0.7)"
						/>
						<stop
							offset="50%"
							stopColor="rgba(59, 130, 246, 1)"
						/>
						<stop
							offset="75%"
							stopColor="rgba(59, 130, 246, 0.7)"
						/>
						<stop
							offset="100%"
							stopColor="rgba(37, 99, 235, 0)"
						/>
					</linearGradient>

					<linearGradient
						id="bp-purple"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							stopColor="rgba(109, 40, 217, 0)"
						/>
						<stop
							offset="25%"
							stopColor="rgba(168, 85, 247, 0.7)"
						/>
						<stop
							offset="50%"
							stopColor="rgba(168, 85, 247, 1)"
						/>
						<stop
							offset="75%"
							stopColor="rgba(168, 85, 247, 0.7)"
						/>
						<stop
							offset="100%"
							stopColor="rgba(109, 40, 217, 0)"
						/>
					</linearGradient>

					<linearGradient
						id="bp-cyan"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							stopColor="rgba(8, 47, 73, 0)"
						/>
						<stop
							offset="25%"
							stopColor="rgba(34, 211, 238, 0.7)"
						/>
						<stop
							offset="50%"
							stopColor="rgba(34, 211, 238, 1)"
						/>
						<stop
							offset="75%"
							stopColor="rgba(34, 211, 238, 0.7)"
						/>
						<stop
							offset="100%"
							stopColor="rgba(8, 47, 73, 0)"
						/>
					</linearGradient>

					{/* Soft glow for all strokes */}
					<filter
						id="bp-glow"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
					>
						<feGaussianBlur
							stdDeviation="6"
							result="blur"
						/>
						<feMerge>
							<feMergeNode in="blur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Top path */}
				<path
					d="M0,150 Q240,40 480,150 Q720,260 960,150 Q1100,90 1200,150"
					stroke="url(#bp-blue)"
					strokeWidth={5}
					fill="none"
					strokeLinecap="round"
					strokeDasharray="900"
					strokeDashoffset="900"
					filter="url(#bp-glow)"
					style={{
						animation: `bp-draw ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
						willChange: "stroke-dashoffset, opacity",
					}}
				/>

				{/* Middle path */}
				<path
					d="M0,350 Q200,280 400,350 Q600,420 800,350 Q1000,280 1200,350"
					stroke="url(#bp-purple)"
					strokeWidth={5}
					fill="none"
					strokeLinecap="round"
					strokeDasharray="900"
					strokeDashoffset="900"
					filter="url(#bp-glow)"
					style={{
						animation: `bp-draw ${duration + 2}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
						animationDelay: "0.7s",
						willChange: "stroke-dashoffset, opacity",
					}}
				/>

				{/* Bottom path */}
				<path
					d="M0,550 Q260,500 520,550 Q780,600 1040,550 Q1120,530 1200,550"
					stroke="url(#bp-cyan)"
					strokeWidth={5}
					fill="none"
					strokeLinecap="round"
					strokeDasharray="900"
					strokeDashoffset="900"
					filter="url(#bp-glow)"
					style={{
						animation: `bp-draw ${duration + 3}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
						animationDelay: "1.4s",
						willChange: "stroke-dashoffset, opacity",
					}}
				/>

				{/* A subtle diagonal connector for extra "tech" feel */}
				<path
					d="M150,220 L360,320 L580,260 L820,380 L1050,310"
					stroke="url(#bp-purple)"
					strokeWidth={3}
					fill="none"
					strokeLinecap="round"
					strokeDasharray="600"
					strokeDashoffset="600"
					filter="url(#bp-glow)"
					style={{
						opacity: 0.8,
						animation: `bp-draw-short ${duration - 1}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
						animationDelay: "1s",
						willChange: "stroke-dashoffset, opacity",
					}}
				/>
			</svg>

			{/* Light overlay so text stays readable but paths are still bright */}
			{/* Slightly reduced overlay so the animated strokes show through better */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

			{/* Foreground content (your CTA) */}
			<div className="relative z-10 flex items-center justify-center h-full">{children}</div>

			{/* Keyframes moved to app/globals.css to ensure they are available during SSR/hydration
				which prevents animations being ignored after refresh. */}
		</div>
	);
}
