import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LiaReadme } from 'react-icons/lia';
import {
	SiCloudflare,
	SiGithub,
	SiNextdotjs,
	SiPlanetscale,
	SiPrisma,
	SiReacthookform,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiZod,
} from 'react-icons/si';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import AccordionItem from './accordion';
import { cn } from '@/lib/utils';

export default function Projects() {
	return (
		<div id="projects" className="w-full h-full flex flex-col gap-16 justify-center items-center overflow-y-auto">
			<h1 className="uppercase text-4xl font-black">Projects</h1>
			<div className="flex flex-wrap gap-8  *:rounded-2xl *:border *:min-w-96 *:min-h-96">
				<Card className="m-12 bg-gradient-to-br from-zinc-100 to-stone-300">
					<CardHeader>
						<CardTitle className="font-semibold">개인학원 웹(+CMS)</CardTitle>
						<CardDescription>1인 프로젝트</CardDescription>
						<Link
							href="https://ezk119.com"
							target="_blank"
							className="px-4 py-1.5 rounded-md bg-cyan-500 text-white text-xs"
						>
							https://ezk119.com
						</Link>
					</CardHeader>
					<CardContent className="space-y-2 pl-12">
						<ul className="list-disc space-y-2 *:text-sm">
							<li className="">기존 웹의 기능개선과 관리 효율성 제고를 위해 개인 프로젝트로 시작</li>
							<li className="">비교적 적은 트래픽에 사이드 프로젝트라 저비용 개발이 필요함</li>
							<li className="">
								주요 개발 기능
								<br />
								<ul className="list-inside list-square space-y-1 *:text-xs">
									<li>회원 : 강좌 소개, 결제, 온라인 강의 시청, 상담 체결, 과제 제출, 댓글 및 좋아요</li>
									<li>CMS : 강좌 관리, 회원 관리, 과제 관리, 영상 및 교재 관리, 상담 관리, 출결 관리</li>
								</ul>
							</li>
							<li className="">개발 중 실제로 별도의 웹이 필요한 상황으로 본 프로젝트를 배포하기로 결정</li>
							<li className="">Auth.js로 Google, Kakao 등 SSO 로그인을 구현했으나 미사용</li>
						</ul>
						<AccordionItem title="Tech Stack">
							<div
								className={cn(
									'max-w-96 flex flex-wrap gap-2 ',
									'*:px-3 *:py-1.5 *:flex *:items-center *:gap-2',
									'*:rounded-lg *:bg-gradient-to-br *:from-cyan-500 *:to-teal-500',
									'*:text-white *:text-xs ',
								)}
							>
								<div>
									<SiNextdotjs />
									Next.js
								</div>
								<div>
									<SiGithub />
									Github
								</div>
								<div>
									<SiVercel />
									Vercel
								</div>
								<div>
									<SiTypescript />
									Typescript
								</div>
								<div>Auth.js</div>
								<div>
									<SiPlanetscale />
									PlanetScale
								</div>
								<div>
									<SiPrisma /> Prisma ORM
								</div>
								<div>
									<SiCloudflare />
									Cloudflare
								</div>
								<div>
									<SiZod />
									Zod
								</div>
								<div>
									<SiReacthookform />
									ReactHookForm
								</div>
								<div>
									<SiTailwindcss />
									Tailwindcss
								</div>
								<div>
									<SiShadcnui />
									ShadcnUI
								</div>
							</div>
						</AccordionItem>
					</CardContent>
					<CardFooter>
						<div className="flex gap-4 justify-end"></div>
						<CardDescription className="w-full flex flex-col gap-2">
							<div>12.2023. ~ 04.2024.</div>
						</CardDescription>
						<div className="w-full flex justify-end">
							<Dialog>
								<DialogTrigger asChild>
									<Button className="uppercase">
										<LiaReadme />
										detail
									</Button>
								</DialogTrigger>
								<DialogContent className="text-black">
									<DialogHeader>
										<DialogTitle>Dialog für Details</DialogTitle>
										<DialogDescription>Dialog für Details</DialogDescription>
									</DialogHeader>
									<DialogFooter>
										<DialogClose>닫기</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
