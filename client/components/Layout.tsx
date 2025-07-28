import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main content with sidebar spacing */}
      <main className="md:ml-64 min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="md:ml-64 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Dylan Polutele.
          </p>
        </div>
      </footer>
    </div>
  );
}
