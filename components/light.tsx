'use client';

interface LightProps {
	id: string;
	blur?: string;
	size?: number;
	from?: string;
	to?: string;
	top?: string;
	left?: string;
}

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LightProps {
	id: string;
	initialSize?: number;
	initialTop?: number;
	initialLeft?: number;
	blur?: string;
	from?: string;
	to?: string;
}
const colorSwatch = {
	from: [
		'from-yellow-200',
		'from-orange-200',
		'from-lime-200',
		'from-green-200',
		'from-emerald-200',
		'from-teal-200',
		'from-cyan-200',
		'from-sky-200',
		'from-blue-200',
		'from-indigo-200',
		'from-violet-200',
		'from-purple-200',
		'from-fuchsia-200',
		'from-rose-200',
	],
	to: [
		'to-yellow-200',
		'to-orange-200',
		'to-lime-200',
		'to-green-200',
		'to-emerald-200',
		'to-teal-200',
		'to-cyan-200',
		'to-sky-200',
		'to-blue-200',
		'to-indigo-200',
		'to-violet-200',
		'to-purple-200',
		'to-fuchsia-200',
		'to-rose-200',
	],
};
const blurSwatch = ['blur-none', 'blur-sm', 'blur-md', 'blur', 'blur-lg', 'blur-xl', 'blur-2xl', 'blur-3xl'];

export default function Light({ id, initialSize, initialTop, initialLeft, blur, from, to }: LightProps) {
	const [initial, setInitial] = useState({
		size: Math.ceil(Math.random() * 100),
		top: Math.ceil(Math.random() * 100),
		left: Math.ceil(Math.random() * 100),
		blur: 'blur-2xl',
		from: 'from-purple-200',
		to: 'to-blue-200',
		phase: Math.ceil(Math.random() * 100),
		amplitude: Math.ceil(Math.random() * 100),
		period: Math.ceil(Math.random() * 100),
	});
	useEffect(() => {
		setInitial({
			size: initialSize || Math.random() * 60 + 10,
			top: initialTop || Math.random() * window.innerHeight + 10,
			left: initialLeft || Math.random() * window.innerWidth + 10,
			blur: blur || blurSwatch[Math.ceil(Math.random() * blurSwatch.length) - 1],
			from: from || colorSwatch.from[Math.ceil(Math.random() * colorSwatch.from.length) - 1],
			to: to || colorSwatch.to[Math.ceil(Math.random() * colorSwatch.to.length) - 1],
			phase: Math.random() * Math.PI * 2,
			amplitude: Math.random() * 0.5 + 0.5,
			period: Math.random() * 2000 + 3000,
		});
	}, [initialSize, initialTop, initialLeft, blur, from, to]);
	// const initial = useMemo(
	// 	() => ({
	// 		size: initialSize || Math.ceil(Math.random() * 100) + 20,
	// 		top: initialTop || Math.random() * 80 + 10, // 10-90% 범위
	// 		left: initialLeft || Math.random() * 80 + 10, // 10-90% 범위
	// 		blur: blur || blurSwatch[Math.ceil(Math.random() * blurSwatch.length) - 1],
	// 		from: from || colorSwatch.from[Math.ceil(Math.random() * colorSwatch.from.length) - 1],
	// 		to: to || colorSwatch.to[Math.ceil(Math.random() * colorSwatch.to.length) - 1],
	// 		// 부유 움직임을 위한 랜덤 속도
	// 		floatSpeedX: (Math.random() - 0.5) * 0.02,
	// 		floatSpeedY: (Math.random() - 0.5) * 0.02,
	// 		phase: Math.random() * Math.PI * 2, // 랜덤한 시작 위상
	// 		amplitude: Math.random() * 0.5 + 0.5, // 랜덤한 움직임 크기
	// 		period: Math.random() * 2000 + 3000, // 3-5초의 랜덤한 주기
	// 	}),
	// 	[initialSize, initialTop, initialLeft, blur, from, to],
	// );

	const [transform, setTransform] = useState({ x: 0, y: 0 });
	const elementRef = useRef<HTMLDivElement>(null);
	const positionRef = useRef({ x: initial.left, y: initial.top });
	const velocityRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		// const checkBoundariesAndReflect = (element: HTMLElement) => {
		// 	const rect = element.getBoundingClientRect();
		// 	const windowWidth = window.innerWidth;
		// 	const windowHeight = window.innerHeight;
		// 	const { x, y } = velocityRef.current;
		// 	const needsUpdate = false;

		// 		// 좌우 경계 체크
		// 		if (rect.right + transform.x > windowWidth) {
		// 			x = -Math.abs(x) * 0.9; // 오른쪽 경계 반사
		// 			needsUpdate = true;
		// 		} else if (rect.left + transform.x < 0) {
		// 			x = Math.abs(x) * 0.9; // 왼쪽 경계 반사
		// 			needsUpdate = true;
		// 		}

		// 		// 상하 경계 체크
		// 		if (rect.bottom + transform.y > windowHeight) {
		// 			y = -Math.abs(y) * 0.9; // 아래쪽 경계 반사
		// 			needsUpdate = true;
		// 		} else if (rect.top + transform.y < 0) {
		// 			y = Math.abs(y) * 0.9; // 위쪽 경계 반사
		// 			needsUpdate = true;
		// 		}

		// 		if (needsUpdate) {
		// 			velocityRef.current = { x, y };
		// 		}

		// 		return needsUpdate;
		// };
		let animationFrameId: number;
		const startTime = Date.now();

		const animate = () => {
			const element = elementRef.current;
			if (!element) {
				animationFrameId = requestAnimationFrame(animate);
				return;
			}

			const currentTime = Date.now();
			const elapsed = currentTime - startTime;

			// 자연스러운 부유 움직임
			const floatX = Math.sin(elapsed / initial.period + initial.phase) * initial.amplitude;
			const floatY = Math.cos(elapsed / (initial.period * 1.5) + initial.phase) * initial.amplitude;

			// 현재 속도에 부유 움직임 추가
			velocityRef.current.x += floatX * 0.1;
			velocityRef.current.y += floatY * 0.1;

			// 경계 체크 및 반사
			// checkBoundariesAndReflect(element);

			// 속도 감쇠
			velocityRef.current.x *= 0.95;
			velocityRef.current.y *= 0.95;

			// 최종 위치 업데이트
			setTransform(prev => ({
				x: prev.x + velocityRef.current.x,
				y: prev.y + velocityRef.current.y,
			}));

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrameId);
	}, [initial.amplitude, initial.period, initial.phase]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const element = elementRef.current;
			if (!element) return;

			const rect = element.getBoundingClientRect();
			const elementX = rect.left + rect.width / 2;
			const elementY = rect.top + rect.height / 2;

			const deltaX = elementX - e.clientX;
			const deltaY = elementY - e.clientY;
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

			const maxDistance = 200;

			if (distance < maxDistance) {
				const force = (1 - distance / maxDistance) * 1.5;

				velocityRef.current = {
					x: velocityRef.current.x + (deltaX / distance) * force,
					y: velocityRef.current.y + (deltaY / distance) * force,
				};
			}
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	if (typeof window === 'undefined') return <div></div>;

	return (
		<div
			ref={elementRef}
			id={id}
			className={cn(
				'absolute rounded-full bg-gradient-to-br will-change-transform',
				initial.blur,
				initial.from,
				initial.to,
			)}
			style={{
				width: `${initial.size}px`,
				height: `${initial.size}px`,
				top: `${positionRef.current.y}vh`,
				left: `${positionRef.current.x}vw`,
				opacity: 0.6,
				transform: `translate(${transform.x}px, ${transform.y}px)`,
				transition: 'transform 0.05s linear',
			}}
		/>
	);
}
