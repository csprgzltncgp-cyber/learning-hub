import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { StepIndicator } from "@/components/StepIndicator";
import { VideoStep } from "@/components/VideoStep";
import { PdfStep } from "@/components/PdfStep";
import { QuizStep } from "@/components/QuizStep";
import { Download } from "lucide-react";
import { ResultStep } from "@/components/ResultStep";
import { scormInit, scormSetScore, scormSetStatus, scormFinish } from "@/lib/scorm";
import { quizQuestions } from "@/data/quizData";
import { PASS_THRESHOLD } from "@/data/quizData";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<"video" | "pdf" | "quiz" | "result">("video");
  const [score, setScore] = useState(0);

  useEffect(() => {
    scormInit();
    return () => { scormFinish(); };
  }, []);

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    const passed = finalScore >= PASS_THRESHOLD;
    scormSetScore(finalScore, quizQuestions.length);
    scormSetStatus(passed);
    setCurrentStep("result");
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentStep("video");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div />
          <img src={logo} alt="EAP Logo" className="h-36" />
          <a
            href={`${import.meta.env.BASE_URL}EAP-elearning-SCORM.zip`}
            download
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" />
            SCORM
          </a>
        </div>
      </header>

      {/* Step indicator */}
      <StepIndicator currentStep={currentStep} />

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-8">
        {currentStep === "video" && (
          <VideoStep onNext={() => setCurrentStep("pdf")} />
        )}
        {currentStep === "pdf" && (
          <PdfStep
            onNext={() => setCurrentStep("quiz")}
            onBack={() => setCurrentStep("video")}
          />
        )}
        {currentStep === "quiz" && (
          <QuizStep
            onComplete={handleQuizComplete}
            onBack={() => setCurrentStep("pdf")}
          />
        )}
        {currentStep === "result" && (
          <ResultStep score={score} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default Index;
