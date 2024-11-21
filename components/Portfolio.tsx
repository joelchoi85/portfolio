import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';
export default function Portfolio() {
	return (
		<div className="h-full flex items-center">
			<div id="portfolio" className="w-full flex gap-8 flex-wrap justify-center *:max-w-xl">
				<div className="w-3/4 aspect-square bg-gradient-to-br from-zinc-800 to-stone-800 rounded-2xl flex flex-col gap-4 justify-center items-center">
					<RiNextjsFill size={120} />
					<div className="text-lg lg:text-2xl font-mono">A Project with Nextjs 15</div>
					<div className="lg:text-xl">Nextjs15를 활용한 프로젝트</div>
				</div>
				<div className="flex gap-8 w-full items-start flex-wrap">
					<div className="w-1/2 aspect-square bg-cyan-900 rounded-2xl flex items-center justify-center text-xl">
						<Link href="/why">Why Next.js?</Link>
					</div>
					<div className="flex flex-col gap-2">
						<div>고고</div>
						<div>고고고</div>
					</div>
				</div>
			</div>
		</div>
	);
}
