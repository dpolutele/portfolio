import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Trophy } from "lucide-react";

const projects = [
  {
    title: "Projet final BTS SIO SISR - Épreuve E5",
    date: "Juin-Octobre 2023",
    location: "Lycée Dick Ukeiwe",
    description: (
      <>
        <p>
          Dans le cadre de l’épreuve finale E5 du BTS SIO spécialité SISR, j’ai conçu et déployé une infrastructure réseau complète pour une entreprise fictive "DEVLINE".
        </p>

        <div className="space-y-6">
  <p><strong>Mission 1 : Mise en place du LAN</strong></p>
  <ul className="list-disc list-inside">
    <li>Schéma réseau LAN</li>
    <li>Installation d’un Active Directory (VBox)</li>
    <li>Configuration AD DS, DHCP (plage IP définie), DNS</li>
    <li>Création et déploiement des postes clients sur le domaine DEVLINE</li>
    <li>Gestion des groupes, comptes utilisateurs et GPO (stratégies de sécurité, redirections)</li>
    <li>Installation serveur Zabbix avec déploiement agents clients</li>
    <li>Installation serveur GLPI pour gestion du parc</li>
  </ul>

  <p><strong>Mission 2 : Mise en place du WAN</strong></p>
  <ul className="list-disc list-inside">
    <li>Schéma réseau WAN</li>
    <li>Installation et configuration du routeur/pare-feu pfSense</li>
    <li>Mise en place de règles de filtrage et routage inter-VLAN</li>
  </ul>

  <p><strong>Mission 3 : Mise en place de la DMZ</strong></p>
  <ul className="list-disc list-inside">
    <li>Installation et configuration d’un serveur web</li>
  </ul>

  <p><strong>Travail sur Cisco Catalyst 2960</strong></p>
  <ul className="list-disc list-inside">
    <li>Création VLAN, trunks, EtherChannel, Spanning Tree</li>
    <li>Sécurisation des switches : interface management, SSH, affectation ports VLAN</li>
  </ul>
</div>
      </>
    ),
    type: "Projet final",
    technologies: [
      "Active Directory",
      "Cisco 2960",
      "pfSense",
      "Zabbix",
      "GLPI",
      "Windows Server",
      "Linux",
      "Virtualisation",
      "Sécurité réseau",
    ],
    image: "/projet_final_bts.jpg",
  },
  {
    title: "SIMULAND",
    date: "Juillet 2022",
    location: "Lycée Dick Ukeiwe",
    description:
      "Dans le cadre de ma formation en BTS SIO, nous avons organisé un jeu de simulation nommé Simuland pour les terminales STMG du Lycée Dick Ukeiwe. " +
      "Préparation des salles info et création des comptes utilisateurs. " +
      "Gestion des équipes et des parties. " +
      "Animation du jeu et vérification des équipements. " +
      "Gestion administrative sur Simuland. " +
      "Vérification des salles et connexion réseau. " +
      "Tests d’accès au site et sessions.",
    type: "Animation pédagogique",
    technologies: ["Gestion de projet", "Travail en équipe", "Simulation"],
    url: "https://weblgn.ac-noumea.nc/IMG/pdf/jee-2022_1_.pdf",
    image: "/simuland.jpg",
  },
  {
    title: "CTF pour les terminales SIG",
    date: "Septembre 2022",
    location: "Lycée Dick Ukeiwe",
    description:
      "Dans le cadre de ma formation en BTS SIO, nous avons organisé une journée pour faire découvrir le BTS aux terminales SIG du Lycée Blaise Pascal et Dick Ukeiwe via un Capture The Flag. " +
      "Création complète du CTF, hébergement web, création des défis et gestion sur le site. " +
      "Organisation des équipes avec comptes, accueil, connexion et déroulement du jeu. " +
      "Le gagnant est reparti avec un commutateur Cisco Catalyst.",
    type: "Animation pédagogique",
    technologies: ["Cybersécurité", "CTF", "Formation", "Pédagogie"],
    image: "/ctf_terminales_sig.jpg",
  },
  {
    title: "Search IT : Application Mastodonte CLI",
    date: "2025",
    location: "UNC",
    description: (
      <>
        <p>
          Projet universitaire réalisé en groupe dans le cadre de la Licence : développement d’un mini-réseau social similaire à Mastodon.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Création d'une interface utilisateur avec Vaadin</li>
          <li>Architecture basée sur Spring Boot et Maven</li>
          <li>Authentification, publication, recherche de posts</li>
          <li>Déploiement local via CLI et navigateur</li>
          <li>Travail collaboratif en méthode projet</li>
        </ul>
        <p>
          Ce projet a été particulièrement motivant et formateur, combinant à la fois développement web moderne, logique métier et coordination d'équipe.
        </p>
      </>
    ),
    type: "Projet universitaire",
    technologies: ["Vaadin", "Spring Boot", "Maven", "Java", "Web", "Travail en groupe"],
    image: "/projet10_mastodonte.jpg",
    url: "https://github.com/ldesfontaine/projet10",
  },
];

function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);
  const limit = 350;

  const shortDesc =
    typeof project.description === "string"
      ? project.description.slice(0, limit)
      : null;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-full sm:max-w-none">
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
            <img
              src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
              alt={`Image du projet ${project.title}`}
              className="w-full max-w-xs h-auto object-cover rounded-md"
              loading="lazy"
            />
            <div className="space-y-2 max-w-xl">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {project.location}
                </div>
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="self-start sm:self-auto">
            {project.type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
          {typeof project.description === "string"
            ? showMore
              ? project.description
              : shortDesc + (project.description.length > limit ? "..." : "")
            : project.description}
        </p>

        {typeof project.description === "string" &&
          project.description.length > limit && (
            <Button variant="link" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Réduire" : "Afficher la suite"}
            </Button>
          )}

        <div className="space-y-4 mt-6">
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.url && (
            <Button asChild variant="outline" className="group">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mes Projets</h1>
          <p className="text-muted-foreground text-lg">
            Projets réalisés et participations
          </p>
        </header>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <section key={index} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </section>
          ))}
        </div>

        <section className="animate-fade-in-up">
          <Card className="border-dashed border-2 border-muted">
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Projets à venir
                </h3>
                <p className="text-muted-foreground">
                  D'autres projets seront ajoutés au fur et à mesure de mon
                  parcours en Licence MIAGE.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
