import { Badge, Box, Card, Dialog, Flex, Text } from "@radix-ui/themes";
import { Cross1Icon } from "../../assets/Icon";
import { MAX_W_SIZE } from "../../config/home";
import { goSite } from "../../utils/project";
import { DemoBtn, GithubBtn, NotionBtn } from "./button";
import { BulletText } from "./common";

interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  demo?: string;
  notion?: string;
  github?: string;
}
interface ProjectDetailProps extends ProjectProps {
  mainFeat: string[];
  performance?: string[];
  techCallenge?: string[];
}

export const ProjectCard = ({
  title,
  description,
  skills,
  demo,
  github,
}: ProjectProps) => {
  return (
    <Card
      className="rt-Card h-full bg-[var(--color-bg)] border border-[var(--color-primary)] cursor-pointer"
      style={
        {
          "--card-border-width": "0px",
          "--card-padding": "0px",
        } as React.CSSProperties
      }
    >
      <Box className="h-[10rem] bg-[#ededed]"> </Box>

      <Box p={"4"}>
        <Text as="div" size={"6"} weight={"bold"}>
          {title}
        </Text>
        <Text as="div" size={"2"} color="gray" mt={"1"} mb={"5"}>
          {description}
        </Text>

        <Box className="min-h-[4rem] flex-wrap" mb={"4"}>
          {skills.map((item) => (
            <Badge
              key={item}
              mr={"2"}
              mb={"2"}
              color="gray"
              variant="surface"
              size="2"
              radius="full"
            >
              {item}
            </Badge>
          ))}
        </Box>

        {github && <GithubBtn onClick={() => goSite(github)}>GitHub</GithubBtn>}
        {demo && <DemoBtn onClick={() => goSite(demo)}>Demo</DemoBtn>}
      </Box>
    </Card>
  );
};

export const ProjectContent = ({
  title,
  description,
  skills,
  demo,
  notion,
  github,
  mainFeat,
  performance,
  techCallenge,
}: ProjectDetailProps) => {
  return (
    <Dialog.Content maxWidth={MAX_W_SIZE}>
      <Flex justify={"between"}>
        <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
        <Dialog.Close>
          <Cross1Icon cursor="pointer" />
        </Dialog.Close>
      </Flex>
      <Dialog.Description className="mb-4">{description}</Dialog.Description>

      <Text>#팀</Text>

      <Box
        className="h-[15rem] bg-[#ededed] rounded-[12px]"
        overflow={"hidden"}
        my={"4"}
      ></Box>

      <Flex
        className="border-b border-b-[var(--slate-a4)]"
        justify={"between"}
        pb={"4"}
        mb={"4"}
      >
        <Box className="flex-1">
          <Text as="div" size={"4"} weight={"bold"} mb={"2"}>
            주요 기능
          </Text>
          {mainFeat.map((item, i) => (
            <BulletText key={i}>{item}</BulletText>
          ))}

          {techCallenge && (
            <>
              <Text as="div" size={"4"} weight={"bold"} mt={"4"} mb={"2"}>
                기술적 도전
              </Text>
              {techCallenge.map((item, i) => (
                <BulletText key={i} color="var(--color-accent)">
                  {item}
                </BulletText>
              ))}
            </>
          )}
        </Box>
        <Box className="flex-1">
          {performance && (
            <>
              <Text as="div" size={"4"} weight={"bold"} mb={"2"}>
                성과 및 결과
              </Text>
              {performance.map((item, i) => (
                <BulletText color="var(--color-green)" key={i}>
                  {item}
                </BulletText>
              ))}
            </>
          )}

          <Text as="div" size={"4"} weight={"bold"} mt={"4"} mb={"2"}>
            사용 기술
          </Text>
          {skills.map((item, i) => (
            <Badge
              key={i}
              mr={"2"}
              mb={"2"}
              color="gray"
              variant="soft"
              size="2"
              radius="full"
            >
              {item}
            </Badge>
          ))}
        </Box>
      </Flex>

      {github && (
        <GithubBtn size="3" onClick={() => goSite(github)}>
          GitHub
        </GithubBtn>
      )}
      {notion && (
        <NotionBtn size="3" onClick={() => goSite(notion)}>
          Notion
        </NotionBtn>
      )}
      {demo && (
        <DemoBtn size="3" onClick={() => goSite(demo)}>
          Demo
        </DemoBtn>
      )}
    </Dialog.Content>
  );
};
