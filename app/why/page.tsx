import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import PythonCode from '@/app/_mdx/pythoncode.mdx';
import PHPCode from '@/app/_mdx/phpcode.mdx';
import JSCode from '@/app/_mdx/jscode.mdx';
import NextCode from '@/app/_mdx/nextcode.mdx';
import { FaChevronDown } from 'react-icons/fa6';
export const metadata = {
	title: 'Next.js의 장점',
	description: 'Next.js의 주요 장점과 선택 이유',
};
export default function Why() {
	return (
		<div id="#why" className="relative w-screen h-screen flex">
			<Link className="absolute top-0 w-full p-8 z-10" href="/#portfolio" title="홈으로">
				<FaChevronLeft />
			</Link>
			<div className="w-full flex flex-col gap-32 items-center">
				<div className="w-full bg-zinc-700 p-8 space-y-2 fixed">
					<h1 className="text-3xl text-center">Next.js를 선택하게 된 계기</h1>
					<h1 className="text-xl text-center font-serif text-zinc-400">Why am I choose Next.js?</h1>
					<h1 className="text-xl text-center font-serif text-zinc-400">Ich habe Next.js ausgewählt, dass...</h1>
				</div>
				<div className="pt-64 flex flex-col gap-16 overflow-auto h-full">
					<ul className="space-y-4 border-2 p-8 rounded-xl">
						<li>
							<h2 className="-indent-4 text-xl">서버 사이드 렌더링(SSR)</h2>
							<p>Next.js는 서버 사이드에서 페이지를 렌더링하여 SEO에 유리하고 초기 로딩 속도가 빠릅니다.</p>
						</li>
						<li>
							<h2 className="-indent-4 text-xl">정적 사이트 생성(SSG)</h2>
							<p>사전 렌더링을 통해 정적 페이지를 생성하여 사용자에게 빠른 응답 속도를 제공합니다.</p>
						</li>
						<li>
							<h2 className="-indent-4 text-xl">API 라우트</h2>
							<p>Next.js 내에서 API를 쉽게 구축할 수 있어, 프론트엔드와 백엔드를 통합할 수 있습니다.</p>
						</li>
						<li>
							<h2 className="-indent-4 text-xl">자동 코드 분할</h2>
							<p>페이지 단위로 자동으로 코드가 분할되어 필요한 코드만 로드되어 성능이 향상됩니다.</p>
						</li>
						<li>
							<h2 className="-indent-4 text-xl">개발자 경험</h2>
							<p>빠른 핫 리로딩과 쉬운 설정으로 개발자에게 친숙한 환경을 제공합니다.</p>
						</li>
						<li>
							<h2 className="-indent-4 text-xl">커뮤니티와 생태계</h2>
							<p>강력한 커뮤니티와 다양한 플러그인, 라이브러리 덕분에 문제 해결이 쉽습니다.</p>
						</li>
					</ul>
					<div className="text-2xl">는 nextjs.org 외에도 여러 블로그에서 광고하고 있는 장점입니다.</div>
					<div className="">
						저는 Nextjs의 로딩 속도와 테스트 용이성에 매력을 갖게 됐고, 러닝커브가 비교적 작은 편이라 토이 프로젝트로
						시작하기에 좋을 것 같다고 판단했습니다. <br /> 그것과 더불어 테스트부터 배포까지 적은 비용으로 가능했고,
						<br />
						따로 신경쓰지 않아도 github과의 연동으로 CI/CD 파이프라인이 이루어져 있어 2~3분 내 배포를 확인해볼 수
						있었습니다.
						<br />
					</div>
					<div>
						기존 레거시 코드[PHP, JS, AWS-Lambda(Python)]에서 익숙해진 JS 하나로 페이지를 만들 수 있다는 장점도
						있었습니다.
					</div>
					<div className="flex flex-col gap-12">
						<div className="flex -space-x-96 w-full max-h-96 overflow-clip">
							<PythonCode className="max-w-96 overflow-clip" />
							<PHPCode className="max-w-96 overflow-clip" />
							<JSCode className="max-w-96 overflow-clip" />
						</div>
						<div className="flex justify-center">
							<FaChevronDown size={48} />
						</div>
						<div>
							<NextCode />
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}
