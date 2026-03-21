import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

interface PdfStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const PdfStep = ({ onNext, onBack }: PdfStepProps) => {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <FileText className="h-5 w-5 text-primary" />
          Prezentácia
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Prečítajte si prezentáciu o programe EAP. Keď budete pripravení, pokračujte na test.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            src="/EAP Orientation w SK.pdf"
            className="h-[600px] w-full"
            title="EAP Prezentácia"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={onBack}>
              ← Späť
            </Button>
            <a
              href="/EAP Orientation w SK.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4" />
              Stiahnuť PDF
            </a>
          </div>
          <Button onClick={onNext} className="bg-primary hover:bg-primary/90">
            Pokračovať na test →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
