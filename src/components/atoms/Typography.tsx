// components/atoms/Typography.tsx
interface TypographyProps {
  variant: "h1" | "h2" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ variant: Tag, children, className = "" }: TypographyProps) => {
  const styles = {
    h1: "text-5xl font-bold text-main-text",
    h2: "text-3xl xl:text-5xl font-bold text-main-text leading-tight",
    p: "text-lg xl:text-2xl text-main-text leading-relaxed",
    span: "text-brand-green2 font-semibold tracking-widest",
  };

  return <Tag className={`${styles[Tag as keyof typeof styles]} ${className}`}>{children}</Tag>;
};