/**
 * Vozel features content.
 *
 * Each feature must be verified against the actual product.
 * Features marked with needsVerification: true should be
 * confirmed before publication.
 */

export interface Feature {
  title: string;
  description: string;
  icon: string;
  needsVerification: boolean;
}

export const features: Feature[] = [
  {
    title: "Local transcription",
    description:
      "Vozel transcribes your voice directly on your machine using Parakeet-TDT, its local speech-recognition engine. No Internet connection is required for dictation.",
    icon: "shield",
    needsVerification: false,
  },
  {
    title: "French and English",
    description:
      "Switch transcription language as needed. Vozel supports both French and English.",
    icon: "globe",
    needsVerification: true,
  },
  {
    title: "Local AI cleanup",
    description:
      "Turn on optional local-language-model cleanup to fix punctuation and grammar — can be disabled anytime, 100% offline.",
    icon: "edit",
    needsVerification: false,
  },
  {
    title: "Custom dictionary",
    description:
      "Add your own corrections (proper names, jargon): the recognized text is replaced by the intended form after transcription, before insertion.",
    icon: "book",
    needsVerification: false,
  },
  {
    title: "Insertion into the active field",
    description:
      "The transcribed text is inserted directly into the input field where your cursor is, without switching apps.",
    icon: "cursor",
    needsVerification: false,
  },
  {
    title: "Works offline",
    description:
      "The transcription engine runs entirely offline. Your voice data never leaves your device, unless you manually enable a Cloud option.",
    icon: "wifi-off",
    needsVerification: false,
  },
  {
    title: "Local history",
    description:
      "Browse the history of your dictation sessions, stored locally and under your control.",
    icon: "clock",
    needsVerification: false,
  },
  {
    title: "Instant trigger",
    description:
      "Hold Ctrl+Win, wherever you are, to dictate — release to insert. A single, fixed gesture, or the floating widget button: no shortcut to configure.",
    icon: "keyboard",
    needsVerification: false,
  },
];
