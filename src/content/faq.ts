/**
 * FAQ content.
 *
 * Each question must be verified against the actual product.
 * Answers must be concise and technically accurate.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Does Vozel work without Internet?",
    answer:
      "Yes. Transcription happens locally on your machine, via the Parakeet-TDT engine. No Internet connection is needed for dictation. Some optional Cloud features (if configured) may require a connection.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Vozel supports French and English. You can change the transcription language from the app's interface.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "All your dictation data and history are stored locally on your Windows machine. Nothing is sent to an external server without your explicit consent.",
  },
  {
    question: "Does Vozel work in every application?",
    answer:
      "Vozel is designed to work in most Windows applications that accept text input. Some applications with non-standard input controls may have limitations.",
  },
  {
    question: "How do I change the transcription language?",
    answer:
      "You can change the language from Vozel's settings. The app supports switching between French and English.",
  },
  {
    question: "How do I install a new version?",
    answer:
      "Download the latest version from the official site and run the installer. Vozel may also offer an automatic update depending on your configuration.",
  },
  {
    question: "Does Vozel use a Cloud service?",
    answer:
      "By default, Vozel runs entirely locally. Optional Cloud features (such as using more advanced models) can be enabled manually in settings.",
  },
  {
    question: "Can I uninstall Vozel easily?",
    answer:
      "Yes. Vozel uninstalls like any Windows application, via Settings > Apps > Vozel > Uninstall.",
  },
  {
    question: "How do I report an issue?",
    answer:
      "You can report an issue via the project's support page. Contact information and links to the project repository will be available in the release notes.",
  },
  {
    question: "Is Vozel free?",
    answer:
      "Details about Vozel's distribution model will be announced when the first stable version is released.",
  },
];
