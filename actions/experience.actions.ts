'use server';

import prisma from "@/db";
import { ExperienceType, createAndEditExperienceSchema, CreateAndEditExperienceType } from "@/lib/types/experience-types";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


  function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createExperienceAction(values: CreateAndEditExperienceType): Promise<ExperienceType | null> {
    authenticateAndRedirect()
    try {
        createAndEditExperienceSchema.parse(values);

        const exp: ExperienceType = await prisma.experience.create({
            data: {
                ...values
            }
        });

        return exp;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getAllExperienceAction(): Promise<{
    experience: ExperienceType[]
}> {
    try {
        const experience: ExperienceType[] = await prisma.experience.findMany({})
        return { experience };
    } catch (error) {
        console.log(error);
        return { experience: [] };
    }
}


export async function deleteExperienceAction(id: string): Promise<ExperienceType | null> {
    authenticateAndRedirect();

    try {
        const experience: ExperienceType = await prisma.experience.delete({
            where: {
                id,
            },
        });
        return experience;
    } catch (error) {
        return null;
    }
}

export async function getSingleExperienceAction(id: string): Promise<ExperienceType | null> {
    let experience: ExperienceType | null = null;

    try {
        experience = await prisma.experience.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        experience = null;
    }
    if (!experience) {
        redirect('/admin-dashboard/manage-experience');
    }
    return experience;
}


export async function updateExperienceAction(
    id: string,
    values: CreateAndEditExperienceType
): Promise<ExperienceType | null> {
    authenticateAndRedirect();

    try {
        const experience: ExperienceType = await prisma.experience.update({
            where: {
                id,
            },
            data: {
                ...values,
            },
        });
        return experience;
    } catch (error) {
        return null;
    }
}