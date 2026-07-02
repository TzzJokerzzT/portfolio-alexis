import { useAboutMe } from "@/app/shared/api/hooks/useAboutMe";
import { useIntroduction } from "@/app/shared/api/hooks/useIntroduction";
import { usePersonalInformation } from "@/app/shared/api/hooks/usePersonalInformation";
import { useSkills } from "@/app/shared/api/hooks/useSkill";
import { SectionTitle } from "@/app/shared/components/ui";
import { ContentSection } from "./ui/ContentSection";
import { ImageAvatarSection } from "./ui/ImageAvatarSection";

export const MainContent = () => {
  const { data: aboutMe } = useAboutMe();
  const { data: skill } = useSkills();
  const { data: introduction } = useIntroduction();
  const { data: personalInformation } = usePersonalInformation();
  return (
    <div className="relative z-10 container mx-auto px-6 md:px-12">
      <SectionTitle subtitle={`${aboutMe?.description}`}>About Me</SectionTitle>

      <div className="mt-16 grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        {/* Image/Avatar Section */}
        <ImageAvatarSection />

        {/* Content Section */}
        <ContentSection
          personalInformation={personalInformation}
          introduction={introduction}
          skill={skill || []}
        />
      </div>
    </div>
  );
};
