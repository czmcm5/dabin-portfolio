import { Box, Flex, Grid, Modal, ModalOverlay, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PROJECT_MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Projects";
import { ProjectCard, ProjectContent } from "../../shared/ui/ProjectCard";

const Projects = () => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(
    null
  );
  const onOpen = (i: number | null): void => setSelectedProjectIdx(i);

  return (
    <Flex
      as="section"
      id="Projects"
      className="container gray"
      direction="column"
      align="center"
      py="9"
    >
      <Text variant="title" mb={6}>
        Projects
      </Text>
      <Text variant="description" mb={4}>
        제가 진행한 주요 프로젝트들입니다. 각 프로젝트를 클릭하면 상세 내용을
        확인할 수 있습니다.
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"5"}
        maxWidth={PROJECT_MAX_W_SIZE}
      >
        {data.map((project, i) => (
          <Box className="flex-1" key={i}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
              github={project.github}
              demo={project.demo}
              role={project.role}
              projectType={project.projectType}
              onOpen={() => onOpen(i)}
            />
            <Modal
              isOpen={selectedProjectIdx === i}
              onClose={() => onOpen(null)}
              isCentered
            >
              <ModalOverlay />
              <ProjectContent
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.skills}
                role={project.role}
                projectType={project.projectType}
                notion={project.notion}
                github={project.github}
                demo={project.demo}
                mainFeat={project.mainFeat}
                performance={project.performance}
                techCallenge={project.techCallenge}
                troubleshooting={project.troubleshooting}
              />
            </Modal>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};

export default Projects;
