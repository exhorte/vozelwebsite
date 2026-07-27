/**
 * Legal information configuration.
 *
 * Fields awaiting official information are explicitly
 * empty strings — they will not render as "TODO" in the UI
 * but are clearly marked in this file for completion.
 *
 * Update these values with the actual legal entity details
 * before publishing the site.
 */

export interface LegalInfo {
  /** Nom de l'éditeur / entité légale */
  publisherName: string;
  /** Forme juridique (SAS, SARL, EI, etc.) */
  legalForm: string;
  /** Adresse postale complète */
  address: string;
  /** Adresse email de contact */
  contactEmail: string;
  /** Directeur de la publication */
  publicationDirector: string;
  /** Nom de l'hébergeur */
  hostingProvider: string;
  /** Adresse de l'hébergeur */
  hostingAddress: string;
  /** Site web de l'hébergeur */
  hostingWebsite: string;
  /** Date de dernière mise à jour des mentions légales */
  lastUpdated: string;
}

export const legalInfo: LegalInfo = {
  publisherName: "",
  legalForm: "",
  address: "",
  contactEmail: "",
  publicationDirector: "",
  hostingProvider: "",
  hostingAddress: "",
  hostingWebsite: "",
  lastUpdated: "",
};

/**
 * Whether the legal information is complete enough
 * to display a full legal notice page.
 */
export function isLegalInfoComplete(): boolean {
  return (
    legalInfo.publisherName !== "" &&
    legalInfo.contactEmail !== "" &&
    legalInfo.hostingProvider !== ""
  );
}
