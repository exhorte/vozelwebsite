# Vozel Website — Content Map

## Homepage (`/`)

| Section | Surface | Key Message |
|---------|---------|------------|
| Hero | Dark | "Thought, in Motion." — Transformez votre voix en texte |
| Product Preview | Dark (elevated) | Identité de marque (logo + wordmark) — **pas** un screenshot, aucune capture réelle de l'app n'existe encore (voir statut ci-dessous) |
| Value Proposition | Paper (light) | 3 étapes : Parlez → Vozel transcrit → Résultat |
| Features | Dark | 8 fonctionnalités en grille éditoriale |
| Workflow | Dark (elevated) | 4 étapes numérotées avec descriptions |
| Privacy & Trust | Paper (light) | 4 affirmations vérifiées sur la confidentialité |
| Compatibility | Dark | 6 specs système en cartes |
| Download CTA | Dark (elevated) | Carte de download (ou "Bientôt disponible") |
| FAQ Preview | Paper (light) | 4 premières questions, lien vers FAQ complète |

## Download (`/download`)

- Download card with state handling
- Release metadata table
- SHA-256 checksum with copy button
- Installation guide (5 steps)
- SmartScreen warning
- Update procedure
- Uninstall procedure

## FAQ (`/faq`)

10 questions with accordion-style answers:
1. Fonctionne sans Internet ?
2. Langues supportées ?
3. Où sont stockées les données ?
4. Compatible toutes les applications ?
5. Comment changer la langue ?
6. Comment installer une nouvelle version ?
7. Utilise un service Cloud ?
8. Désinstallation facile ?
9. Comment signaler un problème ?
10. Est-ce gratuit ?

## Privacy (`/privacy`)

7 sections:
- Introduction (site vs application)
- Données traitées par le site web
- Données traitées par l'application Vozel
- Données non collectées
- Liens externes
- Contact
- Modifications

## Legal (`/legal`)

État actuel : informations légales incomplètes.
Message poli indiquant la publication prochaine.
Structure prête à recevoir :
- Éditeur
- Direction de la publication
- Hébergement
- Propriété intellectuelle
- Limitation de responsabilité

## Release Notes (`/release-notes`)

Structure prête mais vide.
Aucune version publiée pour le moment.
Message : "Les notes de version apparaîtront ici dès la première publication."

## 404 (`/_not-found`)

- Grand "404" décoratif en watermark
- Message : "Cette page n'existe pas."
- Boutons : Retour accueil, FAQ

## Content Verification Status

Corrected 2026-09-04 against product facts supplied for that pass (see
git history / session notes for the source). This is not a line-by-line
product audit — it reflects the specific corrections made in that pass.

| Content | Status |
|---------|--------|
| Features list | ✅ Whisper mention removed (named Parakeet-TDT), "Profils de réécriture" replaced with the real optional local LLM cleanup, "Protection des champs sensibles" removed (unconfirmed claim). "Français et anglais" still ⚠️ unverified. |
| FAQ answers | ✅ Whisper mention corrected (Q1). Rest unchanged from prior pass — not re-audited line by line. |
| Privacy claims | ✅ Whisper mention corrected; removed an unconfirmed "exporter l'historique" claim (only view/delete are confirmed). |
| Compatibility specs | ✅ False "Inclut le modèle Whisper" note removed; RAM/disk values explicitly marked as estimates, not asserted as fact. |
| Workflow / value-prop steps | ✅ Corrected: dictation trigger is holding Ctrl+Win (fixed, not a configurable shortcut) or the floating-widget button — not a generic "raccourci clavier global". Removed an unconfirmed "temps réel" transcription claim. |
| Release info | ❌ Not yet available (`isAvailable: false`, correct as-is) |
| Legal info | ❌ Not yet available (all fields intentionally empty) |
| Brand visual (was "Screenshots") | ✅ Fixed: `example/1.png`/`2.png` are brand lockup compositions (icon + "Vozel." wordmark), confirmed by opening the files — not app screenshots. `product-preview.tsx` now frames them honestly and no longer claims to show "the interface". **A real screenshot of the app is still missing** — this is the most visible content gap on the site. |
