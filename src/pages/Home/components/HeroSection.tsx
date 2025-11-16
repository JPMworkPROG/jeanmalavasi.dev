import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ProfileFrame } from "@/components/ProfileFrame/ProfileFrame";
import { SocialLinks } from "./SocialLinks";
import type { SocialLink, HeroData } from "../data";

interface HeroSectionProps {
  socialLinks: SocialLink[];
  heroData: HeroData;
}

export function HeroSection({ socialLinks, heroData }: HeroSectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 opacity-0 animate-fade-in-up">
        <p className="text-muted-foreground text-sm tracking-wider opacity-0 animate-fade-in animation-delay-200">
          {heroData.subtitle}
        </p>
        <h1 className="text-5xl font-bold leading-tight opacity-0 animate-fade-in-up animation-delay-300">
          {heroData.titlePrefix} <br />
          <span className="text-primary font-mono">{heroData.name}</span>
        </h1>
        <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animation-delay-500">
          {heroData.description}
        </p>
        <div className="flex items-center gap-4 opacity-0 animate-fade-in-up animation-delay-700">
          <Button className="bg-primary hover:bg-primary/90">
            <Link to={heroData.buttonLink} className="flex items-center justify-center">
              <Code2 className="mr-2 h-4 w-4" />
              {heroData.buttonText}
            </Link>
          </Button>
          <SocialLinks links={socialLinks} />
        </div>
      </div>

      <div className="relative hidden md:block md:h-120 lg:h-128 opacity-0 animate-fade-in-scale animation-delay-400">
        <ProfileFrame src={heroData.profileImage.src} alt={heroData.profileImage.alt} />
      </div>
    </div>
  );
}

