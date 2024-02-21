'use server';

import prisma from "@/db";
import {
    CreateAndEditProjectType,
    Project,
    createAndEditProjectSchema,
} from "@/lib/types/project-types";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
// import { connectToDatabase } from '@/db';

// import db from "@/db";

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createProjectAction(values: any) {
    try {
        createAndEditProjectSchema.parse(values);
        const project = await prisma.project.create({
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


export async function getAllProjectsAction() {
    try {
        const projects = await prisma.project.findMany({})
        console.log(projects)
        return { projects };
    } catch (error) {
        console.log(error);
        return { AllProjects: [] };
    }
}