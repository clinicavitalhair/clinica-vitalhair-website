'use server';

import { sentimentAnalysisSummary, type SentimentAnalysisInput, type SentimentAnalysisOutput } from '@/ai/flows/sentiment-analysis-flow';

export async function analyzeSentiment(input: SentimentAnalysisInput): Promise<SentimentAnalysisOutput> {
  try {
    const result = await sentimentAnalysisSummary(input);
    return result;
  } catch (error) {
    console.error('Error in sentiment analysis action:', error);
    // Consider returning a more structured error or re-throwing a custom error
    throw new Error('Failed to analyze sentiment due to a server error.');
  }
}
