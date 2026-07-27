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
    question: "Fluent fonctionne-t-il sans Internet ?",
    answer:
      "Oui. La transcription utilise Whisper en local sur votre machine. Aucune connexion Internet n'est nécessaire pour la dictée. Certaines fonctionnalités Cloud optionnelles (si configurées) peuvent nécessiter une connexion.",
  },
  {
    question: "Quelles langues sont prises en charge ?",
    answer:
      "Fluent prend en charge le français et l'anglais. Vous pouvez changer la langue de transcription depuis l'interface de l'application.",
  },
  {
    question: "Où sont stockées mes données ?",
    answer:
      "Toutes vos données de dictée et votre historique sont stockés localement sur votre machine Windows. Rien n'est envoyé vers un serveur externe sans votre consentement explicite.",
  },
  {
    question: "Fluent fonctionne-t-il dans toutes les applications ?",
    answer:
      "Fluent est conçu pour fonctionner dans la plupart des applications Windows acceptant la saisie de texte. Certaines applications avec des contrôles de saisie non standards peuvent avoir des limitations.",
  },
  {
    question: "Comment changer la langue de transcription ?",
    answer:
      "Vous pouvez changer la langue depuis les paramètres de Fluent. L'application prend en charge le basculement entre le français et l'anglais.",
  },
  {
    question: "Comment installer une nouvelle version ?",
    answer:
      "Téléchargez la dernière version depuis le site officiel et exécutez l'installateur. Fluent peut également proposer une mise à jour automatique selon votre configuration.",
  },
  {
    question: "Fluent utilise-t-il un service Cloud ?",
    answer:
      "Par défaut, Fluent fonctionne entièrement en local. Des fonctions Cloud optionnelles (comme l'utilisation de modèles plus avancés) peuvent être activées manuellement dans les paramètres.",
  },
  {
    question: "Puis-je désinstaller Fluent facilement ?",
    answer:
      "Oui. Fluent se désinstalle comme n'importe quelle application Windows, via Paramètres > Applications > Fluent > Désinstaller.",
  },
  {
    question: "Comment signaler un problème ?",
    answer:
      "Vous pouvez signaler un problème via la page de support du projet. Les informations de contact et les liens vers le dépôt du projet seront disponibles dans les notes de version.",
  },
  {
    question: "Fluent est-il gratuit ?",
    answer:
      "Les informations concernant le modèle de distribution de Fluent seront communiquées lors de la publication de la première version stable.",
  },
];
