import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

interface VideoStepProps {
  onNext: () => void;
}

export const VideoStep = ({ onNext }: VideoStepProps) => {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <PlayCircle className="h-5 w-5 text-primary" />
          Orientačné video
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Pozrite si nasledujúce video o programe EAP. Po jeho zhliadnutí pokračujte na prezentáciu.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="overflow-hidden rounded-lg border border-border bg-foreground/5">
          <video
            controls
            className="aspect-video w-full"
            src={`${import.meta.env.BASE_URL}EAP-Orientation-w-SK.mp4`}
          >
            Váš prehliadač nepodporuje prehrávanie videa.
          </video>
        </div>
        <div className="flex justify-center sm:justify-end">
          <Button onClick={onNext} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Pokračovať na prezentáciu →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
