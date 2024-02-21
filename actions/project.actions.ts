'use server';

import {
    CreateAndEditProjectType,
    Project,
    createAndEditProjectSchema,
} from "@/lib/types/project-types";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '@/db';

import ProjectModel from "@/db/models/project.model";

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}

export async function createProjectAction(values: CreateAndEditProjectType): Promise<boolean> {
    const userId = authenticateAndRedirect();
    await connectToDatabase()
    try {
        createAndEditProjectSchema.parse(values);
        await ProjectModel.create({ ...values });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export async function getAllProjectsAction(): Promise<Project[] | null> {
    await connectToDatabase()
    try {
        const projects: Project[] = await ProjectModel.find({});
        return projects;
    } catch (error) {
        console.log(error);
        return null;
    }
}