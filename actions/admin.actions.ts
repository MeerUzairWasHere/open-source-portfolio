'use server';

import prisma from "@/db";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { createAndEditAdminSchema, CreateAndEditAdminType, AdminType } from '@/lib/types/admin-types';

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createAdminAction(values: CreateAndEditAdminType): Promise<AdminType | null> {
    const adminUserId = authenticateAndRedirect()

    try {
        createAndEditAdminSchema.parse(values);

        const checkAdminExists: AdminType[] = await prisma.admin.findMany({
            where: {
                adminUserId
            }
        })

        if (checkAdminExists.length > 0) {
            throw new Error("Cannot add more than one admin")
        }

        const admin: AdminType = await prisma.admin.create({
            data: {
                ...values, adminUserId
            }
        });
        return admin;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAdminDetail(): Promise<AdminType | null> {
    try {

        const admin: AdminType[] = await prisma.admin.findMany({})
        return admin[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function deleteAdmin(id: string): Promise<AdminType | null> {
    authenticateAndRedirect();

    try {
        const admin: AdminType = await prisma.admin.delete({
            where: {
                id,
            },
        });
        return admin;
    } catch (error) {
        return null;
    }
}

export async function updateAdminDetails(id: string, values: CreateAndEditAdminType
): Promise<AdminType | null> {
    const adminUserId = authenticateAndRedirect();

    try {
        const admin: AdminType = await prisma.admin.update({
            where: {
                id,
            },
            data: {
                ...values,
            },
        });
        console.log(admin)
        return admin;
    } catch (error) {
        return null;
    }
}