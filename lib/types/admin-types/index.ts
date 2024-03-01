
import { JsonValue } from '@prisma/client/runtime/library';
import * as z from 'zod';

export type AdminType = {
    id: string
    name: string
    adminUserId: string
    imageUrl: string
    position: string
    location: string
    introduction: string
    education: string
    skills: JsonValue[]
    github?: string | null | undefined
    linkedIn?: string | null | undefined
    whatsapp?: string | null | undefined
    facebook?: string | null | undefined
    instagram?: string | null | undefined
    discord?: string | null | undefined
    website?: string | null | undefined
    twitter?: string | null | undefined
    email?: string | null | undefined
}

export type Skill = {
    id: string;
    text: string;
}

export const createAndEditAdminSchema = z.object({
    name: z.string().min(1, {
        message: "Fullname is required!"
    }),

    imageUrl: z.string(),
    position: z.string().min(1, {
        message: "Position is required!"
    }),
    location: z.string().min(1, {
        message: "Location is required!"
    }),
    introduction: z.string().min(1, {
        message: "Introduction is required!"
    }),
    education: z.string().min(1, {
        message: "Education is required!"
    }),
    skills: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        })
    ).min(1, {
        message: 'at least one skill is required',
    }),
    github: z.string().optional(),
    linkedIn: z.string().optional(),
    whatsapp: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    discord: z.string().optional(),
    website: z.string().optional(),
    twitter: z.string().optional(),
    email: z.string().email().optional(),
})

export type CreateAndEditAdminType = z.infer<typeof createAndEditAdminSchema>