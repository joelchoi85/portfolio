import { z } from 'zod';
// Feature 스키마

// Project 스키마
export const ProjectSchema = z.object({
	id: z.ostring(),
	title: z.string().min(1, 'Title is required'),
	subtitle: z.string(),
	link: z.string().url().optional(),
	features: z.lazy(() => FeatureSchema.array()),
	stacks: z.array(z.string()),
	startAt: z.date(),
	endAt: z.date(),
});

// const baseFeatureSchema = z.object({
// 	id: z.onumber(),
// 	content: z.string(),
// 	parentId: z.onumber(),
// 	projectId: z.string(),
// });
// type Feature = z.infer<typeof baseFeatureSchema> & {
// 	children: Feature[];
// 	parent?: Feature;
// 	project: z.infer<typeof ProjectSchema>;
// };
// // Feature 스키마
// export const FeatureSchema: z.ZodType<Feature> = baseFeatureSchema.extend({
// 	children: z.lazy(() => FeatureSchema.array()),
// 	parent: z.lazy(() => FeatureSchema.optional()),
// 	project: z.lazy(() => ProjectSchema),
// });

const baseFeatureSchema = z.object({
	indent: z.number().max(2),
	content: z.string().min(2),
	order: z.number(),
	projectId: z.string(),
});

type Feature = z.infer<typeof baseFeatureSchema> & {
	project: z.infer<typeof ProjectSchema>;
};

export const FeatureSchema: z.ZodType<Feature> = baseFeatureSchema.extend({
	project: z.lazy(() => ProjectSchema),
});
// Like 스키마
export const LikeSchema = z.object({
	id: z.ostring(),
	ip: z.string().ip(),
	projectId: z.string(),
	project: ProjectSchema,
});
