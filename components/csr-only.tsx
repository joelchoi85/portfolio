'use client';
import dynamic from 'next/dynamic';

const CSROnly = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export default dynamic(() => Promise.resolve(CSROnly), { ssr: false });
