'use server';
/**
 * @fileOverview A flow to generate detailed service descriptions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { services, Service } from '@/data/services';

const ServiceDetailsInputSchema = z.string().describe("The name of the service to get details for.");

const ServiceDetailsOutputSchema = z.object({
  slogan: z.string().describe("A catchy slogan for the service page."),
  description: z.string().describe("A detailed, engaging, and professional description of the service, written in paragraphs. It should be at least 3 paragraphs long."),
  benefits: z.array(z.object({
    title: z.string().describe("A concise title for a key benefit."),
    description: z.string().describe("A short description of the benefit."),
  })).describe("A list of 3-4 key benefits of the service."),
});

export type ServiceDetailsOutput = z.infer<typeof ServiceDetailsOutputSchema>;

export async function generateServiceDetails(serviceName: string): Promise<ServiceDetailsOutput> {
  const service = services.find(s => s.title === serviceName);
  if (!service) {
    throw new Error(`Service "${serviceName}" not found.`);
  }

  return serviceDetailsFlow(service);
}

const prompt = ai.definePrompt({
  name: 'serviceDetailsPrompt',
  input: { schema: Service },
  output: { schema: ServiceDetailsOutputSchema },
  prompt: `
    You are an expert marketing content writer for a home health care agency called "Noble Health".
    Your task is to generate compelling content for a web page about a specific service.

    Service Name: {{{title}}}
    Short Description: {{{description}}}
    Key points to include:
    {{#each points}}
    - {{{this}}}
    {{/each}}
    
    Based on the information above, generate the following content:
    1.  **Slogan**: A short, catchy, and reassuring slogan for the top of the page.
    2.  **Description**: A detailed, professional, and empathetic description of the service. It should be at least 3 paragraphs long and elaborate on the provided key points. The tone should be comforting and trustworthy.
    3.  **Benefits**: A list of 3 or 4 key benefits. For each benefit, provide a clear title and a brief explanation.
  `,
});

const serviceDetailsFlow = ai.defineFlow(
  {
    name: 'serviceDetailsFlow',
    inputSchema: Service,
    outputSchema: ServiceDetailsOutputSchema,
  },
  async (service) => {
    const { output } = await prompt(service);
    return output!;
  }
);
