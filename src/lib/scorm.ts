// SCORM 1.2 API Wrapper

interface ScormAPI {
  LMSInitialize: (param: string) => string;
  LMSFinish: (param: string) => string;
  LMSGetValue: (element: string) => string;
  LMSSetValue: (element: string, value: string) => string;
  LMSCommit: (param: string) => string;
  LMSGetLastError: () => string;
  LMSGetErrorString: (errorCode: string) => string;
  LMSGetDiagnostic: (errorCode: string) => string;
}

let api: ScormAPI | null = null;
let initialized = false;

function findAPI(win: Window): ScormAPI | null {
  let attempts = 0;
  while (win && attempts < 10) {
    if ((win as any).API) return (win as any).API;
    if (win === win.parent) break;
    win = win.parent;
    attempts++;
  }
  return null;
}

export function scormInit(): boolean {
  if (initialized) return true;
  try {
    api = findAPI(window);
    if (!api && window.opener) {
      api = findAPI(window.opener);
    }
    if (api) {
      api.LMSInitialize("");
      initialized = true;
      return true;
    }
  } catch (e) {
    console.warn("SCORM API not found – running standalone", e);
  }
  return false;
}

export function scormSetScore(score: number, max: number, min = 0): void {
  if (!api) return;
  try {
    api.LMSSetValue("cmi.core.score.raw", String(Math.round((score / max) * 100)));
    api.LMSSetValue("cmi.core.score.max", "100");
    api.LMSSetValue("cmi.core.score.min", "0");
    api.LMSCommit("");
  } catch (e) {
    console.warn("SCORM setScore error", e);
  }
}

export function scormSetStatus(passed: boolean): void {
  if (!api) return;
  try {
    api.LMSSetValue("cmi.core.lesson_status", passed ? "passed" : "failed");
    api.LMSCommit("");
  } catch (e) {
    console.warn("SCORM setStatus error", e);
  }
}

export function scormFinish(): void {
  if (!api) return;
  try {
    api.LMSFinish("");
    initialized = false;
  } catch (e) {
    console.warn("SCORM finish error", e);
  }
}
