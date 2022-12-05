import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { AspectRatio, Box, Divider, Heading, HStack, Image, Pressable, Stack, Text } from 'native-base';
import { TProject } from '~types';
import moment from 'moment';

const ProjectCard: FC<{ project: TProject; uri?: string }> = ({ project, uri }) => {
  const time = project.firstPublicationDateTime;
  // todo: maybe use dayjs?
  const renderTime = moment(time).isValid() ? moment(time).format('DD.MM.YYYY') : time;

  return (
    <Pressable>
      {({ isPressed }) => {
        return (
          <Box alignItems="center" style={{ transform: [{ scale: isPressed ? 0.98 : 1 }] }}>
            <Box mb={5} maxW="90%" rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="1">
              <HStack p={3} alignItems="center" space={4} justifyContent="space-between">
                <Text color="coolGray.600" fontWeight="400">
                  {renderTime}
                </Text>
                <Text color="coolGray.600" fontWeight="400">
                  {project.subcategory}
                </Text>
              </HStack>
              <Box>
                <AspectRatio w="100%" ratio={16 / 7}>
                  <Image
                    resizeMode={'cover'}
                    source={{
                      uri: uri || '',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack space={3}>
                <Stack p={5} space={2}>
                  <Heading numberOfLines={3} size="md" ml="-1">
                    {project.title}
                  </Heading>
                </Stack>
                <Text numberOfLines={3} px={5} fontWeight="400">
                  {project.subtitle}
                </Text>
                <Divider />
                <HStack px={5} pb={3} alignItems="center" space={4} justifyContent="space-between">
                  {/* info: footer */}
                </HStack>
              </Stack>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default observer(ProjectCard);
