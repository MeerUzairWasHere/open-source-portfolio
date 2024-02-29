'use server';

import prisma from "@/db";

import { CreateAndEditTechstackType, createAndEditTechstackType, Techstack } from './../lib/types/techstack-types/index';

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createTechstackAction(values: CreateAndEditTechstackType): Promise<Techstack | null> {
    try {
        authenticateAndRedirect();
        createAndEditTechstackType.parse(values);

        const techstack: Techstack = await prisma.techstack.create({
            data: {
                ...values
            }
        });

        return techstack;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getAllTechstacksAction(): Promise<{
    techstacks: Techstack[]
}> {
    try {
        const techstacks: Techstack[] = await prisma.techstack.findMany({})
        return { techstacks };
    } catch (error) {
        console.log(error);
        return { techstacks: [] };
    }
}

export async function getSingleTechstackAction(id: string): Promise<Techstack | null> {
    let techstack: Techstack | null = null;
    const userId = authenticateAndRedirect();

    try {
        techstack = await prisma.techstack.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        techstack = null;
    }
    if (!techstack) {
        redirect('/admin-dashboard/manage-techstack');
    }
    return techstack;
}

export async function deleteTechstackAction(id: string): Promise<Techstack | null> {
    const userId = authenticateAndRedirect();

    try {
        const techstack: Techstack = await prisma.techstack.delete({
            where: {
                id,
            },
        });
        return techstack;
    } catch (error) {
        return null;
    }
}
export async function updateTechstackAction(
    id: string,
    values: CreateAndEditTechstackType
): Promise<Techstack | null> {
    const userId = authenticateAndRedirect();

    try {
        const techtstack: Techstack = await prisma.techstack.update({
            where: {
                id,
            },
            data: {
                ...values,
            },
        });
        return techtstack;
    } catch (error) {
        return null;
    }
}
