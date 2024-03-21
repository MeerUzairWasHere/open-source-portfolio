'use server';

import prisma from "@/db";

import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { CertificateType, createAndEditCertificateSchema, CreateAndEditCertificateType } from '@/lib/types/certification-types';

function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) redirect('/');
    return userId;
}


export async function createCertificationAction(values: CreateAndEditCertificateType): Promise<CertificateType | null> {
    authenticateAndRedirect()
    try {
        createAndEditCertificateSchema.parse(values);

        const certificate: CertificateType = await prisma.certification.create({
            data: {
                ...values
            }
        });

        return certificate;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getAllCertificationsAction(): Promise<{
    certifications: CertificateType[]
}> {
    try {
        const certifications: CertificateType[] = await prisma.certification.findMany({})
        return { certifications };
    } catch (error) {
        console.log(error);
        return { certifications: [] };
    }
}


export async function deleteCertificationAction(id: string): Promise<CertificateType | null> {
    authenticateAndRedirect();

    try {
        const certificate: CertificateType = await prisma.certification.delete({
            where: {
                id,
            },
        });
        return certificate;
    } catch (error) {
        return null;
    }
}


export async function getSingleCertificationAction(id: string): Promise<CertificateType | null> {
    let certification: CertificateType | null = null;

    try {
        certification = await prisma.certification.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        certification = null;
    }
    if (!certification) {
        redirect('/admin-dashboard/manage-certification');
    }
    return certification;
}


export async function updateCertificationAction(
    id: string,
    values: CreateAndEditCertificateType
): Promise<CertificateType | null> {
    authenticateAndRedirect();

    try {
        const certificate: CertificateType = await prisma.certification.update({
            where: {
                id,
            },
            data: {
                ...values,
            },
        });
        return certificate;
    } catch (error) {
        return null;
    }
}