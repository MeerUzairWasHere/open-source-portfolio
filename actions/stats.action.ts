'use server';
import prisma from "@/db";
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}

type Stats = {
    title: string;
    count: number;
}
export async function getAllStats(): Promise<{ stats: Stats[] }> {
    try {
        const projects = await prisma.project.count()
        const certifications = await prisma.certification.count()
        const experience = await prisma.experience.count()
        const techstack = await prisma.techstack.count()
        const stats: Stats[] = [{
            title: 'projects',
            count: projects
        },
        {
            title: "certifications",
            count: certifications
        },
        {
            title: "experience",
            count: experience
        },
        {
            title: "techstack",
            count: techstack
        },]
        return { stats }
    } catch (error) {
        console.log(error)
        return { stats: [] }
    }
}