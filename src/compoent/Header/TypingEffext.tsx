import { Box, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const TypingEffext = ({
  text = "",
  typingSpeed = 200,
  deletingSpeed = 100,
  delayAfterTyping = 3000,
}: {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterTyping?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index <= text.length) {
      // 타이핑 중
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (index > text.length) {
      // 타이핑 완료
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIndex((prev) => prev - 1);
      }, delayAfterTyping);
    } else if (isDeleting && index >= 0) {
      // 지우는 중
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (index < 0) {
      // 지우기 완료
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearInterval(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delayAfterTyping]);

  return (
    <Box className="w-[28rem] max-[600px]:w-[100%]" overflow="hidden">
      <Text as="div" weight="bold" align="center">
        <span className="theme-text corsur-ani">{displayedText}</span>
      </Text>
    </Box>
  );
};
export default TypingEffext;
