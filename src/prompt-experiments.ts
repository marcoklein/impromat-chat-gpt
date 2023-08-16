// const completionRequest: CreateChatCompletionRequest = {
//   model: "gpt-3.5-turbo",
//   temperature: 0,
//   max_tokens: 1000,
//   messages: [
//     {
//       role: "user",
//       content: [
//         "Du planst einen Improvisationstheater Workshop fuer Anfaenger*innen.",
//         "Du willst nun folgendes Spiel, markiert durch ``` mit aufnehmen.",
//         "Sammle jeweils 5 Argumente mit ihrer Relevanz (0-1, wobei 0=unrelevant, 1=relevant) in Stichpunkten pro und kontra, ob das Spiel anfaengerfreundlich ist.",
//         'Entscheide dich anhand dessen, ob es anfaengerfreundlich ist ("JA" oder "NEIN") und gebe Indikator wie sicher die Entscheidung ist (0=unsicher, 1=sicher).',
//         "\n",
//         `Name: ${FolgeDemFolgenden.name}`,
//         `Tags: ${FolgeDemFolgenden.tags.join(", ")}`,
//         "```",
//         FolgeDemFolgenden.markdown,
//         "```",
//       ].join(""),
//     },
//   ],
// };

// const completionRequest: CreateChatCompletionRequest = {
//   model: "gpt-3.5-turbo",
//   temperature: 0.2,
//   max_tokens: 1000,
//   messages: [
//     {
//       role: "user",
//       content: [
//         "Du planst einen Improvisationstheater Workshop.",
//         "Du willst nun folgendes Spiel, markiert durch ``` mit aufnehmen und musst dich entscheiden, ob es fuer Anfaenger, Fortgeschrittene, oder Experten geegeignet ist.",
//         "Beachte dabei folgende Definitionen:\n",
//         "1. Anfaenger haben keine bis wenig Erfahrung mit Improvisationstheater",
//         "2. Fortgeschrittene haben schon einige Workshops besucht",
//         "3. Experten sind erfahrene Improspieler*innen.\n",
//         "4. Alle Langformen sind fuer Experten geeignet.\n\n",
//         "Sammle zuerst jeweils 5 Argumente in Stichpunkten, ob das Spiel fuer Anfaenger, Fortgeschrittene, oder Experten geeignet ist.",
//         'Entscheide dich danach anhand dessen, ob es fuer Anfaenger, Fortgeschrittene, oder Experten geeignet ist ("ANFAENGER", "FORTGESCHRITTENE", oder "EXPERTEN") und gebe einen numerischen Indikator wie sicher die Entscheidung ist (0=unsicher, 1=sicher).',
//         "\n",
//         `Name: ${Johannes.name}`,
//         `Tags: ${Johannes.tags.join(", ")}`,
//         "```",
//         Johannes.markdown,
//         "```",
//       ].join(" "),
//     },
//   ],
// };

// const completionRequest: CreateChatCompletionRequest = {
//   model: "gpt-3.5-turbo",
//   temperature: 0.2,
//   max_tokens: 1000,
//   messages: [
//     {
//       role: "user",
//       content: [
//         "Du planst einen Improvisationstheater Workshop.",
//         "Du willst nun folgendes Spiel, markiert durch ``` mit aufnehmen und musst dich entscheiden, ob es fuer Anfaenger, Fortgeschrittene, oder Experten geeignet ist.",
//         "Beachte dabei folgende Definitionen:\n",
//         "- Kennenlernspiele und einfach Uebungen sind fuer Anfaenger geeignet.",
//         "- Ein einfacher Ablauf ist fuer Anfaenger geeignet.",
//         "- Fortgeschrittene haben schon einige Workshops besucht.",
//         "- Experten sind erfahrene Improspieler*innen.\n",
//         "- Langformen sind fuer Experten geeignet.\n\n",
//         ""
//         "Sammle zuerst jeweils 3 Argumente pro contra in Stichpunkten, ob das Spiel fuer Anfaenger, Fortgeschrittene, oder Experten geeignet ist.",
//         "Gib basierend darauf und basierend auf vorhandenem Wissen danach einen Indikator zwischen 0 und 1 zur mindest Vorerfahrung ab. (0=Anfaenger, 0.25=Fortgeschrittene Anfaenger, 0.5=Fortgeschrittene, 0.75=Fortgeschrittene Experten, 1=Experten. Kommazahlen sind erlaubt.)",
//         "\n",
//         `Name: ${KoerperVerstecken.name}`,
//         `Tags: ${KoerperVerstecken.tags.join(", ")}`,
//         "```",
//         KoerperVerstecken.markdown,
//         "```",
//       ].join(" "),
//     },
//   ],
// };
