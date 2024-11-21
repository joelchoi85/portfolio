import { PrismaClient } from '@prisma/client';

declare global {
	var db: PrismaClient | undefined;
}

export const db =
	globalThis.db ||
	new PrismaClient({
		log: [
			{ level: 'warn', emit: 'event' },
			{ level: 'info', emit: 'event' },
			{ level: 'error', emit: 'event' },
		],
	});

if (process.env.NODE_ENV !== 'production') globalThis.db = db;

// async function main() {
// }

// main()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async e => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});
