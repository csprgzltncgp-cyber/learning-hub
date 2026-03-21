import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { quizQuestions, PASS_THRESHOLD } from "@/data/quizData";

interface QuizStepProps {
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const QuizStep = ({ onComplete, onBack }: QuizStepProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: parseInt(value) }));
  };

  const handleSubmit = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) score++;
    });
    onComplete(score);
  };

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <HelpCircle className="h-5 w-5 text-primary" />
          Test – Otázka {currentQuestion + 1} z {totalQuestions}
        </CardTitle>
        {/* Progress bar */}
        <div className="flex gap-1 pt-2">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === currentQuestion
                  ? "bg-primary"
                  : answers[i] !== undefined
                  ? "bg-primary/40"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">
          {question.question}
        </h2>

        <RadioGroup
          value={answers[currentQuestion]?.toString()}
          onValueChange={handleAnswer}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-accent ${
                answers[currentQuestion] === index
                  ? "border-primary bg-accent"
                  : "border-border"
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-0.5" />
              <span className="text-sm leading-relaxed">{option}</span>
            </Label>
          ))}
        </RadioGroup>

        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-2">
            {currentQuestion === 0 ? (
              <Button variant="outline" onClick={onBack}>
                ← Späť na prezentáciu
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((p) => p - 1)}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Predchádzajúca
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {currentQuestion < totalQuestions - 1 ? (
              <Button
                onClick={() => setCurrentQuestion((p) => p + 1)}
                className="bg-primary hover:bg-primary/90"
              >
                Nasledujúca
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="bg-secondary hover:bg-secondary/90"
              >
                Odoslať test ({answeredCount}/{totalQuestions})
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
