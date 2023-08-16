import { CreateChatCompletionRequest } from "openai";

export const GPT_MODEL = "gpt-3.5-turbo";

export function createFileNameWithDateAndTime() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
}

export function createChatCompletionRequest(message: string) {
  const completionRequest: CreateChatCompletionRequest = {
    model: GPT_MODEL,
    temperature: 0,
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  };
  return completionRequest;
}

export function createLevelPromptDe(game: {
  name: string;
  tags: string[];
  markdown: string;
}) {
  const prompt = [
    "Du kategorisierst Improvisationstheater Spiele fuer Anfaenger, Fortgeschrittene, oder Experten.",
    "Du willst folgendes Spiel, markiert durch ``` kategorisieren. Beachte dabei folgende Regeln:",
    "- Kennenlernspiele und einfache Uebungen ohne komplexe Ablaeufe sind fuer Anfaenger geeignet.",
    "- Fortgeschrittene koennen komplexere Uebungen und Spiele als Anfaenger spielen. Zu einfache Uebungen koennten auch langweilig sein.",
    "- Experten spielen noch komplexere Uebungen und Spiele als Fortgeschrittene. Zu einfache Uebungen koennten auch langweilig sein.",
    "- Schwierige Uebungen und Spiele sind nur fuer Experten geeignet.",
    "- Langformate und Langformen (Spiele die laenger als 30 Minuten dauern), sind nur fuer Experten geeignet.",
    "- Empfehle keine Langformate fuer Fortgeschrittene, da diese zu komplex und lang fuer diese Level sind.",
    "- Experten sind sehr erfahrene Improspieler*innen, die zum Beispiel Langformen spielen koennen.",
    "",
    "Gehe nun wie folgt vor:",
    "1. Diskutiere zuerst in 7 Saetzen unter beachtung der obigen Regeln, welches Level (Anfaenger, Fortgeschrittene, Experten) fuer dieses Spiel mindestens noetig ist. Ein Spiel kann fuer mehrere Level geeignet sein. Wenn ein Spiel fuer ein niedriges Level geeignet ist, heisst das jedoch nicht, dass es auch fuer alle hoeheren Level geeignet ist. Zum Beispiel, kann ein Spiel fuer Anfaenger geeignet sein, aber nicht fuer Fortgeschrittene, da es fuer ein hoeheres Level zu langweilig ist.",
    "2. Schaetze die Zeit des Spiels ab. Wenn es ueber 30 Minuten sind, ist es nur fuer EXPERTEN geeignet und du kannst direkt 'Level: EXPERTEN' ausgeben. Wenn du dir unsicher bist, fahre mit dem 3. fort.",
    '3. Entscheide dich anhand 1. und 2., fuer welche Erfahrungslevel das Spiel sinnvoll ist: "ANFAENGER", "FORTGESCHRITTENE", oder "EXPERTEN" (es koennen mehrere Level zutreffen).',
    '4. Gib deine Entscheidung in diesem Format aus: "Level: ANFAENGER, FORTGESCHRITTENE, EXPERTEN".',
    "",
    "```",
    `Name: ${game.name}`,
    `Tags: ${game.tags.join(", ")}`,
    "",
    game.markdown,
    "```",
  ].join("\n");
  return prompt;
}
