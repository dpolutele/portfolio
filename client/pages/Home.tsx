import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function TypingEffect() {
  const fixedTexts = [
    "Bienvenue sur mon Portfolio",
    "Diplômé bac +3 en informatique",
  ];

  const dynamicWords = ["systèmes", "réseaux"];
  const dynamicPrefix = "Spécialisé dans les ";

  // Définition des phases du cycle d'animation
  const [phase, setPhase] = useState<
    | "typingFixed"
    | "pauseFixed"
    | "deletingFixed"
    | "typingPrefixWord"
    | "pauseDynamic"
    | "deletingWord"
    | "deletingPrefix"
  >("typingFixed");

  const [fixedIndex, setFixedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0);

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "typingFixed": {
        const fullText = fixedTexts[fixedIndex];
        if (charIndex <= fullText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(fullText.slice(0, charIndex));
            setCharIndex(charIndex + 1);
          }, 100);
        } else {
          timeout = setTimeout(() => setPhase("pauseFixed"), 1200);
        }
        break;
      }
      case "pauseFixed": {
        timeout = setTimeout(() => setPhase("deletingFixed"), 800);
        break;
      }
      case "deletingFixed": {
        if (charIndex >= 0) {
          timeout = setTimeout(() => {
            setDisplayedText(fixedTexts[fixedIndex].slice(0, charIndex));
            setCharIndex(charIndex - 1);
          }, 50);
        } else {
          if (fixedIndex < fixedTexts.length - 1) {
            setFixedIndex(fixedIndex + 1);
            setPhase("typingFixed");
            setCharIndex(0);
          } else {
            // Passage à la partie dynamique après les fixes
            setPhase("typingPrefixWord");
            setCharIndex(0);
            setDynamicWordIndex(0);
            setDisplayedText("");
          }
        }
        break;
      }
      case "typingPrefixWord": {
        // Tape "Futur technicien " + mot dynamique
        const fullDynamicText = dynamicPrefix + dynamicWords[dynamicWordIndex];
        if (charIndex <= fullDynamicText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(fullDynamicText.slice(0, charIndex));
            setCharIndex(charIndex + 1);
          }, 100);
        } else {
          timeout = setTimeout(() => setPhase("pauseDynamic"), 1200);
        }
        break;
      }
      case "pauseDynamic": {
        timeout = setTimeout(() => setPhase("deletingWord"), 800);
        break;
      }
      case "deletingWord": {
        // Supprime seulement le mot dynamique (après le préfixe)
        const fullDynamicText = dynamicPrefix + dynamicWords[dynamicWordIndex];
        const prefixLen = dynamicPrefix.length;
        const currentLen = displayedText.length;

        if (currentLen > prefixLen) {
          timeout = setTimeout(() => {
            setDisplayedText(fullDynamicText.slice(0, currentLen - 1));
          }, 50);
        } else {
          if (dynamicWordIndex < dynamicWords.length - 1) {
            // Passe au mot dynamique suivant
            setDynamicWordIndex(dynamicWordIndex + 1);
            setCharIndex(dynamicPrefix.length);
            setPhase("typingPrefixWord");
          } else {
            // Après dernier mot dynamique, supprime le préfixe entier
            setPhase("deletingPrefix");
            setCharIndex(dynamicPrefix.length);
          }
        }
        break;
      }
      case "deletingPrefix": {
        // Supprime le préfixe "Futur technicien "
        if (charIndex > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(dynamicPrefix.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          }, 50);
        } else {
          // Reset boucle complète
          setFixedIndex(0);
          setPhase("typingFixed");
          setCharIndex(0);
          setDynamicWordIndex(0);
        }
        break;
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, fixedIndex, dynamicWordIndex, displayedText]);

  return (
    <span className="font-bold text-4xl md:text-6xl border-r-2 border-foreground animate-blink-caret whitespace-normal md:whitespace-nowrap">
      {displayedText}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 animate-fade-in">
          <h1 className="mb-6">
            <TypingEffect />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bonjour l'ami(e), bienvenue sur mon portfolio. Tu trouveras sur ce
            site un résumé de ce que j'ai pu réaliser dans ma vie
            professionnelle. Bonne visite !
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-4 border-background shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                srcSet={`${import.meta.env.BASE_URL}profile.jpg 1x, ${import.meta.env.BASE_URL}profile.jpg 2x`}
                alt="Photo de profil Dylan POLUTELE"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">DP</div>';
                }}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="animate-fade-in-up">
          <Card className="backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Coordonnées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <a
                  href="mailto:dylangiovannipolutele@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">dylangiovannipolutele@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+687 96.75.01</span>
                </div>

                <a
                  href="https://github.com/dpolutele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-4 w-4 text-primary" />
                  <span className="text-sm">GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Presentation Section */}
        <section className="animate-fade-in-up">
          <Card className="backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
              <CardDescription>A propos de moi</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                En bref, sortant d'une formation en licence MIAGE à l'UNC et titulaire d'un BTS SIO, je suis
                actuellement technicien informatique contractuel au Lycée Polyvalent Jules Garnier.
              </p>
              <Link to="/qui-suis-je">
                <Button variant="outline" className="group">
                  En savoir plus
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
          <Link to="/competences">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Compétences
                </CardTitle>
                <CardDescription>
                  Découvrez mes compétences techniques
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/projets">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Projets
                </CardTitle>
                <CardDescription>Explorez mes réalisations</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/contact">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Contact
                </CardTitle>
                <CardDescription>Entrer en contact avec moi</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </section>
      </div>
    </div>
  );
}
