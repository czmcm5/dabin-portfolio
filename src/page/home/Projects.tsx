import { Box, Dialog, Flex, Text } from "@radix-ui/themes";
import { PROJECT_MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Projects";
import { ProjectCard, ProjectContent } from "../../shared/ui/ProjectCard";

const Projects = () => {
  return (
    <Flex
      className="container gray"
      direction="column"
      align={"center"}
      py={"9"}
    >
      <Text as="div" size={"8"} weight={"bold"} mb={"5"} align="center">
        Projects
      </Text>
      <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
        제가 진행한 주요 프로젝트들입니다. 각 프로젝트를 클릭하면 상세 내용을
        확인할 수 있습니다.
      </Text>

      <Flex className={`w-full max-w-[${PROJECT_MAX_W_SIZE}]`} gap={"6"}>
        {data.map((project, i) => (
          <Dialog.Root key={i}>
            <Dialog.Trigger>
              <Box className="w-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                />
              </Box>
            </Dialog.Trigger>

            <ProjectContent
              title={project.title}
              description={project.description}
              skills={project.skills}
              notion={project.notion}
              github={project.github}
              demo={project.demo}
              mainFeat={project.mainFeat}
              performance={project.performance}
              techCallenge={project.techCallenge}
            />
          </Dialog.Root>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
