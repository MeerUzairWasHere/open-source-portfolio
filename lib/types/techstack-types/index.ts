import { Prisma } from '@prisma/client';
import * as z from 'zod';

export type Techstack = {
    id: string
    title: string;
    imageUrl: string;
    category: string;
    url: string;
    techstackType: string;
}
export enum TechType {
    Skills = 'skills',
    DevTools = 'dev-tools',
    Apps = 'apps',
    Games = 'games',
    Harware = 'hardware',
}

export const createAndEditTechstackType = z.object({
    title: z.string().min(1, {
        message: "Title is required!"
    }),
    imageUrl: z.string(),
    category: z.string().min(1, {
        message: "Category is required!"
    }),
    url: z.string().url().min(1, {
        message: "Url is required!"
    }),
    techstackType: z.nativeEnum(TechType),
})
export type CreateAndEditTechstackType = z.infer<typeof createAndEditTechstackType>;