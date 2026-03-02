// @/components/organisms/SkillSection.tsx
import { ToolIcon } from "../molecules/ToolsIcon";
import { QuoteBlock } from "../molecules/QuoteBlock";

export const HardSkills = ({
  tools,
}: {
  tools: { id: number; name: string; image: string }[];
}) => (
  <section
    id="tools"
    aria-labelledby="hard-skill"
    className="overflow-hidden mb-32 bg-brand-linear w-full"
  >
    <div className="flex container mx-auto flex-col lg:flex-row items-center justify-between gap-10 p-10 lg:p-16">
      <div className="flex flex-col gap-5 w-full lg:w-160">
        <h2 id="hard-skill" className="text-brand-green2 font-bold text-4xl">
          Hard Skill
        </h2>
        <p className="text-3xl font-semibold">Development Tools I use</p>
        <h3 className="text-xl font-base text-zinc-300">
          Software that helps me work, Software is just a tool that makes a
          product useful depending on ideas, innovation and creativity.
        </h3>
        <QuoteBlock
          text="People don't care about what you say, they care about what you build."
          author="Mark Zuckerberg"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 w-full lg:w-120">
        {tools.map((tool, index) => (
          <ToolIcon
            key={index}
            src={tool.image}
            alt={tool.name}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ))}
      </div>
    </div>
  </section>
);
