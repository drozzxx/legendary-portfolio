import Hero from "@/components/Hero";
import About from "@/components/About";
import ThemeToggle from "@/components/ThemeToggle";
import SkillCloud from "@/components/SkillCloud";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        {/* Hero Section */}
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        {/* Skill Cloud */}
        <div className="py-16">
          <ErrorBoundary>
            <SkillCloud />
          </ErrorBoundary>
        </div>
        
        {/* About Section */}
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}
