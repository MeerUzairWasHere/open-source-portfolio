import { JsonValue } from '@prisma/client/runtime/library';
import * as z from 'zod';

export type CertificateType = {
    id: string,
    title: string,
    organizationName: string,
    completionDate: Date,
    learned: JsonValue[],
    credentialID: string,
    certificateUrl: string,
    screenshot: string,
};

const minDate: Date = new Date("2000-01-01")



export const createAndEditCertificateSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    organizationName: z.string().min(3, {
        message: "Organization name is required."
    }),
    completionDate: z.date().min(minDate, {
        message: "Completion date is required."
    }),
    learned: z.array(z.object({
        id: z.string(),
        text: z.string(),
    })).min(1, {
        message: "What I Learned is required."
    }).max(3, {
        message: "Maximum limit is 3."
    }),
    credentialID: z.string().min(1, {
        message: "Credential ID is required."
    }),
    certificateUrl: z.string().url({
        message: 'A valid URL is required.',
    }).min(1, {
        message: "Certificate Url is required."
    }),
    screenshot: z.string(),
});


export type CreateAndEditCertificateType = z.infer<typeof createAndEditCertificateSchema>;