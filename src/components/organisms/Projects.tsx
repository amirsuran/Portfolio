import SectionContainer from "@/components/atoms/SectionContainer";
import SectionTitle from "@/components/molecules/SectionTitle";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function Projects() {
  // Project data
  const projects = [
    {
      title: "InstaYar",
      role: "Frontend Developer",
      description:
        "A social media platform for connecting nearby users, featuring real-time messaging, location-based discovery, and personalized content feeds.",
      image: "/images/project-1.jpg",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "GraphQL",
        "typeScript",
        "SSG&SSR",
      ],
      demoUrl: "https://instayar.ir",
    },
    {
      title: "RandomLetter",
      role: "Lead Frontend Developer",
      description:
        "An AI-powered platform for artists to generate and customize artwork using machine learning algorithms. Features include style transfer, image enhancement, and custom art generation.",
      image: "/images/project-2.png",
      technologies: ["React", "TypeScript", "SCSS", "Framer Motion"],
      demoUrl: "https://honar.ai/privacy",
    },
  ];

  return (
    <SectionContainer id="projects">
      <SectionTitle title="Projects" subtitle="Some of my recent work" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            role={project.role}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
