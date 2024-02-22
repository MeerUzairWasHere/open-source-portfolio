import { Prisma } from '@prisma/client';
import * as z from 'zod';


export type Project = {
    id: string
    logo: string; // Project Logo: string URL or File
    screenshot: string; // Project Screenshot: string URL or File
    title: string; // Title
    oneLiner: string; // One-Liner
    projectType: string // Project Type
    liveURL: string; // Live URL
    description: string; // Description
    keywords: Prisma.JsonValue[]
    techStack: Prisma.JsonValue[]
};
export type ObjectTag = {
    id: string;
    text: string;
}


export enum ProjectType {
    Frontend = 'frontend',
    Backend = 'backend',
    FullStack = 'full-stack',
}


export const createAndEditProjectSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    oneLiner: z.string().min(2, {
        message: 'One-liner must be at least 2 characters.',
    }),
    logo: z.string(),
    screenshot: z.string(),
    projectType: z.nativeEnum(ProjectType),
    liveURL: z.string().url({
        message: 'Live URL must be a valid URL.',
    }),
    techStack: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        })
    ).min(1, {
        message: 'at least one tech stack',
    }).max(7, { message: 'maximum limit 07.' }),
    keywords: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        })
    ).min(1, {
        message: 'at least one keywords',
    }).max(3, { message: 'maximum limit 3.' }),
    description: z.string().min(2, {
        message: 'Description must be at least 30 characters.',
    }).max(300, {
        message: "Description cannot be more than 300 characters"
    })
});


export type CreateAndEditProjectType = z.infer<typeof createAndEditProjectSchema>;