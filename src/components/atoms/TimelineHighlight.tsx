export const TimelineHighlight = ({ text }: { text: string }) => (
  <h4
    style={{ fontFamily: "'Zilla Slab Highlight', serif" }}
    className="text-2xl bg-brand-gray text-gray-900 w-max rounded-sm font-semibold px-2"
  >
    {text}
  </h4>
);
