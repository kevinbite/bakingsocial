import { IntroSection } from '@/components/immersive/IntroSection';
import { PolaroidGallery } from '@/components/immersive/PolaroidGallery';
import { ExperienceSection } from '@/components/immersive/ExperienceSection';
import { AtmosphereSection } from '@/components/immersive/AtmosphereSection';
import { ScheduleSection } from '@/components/immersive/ScheduleSection';
import { SocialSection } from '@/components/immersive/SocialSection';
import { PrivateSection } from '@/components/immersive/PrivateSection';
import { ContactSection } from '@/components/immersive/ContactSection';
import { SideNavigation } from '@/components/immersive/SideNavigation';
import { FloatingHeader } from '@/components/immersive/FloatingHeader';

export default function Home() {
  return (
    <main className="relative">
      {/* Grain Overlay for entire page */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-[9999]" />
      
      {/* Floating Minimal Header */}
      <FloatingHeader />
      
      {/* Side Navigation */}
      <SideNavigation />
      
      {/* Immersive Sections */}
      <IntroSection />
      <PolaroidGallery />
      <ExperienceSection />
      <AtmosphereSection />
      <ScheduleSection />
      <SocialSection />
      <PrivateSection />
      <ContactSection />
    </main>
  );
}
