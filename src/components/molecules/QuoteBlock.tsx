export const QuoteBlock = ({
  text,
  author,
}: {
  text: string;
  author: string;
}) => (
  <div className="flex flex-col gap-4">
    <p className="text-xl font-bold">&#34;{text}&#34;</p>
    <figure>
      <figcaption className="before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-zinc-500 before:mr-2 flex items-center text-zinc-400 italic">
        <cite className="text-xl italic">{author}</cite>
      </figcaption>
    </figure>
  </div>
);
