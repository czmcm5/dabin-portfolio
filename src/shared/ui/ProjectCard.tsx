import {
  Badge,
  Box,
  Flex,
  HStack,
  Img,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { MAX_W_SIZE } from "../../config/home";
import { goSite } from "../../utils/project";
import { DemoBtn, GithubBtn, NotionBtn } from "./button";
import { BulletText } from "./text";
import { images } from "../../assets/image";

interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  role?: string;
  projectType?: string;
  image?: string;
  demo?: string;
  notion?: string;
  github?: string;
  onOpen?: () => void;
}
interface ProjectDetailProps extends ProjectProps {
  mainFeat: string[];
  performance?: string[];
  techCallenge?: string[];
  troubleshooting?: {
    title: string;
    issue: string;
    solution: string;
  }[];
}

export const ProjectCard = ({
  title,
  description,
  skills,
  role,
  projectType,
  image,
  demo,
  github,
  onOpen,
}: ProjectProps) => {
  return (
    <Flex
      flexDir="column"
      className="custom-Card"
      h="full"
      bg="white"
      border="1px solid"
      borderColor="lightGray.500"
      borderRadius={8}
      overflow="hidden"
      cursor="pointer"
      onClick={onOpen}
    >
      <Box h={"10rem"} bg="lightGray.400" overflow={"hidden"}>
        {image && images[image] && <Img src={images[image]} />}
      </Box>

      <Flex flexDir="column" flex={1} p={4}>
        <HStack mb={2}>
          <Badge variant="purple">{projectType}</Badge>
          <Badge variant="outlineBlack">{role}</Badge>
        </HStack>

        <Box flex={1}>
          <Text variant="smTitle">{title}</Text>
          <Text variant="smDescription">{description}</Text>

          <HStack wrap="wrap" flex={1} my={"4"}>
            {skills.map((item) => (
              <Badge key={item} variant="outlineBlack">
                {item}
              </Badge>
            ))}
          </HStack>
        </Box>

        <HStack>
          {github && (
            <GithubBtn onClick={() => goSite(github)}>GitHub</GithubBtn>
          )}
          {demo && <DemoBtn onClick={() => goSite(demo)}>Demo</DemoBtn>}
        </HStack>
      </Flex>
    </Flex>
  );
};

export const ProjectContent = ({
  title,
  description,
  skills,
  role,
  projectType,
  image,
  demo,
  notion,
  github,
  mainFeat,
  performance,
  techCallenge,
  troubleshooting,
}: ProjectDetailProps) => {
  return (
    <ModalContent maxWidth={MAX_W_SIZE} maxHeight={"85%"} overflow="hidden">
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />

      <ModalBody overflow="auto">
        <Text color={"gray"} fontWeight="medium" mb={2}>
          {description}
        </Text>

        <HStack my={4}>
          <Badge variant="purple">{projectType}</Badge>
          <Badge variant="outlineBlack">{role}</Badge>
        </HStack>

        <Box
          aspectRatio={"5/2"}
          my={4}
          bg={"lightGray.400"}
          border="1px solid"
          borderColor="lightGray.400"
          borderRadius={12}
          overflow={"hidden"}
        >
          {image && images[image] && <Img src={images[image]} />}
        </Box>

        <Flex flexDir={{ base: "column", lg: "row" }} justify={"between"}>
          <Box className="flex-1">
            <Text fontWeight="bold" my={"2"}>
              주요 기여
            </Text>
            {mainFeat.map((item, i) => (
              <BulletText key={i}>{item}</BulletText>
            ))}

            {techCallenge && (
              <>
                <Text fontWeight="bold" mt={"4"} mb={"2"}>
                  기술적 도전
                </Text>
                {techCallenge.map((item, i) => (
                  <BulletText key={i} color="#fb923c">
                    {item}
                  </BulletText>
                ))}
              </>
            )}
          </Box>
          <Box className="flex-1">
            {performance && (
              <>
                <Text fontWeight="bold" my={"2"}>
                  성과 및 결과
                </Text>
                {performance.map((item, i) => (
                  <BulletText color="var(--color-green)" key={i}>
                    {item}
                  </BulletText>
                ))}
              </>
            )}

            <Text fontWeight="bold" mt={performance ? 4 : 0}>
              사용 기술
            </Text>
            <HStack wrap="wrap" mt={2}>
              {skills.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </HStack>
          </Box>
        </Flex>

        {troubleshooting && (
          <Box py={4}>
            <Text fontWeight="bold">🔧 트러블 슈팅</Text>
            {troubleshooting?.map((item, i) => (
              <Box
                key={i}
                pl={4}
                my={4}
                borderLeft="4px solid"
                borderColor="orange.500"
              >
                <Text fontWeight="bold" color="orange.500" mb={2}>
                  {item.title}
                </Text>
                <HStack align="flex-start" mb={4}>
                  <Badge variant="peach">문제</Badge>
                  <Text variant="smDescription">{item.issue}</Text>
                </HStack>
                <HStack align="flex-start">
                  <Badge variant="green">해결</Badge>
                  <Text variant="smDescription">{item.solution}</Text>
                </HStack>
              </Box>
            ))}
          </Box>
        )}
      </ModalBody>

      <ModalFooter borderTop="1px solid" borderColor={"lightGray.500"}>
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
      </ModalFooter>
    </ModalContent>
  );
};
