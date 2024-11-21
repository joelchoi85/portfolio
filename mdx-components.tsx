import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { Badge } from '@/components/ui/badge';
// interface CodeBlockProps {
// 	children: React.ReactNode;
// 	className?: string;
// }
const CodeBlock = ({ children, className }: any): React.ReactNode => {
	const language = className?.replace(/language-/, '') || '';
	return (
		<div className="overflow-x-auto mb-4 text-xs select-none">
			<Badge>{language}</Badge>
			<SyntaxHighlighter
				language={language}
				style={coldarkDark}
				customStyle={{ borderRadius: '0.5rem', backgroundColor: 'rgba(60,60,60,0.6)' }}
			>
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		</div>
	);
};
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: props => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />,
		h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
			<h1 className="text-4xl font-bold text-blue-600 mb-4" {...props} />
		),
		h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
			<h2 className="text-3xl font-semibold text-green-600 mb-4" {...props} />
		),
		p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className="text-gray-800 mb-4" {...props} />,
		div: (props: React.HTMLProps<HTMLDivElement>) => <div className="" {...props} />,
		// MyButton, // 추가한 컴포넌트
		code: CodeBlock,
		...components,
	};
}
