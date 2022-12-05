import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@hooks/useStore';
import { Box, Button, Center, Input } from 'native-base';
import CustomIcon from '@components/UI/CustomIcon';
import ProjectList from '@modules/Projects/components/ProjectList';

const Projects = () => {
  const { projectsStore } = useStore();

  useEffect(() => {
    projectsStore.loadProjects();
  }, []);

  const handleChangeText = (text: string) => {
    console.log('input', text);
    projectsStore.setFiltersParams('q', text);
  };

  const handleSearch = () => {
    projectsStore.loadProjects();
  };

  return (
    <Box h="100%">
      <Box w="100%" alignItems="center" mt={3}>
        <Center mb={3} maxWidth="90%" w="90%" justifyContent="center">
          <Input
            w="100%"
            value={projectsStore.filterParams.q}
            placeholder="Search..."
            onChangeText={handleChangeText}
            InputRightElement={
              <Button w="1/6" h="full" onPress={handleSearch}>
                <CustomIcon name="search" size={18} color="#fff" />
              </Button>
            }
          />
        </Center>
      </Box>
      <ProjectList />
    </Box>
  );
};

export default observer(Projects);
