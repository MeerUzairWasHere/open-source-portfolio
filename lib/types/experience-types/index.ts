import { JsonValue } from '@prisma/client/runtime/library';
import * as z from 'zod';

export type ExperienceType = {
    id: string,
    positionName: string,
    companyName: string,
    companyLocation: string,
    startDate: Date,
    endDate: Date
    learned: JsonValue[],
};
const minDate: Date = new Date("2000-01-01")

export const createAndEditExperienceSchema = z.object({
    positionName: z.string().min(1, {
        message: "Position Name is required."
    }),
    companyName: z.string().min(1, {
        message: "Company Name is required."
    }),
    companyLocation: z.string().min(1, {
        message: "Company Name is required."
    }),
    startDate: z.date().min(minDate, {
        message: "Start date is required."
    }),
    endDate: z.date().min(minDate, {
        message: "Start date is required."
    }),
    learned: z.array(z.object({
        id: z.string(),
        text: z.string(),
    })).min(1, {
        message: "What I did is required."
    }),
});
export type CreateAndEditExperienceType = z.infer<typeof createAndEditExperienceSchema>;
