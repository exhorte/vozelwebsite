/**
 * Fluent features content.
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
    title: "Transcription locale",
    description:
      "Fluent utilise Whisper pour transcrire votre voix directement sur votre machine. Aucune connexion Internet n'est requise pour la transcription.",
    icon: "shield",
    needsVerification: true,
  },
  {
    title: "Français et anglais",
    description:
      "Changez de langue de transcription selon vos besoins. Fluent prend en charge le français et l'anglais.",
    icon: "globe",
    needsVerification: true,
  },
  {
    title: "Profils de réécriture",
    description:
      "Définissez des profils personnalisés pour adapter le style et le format du texte transcrit à vos usages.",
    icon: "edit",
    needsVerification: true,
  },
  {
    title: "Dictionnaire personnalisé",
    description:
      "Ajoutez vos termes techniques, noms propres et abréviations pour améliorer la précision de la transcription.",
    icon: "book",
    needsVerification: true,
  },
  {
    title: "Insertion dans la zone active",
    description:
      "Le texte transcrit s'insère directement dans le champ de saisie où se trouve votre curseur, sans changer d'application.",
    icon: "cursor",
    needsVerification: true,
  },
  {
    title: "Protection des champs sensibles",
    description:
      "Fluent détecte automatiquement les champs de mot de passe et les zones protégées pour éviter toute transcription accidentelle.",
    icon: "lock",
    needsVerification: true,
  },
  {
    title: "Fonctionnement hors ligne",
    description:
      "Le moteur de transcription fonctionne entièrement hors ligne. Vos données vocales ne quittent jamais votre appareil.",
    icon: "wifi-off",
    needsVerification: true,
  },
  {
    title: "Historique local",
    description:
      "Consultez l'historique de vos sessions de dictée, stocké localement et sous votre contrôle.",
    icon: "clock",
    needsVerification: true,
  },
  {
    title: "Raccourci global",
    description:
      "Lancez la dictée depuis n'importe quelle application avec un raccourci clavier configurable.",
    icon: "keyboard",
    needsVerification: true,
  },
];
