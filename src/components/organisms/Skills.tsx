import SectionContainer from "@/components/atoms/SectionContainer";
import SectionTitle from "@/components/molecules/SectionTitle";
import SkillItem from "@/components/molecules/SkillItem";
import {
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  TypeScriptIcon,
  FramerMotionIcon,
  NextIntlIcon,
  SsrIcon,
  SeoIcon,
} from "@/components/atoms/SkillIcons";

export default function Skills() {
  const skills = [
    { name: "React", icon: <ReactIcon />, proficiency: 91 },
    { name: "Next.js", icon: <NextJsIcon />, proficiency: 90 },
    { name: "TypeScript", icon: <TypeScriptIcon />, proficiency: 88 },
    { name: "Tailwind CSS", icon: <TailwindIcon />, proficiency: 92 },
    { name: "Framer Motion", icon: <FramerMotionIcon />, proficiency: 90 },
    { name: "Internationalization", icon: <NextIntlIcon />, proficiency: 90 },
    { name: "SSR & SSG", icon: <SsrIcon />, proficiency: 85 },
    { name: "SEO", icon: <SeoIcon />, proficiency: 90 },
  ];

  return (
    <SectionContainer id="skills">
      <SectionTitle
        title="Skills & Expertise"
        subtitle="Technologies I work with"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
