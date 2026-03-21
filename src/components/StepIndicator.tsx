import { PlayCircle, FileText, HelpCircle, Trophy } from "lucide-react";

interface StepIndicatorProps {
  currentStep: "video" | "pdf" | "quiz" | "result";
}

const steps = [
  { key: "video", label: "Video", icon: PlayCircle },
  { key: "pdf", label: "Prezentácia", icon: FileText },
  { key: "quiz", label: "Test", icon: HelpCircle },
  { key: "result", label: "Výsledok", icon: Trophy },
] as const;

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-6 py-3 sm:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentIndex;
          const isDone = index < currentIndex;

          return (
            <div key={step.key} className="flex items-center gap-2 sm:gap-4">
              {index > 0 && (
                <div
                  className={`hidden h-px w-8 sm:block ${
                    isDone ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isDone
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden font-medium sm:inline">{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
