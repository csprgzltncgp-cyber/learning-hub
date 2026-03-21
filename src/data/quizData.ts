export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Aký je hlavný účel Programu "Na nás sa možete spoľahnúť" (EAP)?',
    options: [
      "Monitorovanie pracovného výkonu zamestnancov",
      "Poskytovanie dôvernej podpory pri osobných problémoch zamestnancov",
      "Vyšetrovanie disciplinárnych prípadov",
      "Znižovanie počtu dní práceneschopnosti",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Využívanie služby EAP je:",
    options: [
      "Povinné pre všetkých zamestnancov",
      "Podmienené schválením HR oddelenia",
      "Dobrovoľné a dôverné",
      "Realizované za prítomnosti nadriadeného",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "V ktorých oblastiach je možné požiadať o podporu prostredníctvom EAP?",
    options: [
      "Iba v prípadoch konfliktov na pracovisku",
      "Iba pri problémoch s duševným zdravím",
      "Pri osobných, rodinných, finančných, právnych alebo zdravotných otázkach",
      "Iba v krízových situáciách",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Kto má prístup k obsahu EAP poradenstva?",
    options: [
      "Priamy nadriadený",
      "HR oddelenie",
      "Zamestnávateľ",
      "Nikto – služba je plne dôverná",
    ],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "Čo sa stane, ak sa zamestnanec ocitne v krízovej situácii?",
    options: [
      "Pomoc je dostupná iba počas pracovných hodín",
      "Krízová linka EAP poskytuje okamžitú podporu",
      "O intervencii rozhoduje zamestnávateľ",
      "Program sa krízovými situáciami nezaoberá",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Odborníci EAP sú:",
    options: [
      "Zamestnanci HR oddelenia",
      "Manažéri",
      "Kvalifikovaní, nezávislí poradcovia / psychológovia",
      "Právni zástupcovia spoločnosti",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Kedy je vhodné kontaktovať EAP?",
    options: [
      "Až keď sa problém stane vážnym",
      "Čo najskôr, už v počiatočnej fáze ťažkostí",
      "Iba na odporúčanie nadriadeného",
      "Iba keď je do situácie zapojených viac kolegov",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Kedy môžete kontaktovať službu EAP?",
    options: [
      "Iba počas pracovných hodín v pracovných dňoch",
      "Iba po schválení nadriadeným",
      "24 hodín denne, 7 dní v týždni prostredníctvom dostupných kontaktných kanálov",
      "Iba po vopred dohodnutom termíne",
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Ako sa môžete prihlásiť?",
    options: [
      "Iba e-mailom",
      "Na HR oddelení",
      "Telefonicky, prostredníctvom webovej stránky alebo aplikácie",
      "Iba osobne za prítomnosti HR",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Ktoré aplikácie sú dostupné v programe EAP?",
    options: [
      "Dostupná je iba jedna: aplikácia MY EAP",
      "MY EAP, EAP Chat, EAP Crisis",
      "Nie sú dostupné žiadne aplikácie",
      "EAP je dostupný iba telefonicky",
    ],
    correctAnswer: 1,
  },
];

export const PASS_THRESHOLD = 6;
