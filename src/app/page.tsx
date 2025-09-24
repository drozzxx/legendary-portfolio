import Hero from "@/components/Hero";
import About from "@/components/About";
import ThemeToggle from "@/components/ThemeToggle";
import SkillCloud from "@/components/SkillCloud";
import Timeline from "@/components/Timeline";
import ProjectGallery from "@/components/ProjectGallery";
import EducationTimeline from "@/components/EducationTimeline";
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
        
        {/* Timeline */}
        <ErrorBoundary>
          <Timeline />
        </ErrorBoundary>

        {/* Projects */}
        <ErrorBoundary>
          <ProjectGallery />
        </ErrorBoundary>

        {/* Education Timeline */}
        <ErrorBoundary>
          <EducationTimeline />
        </ErrorBoundary>

        {/* About Section */}
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}
