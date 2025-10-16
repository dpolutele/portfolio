import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Car,
  Briefcase,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Parcours() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mon Parcours Professionnel
          </h1>
          <p className="text-muted-foreground text-lg">
            Formation, expériences et certifications
          </p>
        </header>

        {/* Diplômes */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Mes diplômes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    year: "2025",
                    title:
                      "Licence Méthodes Informatiques Appliquées à la Gestion des Entreprises",
                    status: "Obtenu",
                    mention: "Mention AB",
                    logo: "/licence-logo.png",
                  },
                  {
                    year: "2023",
                    title: "Brevet de Technicien Supérieur - Services Informatiques aux Organisations (option SISR)",
                    status: "Obtenu",
                    mention: "Mention AB",
                    logo: "/bts-logo.png",
                  },
                  {
                    year: "2021",
                    title: "Baccalauréat Sciences et Technologies du Management et de la Gestion (option SIG)",
                    status: "Obtenu",
                    mention: "Mention AB",
                    logo: "/bac-logo.png",
                  },
                  {
                    year: "2018",
                    title: "Diplôme national du brevet",
                    status: "Obtenu",
                    mention: "Mention AB",
                    logo: "/dnb-logo.png",
                  },
                ].map((diploma, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 sm:gap-6 p-4 rounded-lg border border-muted bg-accent/5"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <Badge variant="secondary" className="text-xs">
                        {diploma.year}
                      </Badge>
                      <img
                        src={`${import.meta.env.BASE_URL}${diploma.logo.replace(
                          /^\//,
                          ""
                        )}`}
                        alt={`${diploma.title} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {diploma.title ===
                        "Brevet de technicien supérieur - Services Informatiques aux Organisations" ? (
                          <a
                            href="https://btsinfo.nc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {diploma.title}
                          </a>
                        ) : (
                          diploma.title
                        )}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant={
                            diploma.status === "En cours"
                              ? "default"
                              : "outline"
                          }
                        >
                          {diploma.status}
                        </Badge>
                        {diploma.mention && (
                          <Badge variant="secondary">{diploma.mention}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Permis */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                Permis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-muted bg-accent/5">
                <Badge variant="secondary">2024</Badge>
                <span className="font-semibold">Permis B</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expériences */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Expériences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    year: "2025",
                    type: "CDD",
                    title: "Technicien informatique N1-N2",
                    company: "Lycée Polyvalent Jules Garnier",
                    description:
                      "Administration, supervision et maintenance du parc informatique de l'établissement, déploiements d'images, scripting (serveur FOG), gestion de VLAN Cisco Catalyst 3560, ticketing (GLPI).",
                    logo: "/jules-garnier.png",
                  },
                  {
                    year: "2025",
                    type: "Stage",
                    title: "Technicien informatique N1-N2",
                    company: "Lycée Polyvalent Jules Garnier",
                    description:
                      "Support utilisateur, maintenance informatique, rédaction de documentations et procédures techniques, déploiement d'images systèmes et intégration des postes au domaine de l'établissement, gestion de VLAN Cisco Catalyst 3560.",
                    logo: "/jules-garnier.png",
                  },
                  {
                    year: "2023",
                    type: "Stage",
                    title: "Technicien informatique N2-N3",
                    company: "Centre Hospitalier Territorial Gaston-Bourret",
                    description:
                      "Migration de serveurs, résolution de pannes réseaux, mise à jour de switches (Alcatel-Lucent), déploiement de logiciels applicatifs.",
                    logo: "/ch-gaston-bourret.png",
                  },
                  {
                    year: "2022",
                    type: "Stage",
                    title: "Technicien informatique N1",
                    company:
                      "Direction du numérique et de la modernisation de la Nouvelle-Calédonie",
                    description:
                      "Interventions sur site pour dépannage, remplacement, et déploiement de postes et matériels informatiques. Utilisation d’outils de gestion de parc et ticketing (Jira, EazyVista).",
                    logo: "/dnum.png",
                  },
                ].map((experience, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 sm:gap-6 p-4 rounded-lg border border-muted bg-accent/5"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <Badge variant="secondary" className="text-xs">
                        {experience.year}
                      </Badge>
                      <img
                        src={`${import.meta.env.BASE_URL}${experience.logo.replace(
                          /^\//,
                          ""
                        )}`}
                        alt={`${experience.company} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {experience.title}{" "}
                        <Badge variant="outline" className="ml-2">
                          {experience.type}
                        </Badge>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {experience.company}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications et documents */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Certifications et documents
              </CardTitle>
              <CardDescription>
                Téléchargez mes certifications et documents professionnels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* CV intégré */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Mon CV</h3>
                <iframe
                  src={`${import.meta.env.BASE_URL}curriculum-vitae-2025.pdf`}
                  className="w-full h-[800px] border rounded-lg"
                ></iframe>
                <div>
                  <Button variant="default" asChild>
                    <a
                      href={`${import.meta.env.BASE_URL}curriculum-vitae-2025.pdf`}
                      download="curriculum-vitae-2025.pdf"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger le CV
                    </a>
                  </Button>
                </div>
              </div>

              {/* Autres documents */}
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { name: "CNIL RGPD MOD1", file: "CNILRGPD-MOD1.pdf" },
                  { name: "CNIL RGPD MOD2", file: "CNILRGPD-MOD2.pdf" },
                  { name: "CNIL RGPD MOD3", file: "CNILRGPD-MOD3.pdf" },
                  { name: "Certification PIX", file: "PIX.pdf" },
                  { name: "GetConnected", file: "GetConnected.pdf" },
                ].map((doc, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4"
                    asChild
                  >
                    <a
                      href={`${import.meta.env.BASE_URL}${doc.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <ExternalLink className="h-4 w-4 text-primary" />
                        <span className="flex-1 text-left">{doc.name}</span>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
