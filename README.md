# Portfolio — Rakotobe Mandresy

Portfolio personnel construit avec React, Vite et Tailwind CSS.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrez l'adresse affichée dans le terminal (en général http://localhost:5173).

## Où modifier le contenu

Un seul fichier à éditer pour tout changer : **`src/data/contenu.js`**
- `PROFIL` — nom, accroche, bio, email, téléphone, lien GitHub
- `COMPETENCES` — catégories et compétences affichées
- `PROJETS` — vos projets, avec lien GitHub et description
- `EXPERIENCE` — expériences professionnelles
- `FORMATIONS` — diplômes

Pour changer les couleurs ou les polices, éditez `tailwind.config.js`.

## Déployer sur Vercel

### Option A — Depuis GitHub (recommandé)

1. Créez un repo GitHub et poussez ce projet dedans :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USER/portfolio.git
   git push -u origin main
   ```
2. Allez sur [vercel.com](https://vercel.com), connectez-vous avec votre compte GitHub.
3. Cliquez **"Add New..." → "Project"**, sélectionnez votre repo `portfolio`.
4. Vercel détecte automatiquement Vite grâce au fichier `vercel.json` fourni — laissez les réglages par défaut.
5. Cliquez **"Deploy"**. Après 1-2 minutes, votre site est en ligne avec une URL du type `portfolio-xxxx.vercel.app`.
6. Chaque nouveau `git push` sur `main` redéploie automatiquement le site.

### Option B — Avec la CLI Vercel (sans passer par GitHub)

```bash
npm install -g vercel
vercel login
vercel
```

Répondez aux questions (nom du projet, dossier `./`), puis :

```bash
vercel --prod
```

pour publier en production.

## Nom de domaine personnalisé (optionnel)

Une fois déployé, dans le dashboard Vercel de votre projet : **Settings → Domains**, vous pouvez ajouter un domaine personnalisé si vous en achetez un (ex: `rakotobe.dev`).
