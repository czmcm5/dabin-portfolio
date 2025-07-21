import { Card } from "@radix-ui/themes";

export const WhiteCard = ({
  children,
  mb,
}: {
  children: React.ReactNode;
  mb?: string;
}) => {
  return (
    <Card
      className="custon-Card w-full bg-[var(--color-bg)] border border-[var(--color-primary)] "
      size={"3"}
      mb={mb || ""}
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
