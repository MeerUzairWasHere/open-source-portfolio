import * as z from 'zod';

type TechStack = { id: string; text: string };
type Keyword = { id: string; text: string };

export type Project = {
    logo: string; // Project Logo: string URL or File
    screenshot: string; // Project Screenshot: string URL or File
    title: string; // Title
    oneLiner: string; // One-Liner
    projectType: "frontend" | "backend" | "full-stack"; // Project Type
    liveURL: string; // Live URL
    techStack: TechStack[]; // Tech Stack: array of objects having 2 properties id and text
    keywords: Keyword[]; // Keywords array of objects having 2 properties id and text
    description: string; // Description
};


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