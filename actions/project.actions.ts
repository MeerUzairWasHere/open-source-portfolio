'use server';

import {
    CreateAndEditProjectType,
    ProjectType,
    Project,
    createAndEditProjectSchema,
} from "@/lib/types/project-types";
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import connectDB from '@/db';

import ProjectModel from "@/db/models/project.model";

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}

export async function createProjectAction(
    values: CreateAndEditProjectType
): Promise<Project | null> {
    authenticateAndRedirect();
    try {
        await connectDB()
        createAndEditProjectSchema.parse(values);
        console.log(values)
        // const project: Project = await ProjectModel.create({ ...values });

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}