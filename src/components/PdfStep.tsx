import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const PdfStep = ({ onNext, onBack }: PdfStepProps) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

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
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center overflow-hidden rounded-lg border border-border bg-muted/30 p-4">
          <Document
            file={`${import.meta.env.BASE_URL}EAP-Orientation-w-SK.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex h-[500px] items-center justify-center text-muted-foreground">
                Načítavanie prezentácie...
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={Math.min(800, window.innerWidth - 80)}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>

          {numPages > 0 && (
            <div className="mt-4 flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
                className="h-10 w-10 shrink-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {pageNumber} / {numPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                disabled={pageNumber >= numPages}
                className="h-10 w-10 shrink-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" onClick={onBack} className="w-full sm:w-auto">
              ← Späť
            </Button>
            <a
              href={`${import.meta.env.BASE_URL}EAP-Orientation-w-SK.pdf`}
              download
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Stiahnuť PDF
            </a>
          </div>
          <Button onClick={onNext} className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
            Pokračovať na test →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
