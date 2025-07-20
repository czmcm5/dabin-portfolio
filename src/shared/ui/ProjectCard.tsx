import { Badge, Box, Card, Dialog, Flex, Text } from "@radix-ui/themes";
import { Cross1Icon } from "../../assets/Icon";
import { SUB_MAX_W_SIZE } from "../../config/home";
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

export const ProjectCard = ({ title, description, skills }: ProjectProps) => {
  return (
    <Card
      className="rt-Card w-full bg-[var(--color-bg)] border border-[var(--color-primary)] cursor-pointer"
      style={
        {
          "--card-border-width": "0px",
          "--card-padding": "0px",
        } as React.CSSProperties
      }
    >
      <Box className="h-[10rem] bg-[var(--color-gray)]">sd</Box>

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

        <GithubBtn>GitHub</GithubBtn>
        <DemoBtn>Demo</DemoBtn>
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
    <Dialog.Content maxWidth={SUB_MAX_W_SIZE}>
      <Flex justify={"between"}>
        <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
        <Dialog.Close>
          <Cross1Icon cursor="pointer" />
        </Dialog.Close>
      </Flex>
      <Dialog.Description className="mb-4">{description}</Dialog.Description>

      <Box
        className="h-[15rem] bg-[var(--color-gray)] rounded-[12px]"
        overflow={"hidden"}
        my={"4"}
      >
        sd
      </Box>

      <Flex
        className="border-b border-b-[var(--slate-a4)]"
        justify={"between"}
        pb={"4"}
        mb={"4"}
      >
        <Box className="flex-1">
          <Text as="div" weight={"bold"} mb={"2"}>
            주요 기능
          </Text>
          {mainFeat.map((item, i) => (
            <BulletText key={i}>{item}</BulletText>
          ))}

          {techCallenge && (
            <>
              <Text as="div" size={"3"} weight={"bold"} mt={"4"} mb={"1"}>
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
              <Text as="div" weight={"bold"} mb={"2"}>
                성과 및 결과
              </Text>
              {performance.map((item, i) => (
                <BulletText color="var(--color-green)" key={i}>
                  {item}
                </BulletText>
              ))}
            </>
          )}

          <Text as="div" weight={"bold"} mt={"4"} mb={"1"}>
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

      {github && <GithubBtn onClick={() => goSite(github)}>GitHub</GithubBtn>}
      {notion && <NotionBtn onClick={() => goSite(notion)}>Notion</NotionBtn>}
      {demo && <DemoBtn onClick={() => goSite(demo)}>Demo</DemoBtn>}
    </Dialog.Content>
  );
};
