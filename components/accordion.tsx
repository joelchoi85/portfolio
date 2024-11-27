'use client';
import React, { useState } from 'react';

export default function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border-b">
			<div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleAccordion}>
				<h2 className="text-sm font-semibold">{title}</h2>
				<span className="text-lg">{isOpen ? '-' : '+'}</span>
			</div>
			<div className={`overflow-hidden transition-all duration-75 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}
