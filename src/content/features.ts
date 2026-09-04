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
    title: "Transcription locale",
    description:
      "Vozel transcrit votre voix directement sur votre machine grâce à Parakeet-TDT, son moteur de reconnaissance vocale local. Aucune connexion Internet n'est requise pour la dictée.",
    icon: "shield",
    needsVerification: false,
  },
  {
    title: "Français et anglais",
    description:
      "Changez de langue de transcription selon vos besoins. Vozel prend en charge le français et l'anglais.",
    icon: "globe",
    needsVerification: true,
  },
  {
    title: "Nettoyage IA local",
    description:
      "Activez le nettoyage optionnel par modèle de langue local pour corriger ponctuation et grammaire — désactivable à tout moment, 100 % hors ligne.",
    icon: "edit",
    needsVerification: false,
  },
  {
    title: "Dictionnaire personnalisé",
    description:
      "Ajoutez vos propres corrections (noms propres, jargon) : le texte reconnu est remplacé par la forme voulue après la transcription, avant l'insertion.",
    icon: "book",
    needsVerification: false,
  },
  {
    title: "Insertion dans la zone active",
    description:
      "Le texte transcrit s'insère directement dans le champ de saisie où se trouve votre curseur, sans changer d'application.",
    icon: "cursor",
    needsVerification: false,
  },
  {
    title: "Fonctionnement hors ligne",
    description:
      "Le moteur de transcription fonctionne entièrement hors ligne. Vos données vocales ne quittent jamais votre appareil, sauf activation manuelle d'une option Cloud.",
    icon: "wifi-off",
    needsVerification: false,
  },
  {
    title: "Historique local",
    description:
      "Consultez l'historique de vos sessions de dictée, stocké localement et sous votre contrôle.",
    icon: "clock",
    needsVerification: false,
  },
  {
    title: "Déclenchement instantané",
    description:
      "Maintenez Ctrl+Win, où que vous soyez, pour dicter — relâchez pour insérer. Un geste unique et fixe, ou le bouton du widget flottant : pas de raccourci à configurer.",
    icon: "keyboard",
    needsVerification: false,
  },
];
