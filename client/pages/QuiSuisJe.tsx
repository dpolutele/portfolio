import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Target, Music } from "lucide-react";

export default function QuiSuisJe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center py-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Qui suis-je ?
          </h1>
          <p className="text-muted-foreground text-lg">
            Découvrez mon parcours et ma personnalité
          </p>
        </header>

        {/* Photo and Greeting */}
        <section className="animate-fade-in-up">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-4 border-background shadow-xl shrink-0">
                  <img
                    src={`${import.meta.env.BASE_URL}quisuis-je.jpg`}
                    alt="Photo de Dylan POLUTELE"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">DP</div>';
                    }}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-foreground mb-2 greeting">
                    Salut,
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Moi c'est{" "}
                    <strong>POLUTELE Dylan</strong>,
                    j'ai <strong>21 ans</strong> et dans cette rubrique, je vais
                    me présenter en détail, pourquoi avoir choisi
                    l'informatique, mes passions, et ce que j'envisage pour la
                    suite de ma carrière professionnelle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mon parcours */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Mon parcours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Rien ne m'était destiné à travailler dans l'informatique. Comme
                la plupart des adolescents de la génération Z, j'aimais les
                jeux vidéo, mais sans plus. Je ne m'étais pas découvert une
                passion folle pour le code ou encore les réseaux informatiques.
                Après une première STMG, j'ai postulé en terminale SIG (Systèmes
                d'Information et de Gestion), car aucune autre filière ne
                m'intéressait vraiment.
              </p>

              <p className="text-foreground leading-relaxed">
                J'ai donc obtenu mon <strong>baccalauréat technologique option SIG</strong> au Lycée Dick Ukeiwë en 2021. Cette terminale m'a montré l'impact du numérique dans le monde professionnel, ce qui m'a poussé à postuler pour le{" "}
                <a
                  href="https://btsinfo.nc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit no-underline"
                >
                  <strong>BTS SIO (Services Informatiques aux Organisations)</strong>
                </a>.
                Je suis plus que satisfait de ce BTS, car j'y ai acquis de nombreuses compétences.
              </p>

              <p className="text-foreground leading-relaxed">
                Cette formation m'a fait comprendre que l'informatique est un
                domaine très vaste qui ne se limite pas seulement au code ou aux
                machines. Les métiers, les outils, l'évolution technologique...
                tout cela fait que, jour après jour, ce domaine évolue et change
                constamment.
              </p>

              <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground leading-relaxed">
                  J'ai obtenu mon diplôme avec la spécialité{" "}
                  <strong>
                    "Solutions d'Infrastructure, Systèmes et Réseaux" (SISR)
                  </strong>. Cette spécialité me permet d'être capable de concevoir, de
                  mettre en place et de maintenir des infrastructures réseaux
                  sécurisées. Concrètement, cela signifie que je peux installer
                  et configurer des serveurs, gérer des systèmes d'exploitation,
                  administrer des réseaux locaux et distants, et assurer la
                  sécurité des systèmes informatiques.
                </p>
              </div>

              {/* Paragraphe Licence MIAGE */}
              <p className="text-foreground leading-relaxed">
                Fraîchement diplômé d'une licence informatique{" "}
                <strong>
                  MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)
                </strong>, formation bac+3 axée sur les langages de programmation et les systèmes d'information. J'ai changé de spécialité pour élargir mes compétences et être polyvalent, car l'informaticien de demain doit savoir naviguer entre plusieurs domaines. Grâce à mon parcours STMG, j'ai acquis de solides bases en économie, management et droit, que j'ai pu consolider avec cette licence.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* En dehors des études */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                En dehors des études
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                <Music className="h-5 w-5 text-primary" />
                Ma passion pour la musique
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Je suis de nature calme et discrète, mais j'apprécie également l'interaction avec les autres. C'est vrai que cela peut sembler contradictoire, mais si je devais me décrire en quelques mots, je dirais que je suis un <strong>introverti sociable</strong>.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                En dehors de mes études, je passe beaucoup de mon temps libre à <strong>composer des sons sur mon ordinateur</strong>. Si je n'avais pas découvert l'informatique, je me serais probablement lancé dans une carrière de DJ ou de beatmaker.
              </p>
              <p className="text-foreground leading-relaxed">
                Je m'intéresse également à tout ce qui se passe dans le monde sur les plans <strong>politique, économique et social</strong> car je pense qu'il est important pour nous, étudiants et futurs acteurs du monde de demain, de nous informer sur les enjeux qui traversent nos sociétés.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ce que j'envisage */}
        <section className="animate-fade-in-up">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Ce que j'envisage pour la suite 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
              Actuellement technicien informatique contractuel au sein du lycée polyvalent Jules Garnier, mon objectif est d’enrichir mon expérience professionnelle en mettant en pratique les compétences techniques et relationnelles que j’ai acquises tout au long de mon parcours.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
              Je souhaite évoluer dans des environnements stimulants, travailler en mode projet, collaborer avec différents acteurs d’une entreprise ou organisation. Je m’oriente progressivement vers une spécialisation dans l’administration des systèmes et réseaux, tout en conservant une approche polyvalente qui me permet d’appréhender l’informatique dans sa globalité.
              </p>
              <p className="text-foreground leading-relaxed mt-4 italic">
                Convaincu que l’apprentissage est un chemin sans fin, je considère chaque nouvelle expérience comme une occasion de progresser.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
