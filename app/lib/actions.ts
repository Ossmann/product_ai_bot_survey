'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
``

enum MuseumCategory {
    NATURAL_HISTORY = "Natural History",
    SCIENCE = "Science",
    ART = "Art",
}

const FormSchema = z.object({
    id: z.string(),
    museumCategory: z.string(),
    medium: z.string(),
    targetAudience: z.string(),
    platform: z.array(z.string()),
    customerJourney: z.string(),
    frequencyExhibitions: z.string(),
    museumEmail: z.string(),
    date: z.string(),
});

const CreateSearchProfile = FormSchema.omit({ id: true, date: true });

export async function createSearchProfile(formData: FormData) {
    const { museumCategory, medium, targetAudience, platform, customerJourney, frequencyExhibitions, museumEmail } = CreateSearchProfile.parse({
      museumCategory: formData.get('museumCategory'),
      medium: formData.get('medium'),
      targetAudience: formData.get('targetAudience'),
      platform: formData.getAll('platform'),
      customerJourney: formData.get('customerJourney'),
      museumEmail: formData.get('museumEmail'),
      frequencyExhibitions: formData.get('frequencyExhibitions'),
    });
const date = new Date().toISOString().split('T')[0];

console.log('Parsed Data:', { museumCategory, medium, targetAudience, platform, customerJourney, frequencyExhibitions, museumEmail, date }); // Log parsed data

const platformArray = `{${platform.join(',')}}`; // Format as PostgreSQL array

await sql`
        INSERT INTO MuseumSearchProfiles (museumCategory, medium, targetAudience, platform, customerJourney, frequencyExhibitions, museumEmail, date)
        VALUES (${museumCategory}, ${medium}, ${targetAudience}, ${platformArray}, ${customerJourney}, ${frequencyExhibitions}, ${museumEmail}, ${date})
    `;

    revalidatePath('/');
    redirect(`/results?platform=${platform.join('&platform=')}`);

}

