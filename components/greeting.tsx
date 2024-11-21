'use client';

import { useEffect, useState } from 'react';

export default function Greeting() {
	const [land, setLand] = useState<string>('US');
	useEffect(() => {
		setLand((typeof window !== 'undefined' ? navigator.language : 'en-US').split('-')[1] || 'US');
	}, [setLand]);
	const Grußliste: {
		[any: string]: { sayHi: string; myNameIs: string; name: string; afterName: string; myJobIs: string };
	} = {
		US: {
			sayHi: 'Hello!',
			myNameIs: "I'm ",
			name: 'Joel Choi',
			afterName: '.',
			myJobIs: "I'm a full-stack developer.",
		},
		KR: {
			sayHi: '안녕하세요!',
			myNameIs: '',
			name: '최중열',
			afterName: '입니다.',
			myJobIs: '저는 풀스택 개발자입니다.',
		},
		DE: {
			sayHi: 'Hallo!',
			myNameIs: 'Ich heiße',
			name: 'Joel Choi',
			afterName: '.',
			myJobIs: 'Ich bin Vollständige Web-Entwickler.',
		},
	};

	return (
		<div className="bg-zinc-800 rounded-lg px-16 py-8 z-10 bg-opacity-10">
			{['US', 'KR', 'DE'].includes(land) ? (
				<div className="text-lg lg:text-2xl hover:scale-125 transition-all duration-75 select-none">
					{Grußliste[land].sayHi} {Grußliste[land].myNameIs}
					<span className="text-cyan-600">{Grußliste[land].name}</span>
					{Grußliste[land].afterName}
					<br /> {Grußliste[land].myJobIs}
				</div>
			) : (
				<div className="text-lg lg:text-2xl hover:scale-125 transition-all duration-75 select-none">
					{Grußliste.US.sayHi}
					<span className="text-cyan-600">{Grußliste.US.name}</span>
					{Grußliste.US.afterName}
					<br /> {Grußliste.US.myJobIs}
				</div>
			)}
		</div>
	);
}
