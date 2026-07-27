import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { HeroSection } from "@/src/components/home/hero-section";
import { ProductPreview } from "@/src/components/home/product-preview";
import { ValueSection } from "@/src/components/home/value-section";
import { FeaturesSection } from "@/src/components/home/features-section";
import { WorkflowSection } from "@/src/components/home/workflow-section";
import { PrivacySection } from "@/src/components/home/privacy-section";
import { CompatibilitySection } from "@/src/components/home/compatibility-section";
import { DownloadCTA } from "@/src/components/home/download-cta";
import { FaqPreview } from "@/src/components/home/faq-preview";

/**
 * Fluent homepage.
 *
 * Section order follows the narrative:
 * Discover → Understand → Trust → Download.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* 1. Hero — First impression */}
        <HeroSection />

        {/* 2. Product preview — What it looks like */}
        <ProductPreview />

        {/* 3. Value proposition — Why Fluent (light surface) */}
        <ValueSection />

        {/* 4. Features — What it does */}
        <FeaturesSection />

        {/* 5. Workflow — How it works */}
        <WorkflowSection />

        {/* 6. Privacy — Trust (light surface) */}
        <PrivacySection />

        {/* 7. Compatibility — System requirements */}
        <CompatibilitySection />

        {/* 8. Download — Call to action */}
        <DownloadCTA />

        {/* 9. FAQ preview — Reassurance (light surface) */}
        <FaqPreview />
      </main>

      <SiteFooter />
    </>
  );
}
