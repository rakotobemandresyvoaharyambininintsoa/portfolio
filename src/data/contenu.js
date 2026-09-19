export const PROFIL = {
  nom: "Rakotobe Mandresy Voahary Ambinintsoa",
  titre: "Développeur Full-Stack",
  accroche:
    "Je conçois des applications complètes, de la base de données à l'interface — avec une attention particulière portée à la sécurité et à la fiabilité.",
  bio:
    "Titulaire d'un Master II en Informatique, je construis des produits web de bout en bout : structuration des données, API sécurisées, interfaces soignées, et pipelines CI/CD. J'aime autant écrire une interface React propre que traquer une faille de sécurité dans une API.",
  email: "rakotobemandresyvoaharyambinin@gmail.com",
  telephone: "+261 38 35 861 35",
  github: "https://github.com/rakotobemandresyvoaharyambininintsoa",
};

export const COMPETENCES = [
  { categorie: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { categorie: "Backend", items: ["Node.js", "Java / Spring Boot", "Python / FastAPI", "API REST"] },
  { categorie: "Données", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma ORM"] },
  { categorie: "DevOps & Qualité", items: ["Docker", "GitHub Actions (CI/CD)", "Vitest / RTL", "SonarCloud"] },
  { categorie: "IA appliquée", items: ["Intégration LLM", "Machine Learning", "IA explicable (SHAP)"] },
  { categorie: "Sécurité", items: ["OWASP Top 10", "JWT / Auth", "Audit de vulnérabilités"] },
];

export const PROJETS = [
  {
    nom: "CRM Analytics SaaS",
    annee: "2026",
    description:
      "Plateforme CRM complète avec IA générative intégrée pour l'aide à la décision (relances automatiques, synthèses). Suite de tests automatisés et couverture de code intégrée à SonarCloud via CI/CD.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Vitest"],
    lien: "https://github.com/rakotobemandresyvoaharyambininintsoa/crm-analytics",
    accent: "teal",
  },
  {
    nom: "Système de détection de fraude bancaire",
    annee: "2026",
    description:
      "API de scoring de risque en temps réel basée sur le Machine Learning, avec explicabilité des décisions via SHAP.",
    stack: ["Python", "FastAPI", "Scikit-learn", "SHAP", "Docker"],
    lien: "https://github.com/rakotobemandresyvoaharyambininintsoa/fraud-ai-system",
    accent: "amber",
  },
  {
    nom: "API de gestion de tâches sécurisée",
    annee: "2026",
    description:
      "API REST avec authentification et gestion fine des droits d'accès. Identification et correction d'une vulnérabilité critique IDOR (OWASP Top 10).",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"],
    lien: "https://github.com/rakotobemandresyvoaharyambininintsoa/task-management-api",
    accent: "teal",
  },
  {
    nom: "Pipeline de traitement de données",
    annee: "2026",
    description:
      "Pipeline de collecte, nettoyage et transformation de données, avec architecture modulaire et contrôle qualité à chaque étape.",
    stack: ["Python", "Pandas", "SQLite"],
    lien: "https://github.com/rakotobemandresyvoaharyambininintsoa/jvnlab-pipeline",
    accent: "amber",
  },
];

export const EXPERIENCE = [
  {
    role: "Stage de fin de Licence — Développeur",
    structure: "Paositra Malagasy, Antananarivo",
    periode: "2021 — 2022",
    description:
      "Conception d'un logiciel de gestion des imprimés : recueil du besoin, modélisation de la base de données, développement complet.",
  },
];

export const FORMATIONS = [
  { diplome: "Master II Informatique", etablissement: "ISPM", annee: "2024" },
  { diplome: "Licence Informatique", etablissement: "ISPM", annee: "2021 — 2022" },
];
