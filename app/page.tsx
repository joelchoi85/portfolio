// import Image from "next/image";

import CSROnly from '@/components/csr-only';
import Greeting from '@/components/greeting';
import Light from '@/components/light';
import Portfolio from '@/components/portfolio';
import Projects from '@/components/projects';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<main className="*:overflow-hidden *:w-screen *:h-screen">
				<section className="relative flex flex-col gap-16 justify-center items-center transition-all duration-75 rounded-b-[60px]">
					<Greeting />
					<CSROnly>
						<Light
							id={'light-99'}
							size={50}
							blur={'blur-none'}
							from="from-blue-500"
							to="to-purple-500"
							top="20%"
							left="30%"
						/>
						<Light
							id={'light-98'}
							size={50}
							blur={'blur-none'}
							from="from-green-400"
							to="to-blue-500"
							top="60%"
							left="50%"
						/>
						<Light
							id={'light-97'}
							size={50}
							blur={'blur-none'}
							from="from-orange-400"
							to="to-red-500"
							top="40%"
							left="70%"
						/>
						{Array.from({ length: 15 }).map((_, index) => (
							<Light key={index} id={`light-${index}`} initialSize={Math.random() * 60 + 40} />
						))}
					</CSROnly>
					<div>
						<Link href="#portfolio" className="z-10 rounded-xl bg-black py-4 px-16 hover:bg-zinc-100 hover:text-black">
							구경하기
						</Link>
					</div>
				</section>
				<section>
					<Portfolio />
				</section>
				<section>
					<Projects />
				</section>
			</main>

			<footer></footer>
		</div>
	);
}
