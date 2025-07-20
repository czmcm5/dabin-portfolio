import { Card } from "@radix-ui/themes";

export const WhiteCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      className="rt-Card w-full bg-[var(--color-bg)] border border-[var(--color-primary)]"
      size={"3"}
      style={
        {
          "--card-border-width": "0px",
        } as React.CSSProperties
      }
    >
      {children}
    </Card>
  );
};
