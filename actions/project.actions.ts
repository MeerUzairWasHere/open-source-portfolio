'use server';

import prisma from "@/db";
import {
    CreateAndEditProjectType,
    Project,
    createAndEditProjectSchema,
} from "@/lib/types/project-types";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createProjectAction(values: CreateAndEditProjectType): Promise<Project | null> {
    try {
        createAndEditProjectSchema.parse(values);

        const project: Project = await prisma.project.create({
            data: {
                ...values
            }
        });

        return project;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getAllProjectsAction(): Promise<{
    projects: Project[]
}> {
    try {
        const projects: Project[] = await prisma.project.findMany({})
        return { projects };
    } catch (error) {
        console.log(error);
        return { projects: [] };
    }
}

export async function getSingleProjectAction(id: string): Promise<Project | null> {
    let project: Project | null = null;
    const userId = authenticateAndRedirect();

    try {
        project = await prisma.project.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        project = null;
    }
    if (!project) {
        redirect('/admin-dashboard/manage-projects');
    }
    return project;
}

export async function deleteProjectAction(id: string): Promise<Project | null> {
    const userId = authenticateAndRedirect();

    try {
        const job: Project = await prisma.project.delete({
            where: {
                id,
            },
        });
        return job;
    } catch (error) {
        return null;
    }
}
export async function updateProjectAction(
    id: string,
    values: CreateAndEditProjectType
): Promise<Project | null> {
    const userId = authenticateAndRedirect();

    try {
        const job: Project = await prisma.project.update({
            where: {
                id,
            },
            data: {
                ...values,
            },
        });
        return job;
    } catch (error) {
        return null;
    }
}
