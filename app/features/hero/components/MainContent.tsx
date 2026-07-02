import { usePersonalInformation } from "@/app/shared/api/hooks/usePersonalInformation";
import { CTAButtons } from "./ui/CTAButtons";
import { HeroDecoration } from "./ui/HeroDecoration";
import { MainTitle } from "./ui/MainTitle";
import { PreTitle } from "./ui/Pretitle";
import { Tagline } from "./ui/Tagline";

export const MainContent = () => {
  const { data } = usePersonalInformation();

  return (
    <div className="relative z-10 container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="max-w-2xl order-2 lg:order-1">
          {/* Pre-title */}
          <PreTitle basic={data?.basic} />

          {/* Main Title */}
          <MainTitle basic={data?.basic} />

          {/* Tagline */}
          <Tagline basic={data?.basic} />

          {/* CTA Buttons */}
          <CTAButtons />
        </div>

        {/* Right Column - Banner Image */}
        <HeroDecoration />
      </div>
    </div>
  );
};
