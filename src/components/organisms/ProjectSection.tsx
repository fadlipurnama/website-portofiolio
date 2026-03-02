import { ThumbnailCard } from "../molecules/ThumbnailCard";
import { NavLink } from "../atoms/NavLink";
import { PiFigmaLogoLight, PiGithubLogoLight } from "react-icons/pi";

export const ProjectSection = ({
  title,
  data,
}: {
  title: string;
  data: {
    id: number | string;
    name: string;
    image: string;
    url: {
      figma: string;
      github: string;
    };
  }[];
}) => (
  <section id="selected-project" className="section-container lg:gap-x-20">
    <h2 className="text-4xl mb-10 lg:mb-14 lg:text-5xl text-main-text font-extrabold leading-tight">
      {title}
    </h2>
    <div className="grid gap-y-10 md:gap-y-10 md:gap-x-8 grid-cols-12">
      {data?.map((project) => (
        <ThumbnailCard
          key={project.id}
          className="col-span-12 md:col-span-6"
          url="/"
          altImage={project.name}
          thumbnail={project.image}
        >
          <div className="flex gap-4">
            <NavLink
              target="_blank"
              variant="normal"
              href={project.url.figma}
              className="text-md flex items-center gap-1"
            >
              <PiFigmaLogoLight className="size-5" /> View Design
            </NavLink>
            <NavLink
              target="_blank"
              variant="normal"
              href={project.url.github}
              className="text-md flex items-center gap-1"
            >
              <PiGithubLogoLight className="size-5" /> Visit Github
            </NavLink>
          </div>
        </ThumbnailCard>
      ))}
    </div>
  </section>
);
