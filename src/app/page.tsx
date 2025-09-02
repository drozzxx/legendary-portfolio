import Hero from "@/components/Hero";
import About from "@/components/About";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
    </div>
  );
}
