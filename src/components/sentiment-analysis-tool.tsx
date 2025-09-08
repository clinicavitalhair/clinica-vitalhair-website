
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, MessageSquareText, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { SentimentAnalysisInput, SentimentAnalysisOutput } from '@/ai/flows/sentiment-analysis-flow';
import { analyzeSentiment } from '@/app/_actions/sentiment'; // Ensure this path is correct

export default function SentimentAnalysisTool() {
  const [testimonials, setTestimonials] = useState('');
  const [analysisResult, setAnalysisResult] = useState<SentimentAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!testimonials.trim()) {
      setError('Por favor, introduce algunos testimonios para analizar.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const input: SentimentAnalysisInput = { testimonials };
      const result = await analyzeSentiment(input);
      setAnalysisResult(result);
    } catch (err) {
      setError('Error al analizar los testimonios. Inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-16 bg-accent/40 shadow-xl rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-primary">Herramienta de Análisis de Sentimiento IA</CardTitle>
        <CardDescription className="text-lg text-foreground/90">
          Pega testimonios (separados por nuevas líneas) para obtener un resumen de sentimiento.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Textarea
          placeholder="Ejemplo:&#10;El servicio fue excelente y el personal muy amable.&#10;No estoy satisfecho con los resultados."
          value={testimonials}
          onChange={(e) => setTestimonials(e.target.value)}
          rows={8}
          className="bg-background focus:ring-secondary"
        />
        <Button onClick={handleSubmit} disabled={isLoading} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg text-lg py-3 rounded-lg transition-all duration-300 ease-in-out">
          {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
          {isLoading ? 'Analizando...' : 'Analizar Sentimiento'}
        </Button>

        {error && <p className="text-destructive text-center">{error}</p>}

        {analysisResult && (
          <div className="space-y-6 pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-primary text-center">Resultados del Análisis:</h3>
            
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                <MessageSquareText className="h-6 w-6 text-secondary/80" />
                <CardTitle className="text-xl text-primary">Sentimiento General</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{analysisResult.overallSentiment}</p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                <ThumbsUp className="h-6 w-6 text-green-500" />
                <CardTitle className="text-xl text-primary">Feedback Positivo Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 whitespace-pre-line">{analysisResult.positiveFeedback}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                <ThumbsDown className="h-6 w-6 text-red-500" />
                <CardTitle className="text-xl text-primary">Feedback Negativo Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 whitespace-pre-line">{analysisResult.negativeFeedback}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
