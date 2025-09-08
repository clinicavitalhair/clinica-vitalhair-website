// Use server directive is required in edge functions.
'use server';

/**
 * @fileOverview A sentiment analysis AI agent for summarizing testimonials.
 *
 * - sentimentAnalysisSummary - A function that handles the sentiment analysis process.
 * - SentimentAnalysisInput - The input type for the sentimentAnalysisSummary function.
 * - SentimentAnalysisOutput - The return type for the sentimentAnalysisSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SentimentAnalysisInputSchema = z.object({
  testimonials: z
    .string()
    .describe('A collection of testimonials to analyze, separated by newlines.'),
});
export type SentimentAnalysisInput = z.infer<typeof SentimentAnalysisInputSchema>;

const SentimentAnalysisOutputSchema = z.object({
  overallSentiment: z
    .string()
    .describe('A summary of the overall sentiment expressed in the testimonials.'),
  positiveFeedback: z
    .string()
    .describe('Key positive feedback points extracted from the testimonials.'),
  negativeFeedback: z
    .string()
    .describe('Key negative feedback points extracted from the testimonials.'),
});
export type SentimentAnalysisOutput = z.infer<typeof SentimentAnalysisOutputSchema>;

export async function sentimentAnalysisSummary(input: SentimentAnalysisInput): Promise<SentimentAnalysisOutput> {
  return sentimentAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sentimentAnalysisPrompt',
  input: {schema: SentimentAnalysisInputSchema},
  output: {schema: SentimentAnalysisOutputSchema},
  prompt: `You are an AI assistant specializing in sentiment analysis of customer testimonials.

  Analyze the following testimonials to provide a summary of the overall sentiment,
  highlight key positive feedback points, and identify any negative feedback points.

  Testimonials:
  {{testimonials}}
  
  Respond in the following format:
  Overall Sentiment: [Summary of the overall sentiment]
  Positive Feedback: [Key positive feedback points]
  Negative Feedback: [Key negative feedback points]`,
});

const sentimentAnalysisFlow = ai.defineFlow(
  {
    name: 'sentimentAnalysisFlow',
    inputSchema: SentimentAnalysisInputSchema,
    outputSchema: SentimentAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
