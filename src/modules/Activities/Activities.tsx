import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'native-base';
import { useStore } from '@hooks/useStore';
import { FlashList } from '@shopify/flash-list';
import ProjectCard from '@components/shared/ProjectCard/ProjectCard';
import { getActivityImage } from '@utils/helpers/links';

const Activities = () => {
  const { activitiesStore } = useStore();

  useEffect(() => {
    activitiesStore.loadActivities();
  }, []);

  return (
    <FlashList
      keyExtractor={(item) => item.id.toString()}
      data={activitiesStore.activities}
      renderItem={({ item }) => <ProjectCard project={item} uri={getActivityImage(item.mediaKey)} />}
      estimatedItemSize={300}
    />
  );
};

export default observer(Activities);
