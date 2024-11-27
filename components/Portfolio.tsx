import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';
export default function Portfolio() {
	return (
		<div id="portfolio" className="h-screen flex items-center overflow-y-auto">
			<div className="w-full flex flex-wrap gap-8 justify-center *:max-w-xl">
				<Link
					href="#projects"
					className="w-3/4 aspect-square bg-gradient-to-br from-zinc-800 to-stone-800 hover:from-zinc-700 hover:to-stone-700 rounded-2xl flex flex-col gap-4 justify-center items-center"
				>
					<RiNextjsFill size={120} />
					<div className="text-lg lg:text-2xl font-mono">Projects with Next.js 15</div>
					<div className="lg:text-xl">Next.js15 프로젝트</div>
				</Link>
				<div className="w-3/4 flex flex-col gap-8 items-center lg:items-start flex-wrap">
					<Link
						href="/why"
						className="lg:w-1/2 w-full aspect-square bg-teal-950 hover:bg-teal-900 rounded-2xl flex items-center justify-center text-xl"
					>
						Why Next.js?
					</Link>
					<div className="lg:w-1/2 w-full aspect-square bg-cyan-950 hover:bg-cyan-900 rounded-2xl flex items-center justify-center text-xl">
						<Link href="/why">Why Next.js?</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
