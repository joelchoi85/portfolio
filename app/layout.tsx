import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
// import localFont from 'next/font/local';
import './globals.css';

const Noto = Noto_Sans_KR();

// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// 	weight: '100 900',
// });
// const geistMono = localFont({
// 	src: './fonts/GeistMonoVF.woff',
// 	variable: '--font-geist-mono',
// 	weight: '100 900',
// });

export const metadata: Metadata = {
	title: 'Welcome to Joelland',
	description: 'Nextjs',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			{/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-200`}> */}
			<body className={`${Noto.className} antialiased bg-zinc-900 text-zinc-200`}>{children}</body>
		</html>
	);
}
