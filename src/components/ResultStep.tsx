import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { PASS_THRESHOLD, quizQuestions } from "@/data/quizData";

interface ResultStepProps {
  score: number;
  onRestart: () => void;
}

export const ResultStep = ({ score, onRestart }: ResultStepProps) => {
  const passed = score >= PASS_THRESHOLD;
  const total = quizQuestions.length;

  return (
    <Card className="border-border">
      <CardContent className="flex flex-col items-center py-16 text-center">
        {passed ? (
          <>
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Gratulujeme! Úspešne ste absolvovali test.
            </h2>
            <p className="mb-1 text-muted-foreground">
              Váš výsledok: <span className="font-bold text-foreground">{score}/{total}</span> správnych odpovedí
            </p>
            <p className="text-sm text-muted-foreground">
              Minimálny počet na úspešné absolvovanie: {PASS_THRESHOLD}/{total}
            </p>
          </>
        ) : (
          <>
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-10 w-10 text-red-500" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Bohužiaľ, test ste neabsolvovali úspešne.
            </h2>
            <p className="mb-1 text-muted-foreground">
              Váš výsledok: <span className="font-bold text-foreground">{score}/{total}</span> správnych odpovedí
            </p>
            <p className="mb-8 text-sm text-muted-foreground">
              Na úspešné absolvovanie potrebujete minimálne {PASS_THRESHOLD}/{total}. Prosím, pozrite si znovu materiály a skúste to znova.
            </p>
            <Button onClick={onRestart} className="bg-primary hover:bg-primary/90">
              <RotateCcw className="mr-2 h-4 w-4" />
              Začať odznova
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
