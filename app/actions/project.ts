'use server';

import prisma from '@/lib/db/prisma';
import { ProjectSchema } from '../schema/project';

export async function createProject(form: FormData) {
	const { success, data, error } = ProjectSchema.safeParse(form);
	if (error) {
		return {
			error: error.flatten(),
		};
	}
	if (success && data) {
		await prisma.project.create({
			data: {
				...data,
				features: data.features
					? {
							createMany: {
								data: data.features,
							},
					  }
					: undefined,
			},
		});
	}
}

export async function deleteProject(id: string) {
	await prisma.project.delete({
		where: { id },
	});
}

// export async function updateProject(form: FormData) {
// 	const { success, data, error } = ProjectSchema.safeParse(form);
// 	if (error) {
// 		return {
// 			error: error.flatten(),
// 		};
// 	}
// 	if (success && data) {
// 		await prisma.project.update({
// 			where: { id: data.id },
// 			data: {
// 				...data,
// 				features: data.features,
// 			},
// 		});
// 	}
// }
