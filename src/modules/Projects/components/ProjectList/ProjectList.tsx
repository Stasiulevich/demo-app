import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ProjectCard from '@components/shared/ProjectCard/ProjectCard';
import { getProjectImage } from '@utils/helpers/links';
import { ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import NoData from '@components/shared/NoData/NoData';
import { useStore } from '@hooks/useStore';

const ProjectList = () => {
  const { projectsStore } = useStore();
  const [loading, setLoading] = useState(false);

  const handlePullRefresh = async () => {
    setLoading(true);
    await projectsStore.loadProjects();
    setLoading(false);
  };

  const handleMoreLoads = async () => {
    setLoading(true);
    await projectsStore.loadMoreProjects();
    setLoading(false);
  };

  const handleClearFilters = () => {
    projectsStore.setFiltersParams('q', null);
    projectsStore.loadProjects();
  };

  if (!projectsStore.projects.length)
    return <NoData clearCb={handleClearFilters} isFilterApplied={projectsStore.isFilterApplied} />;

  return (
    <FlashList
      keyExtractor={(item) => item.id.toString()}
      data={projectsStore.projects.slice()}
      renderItem={({ item }) => <ProjectCard project={item} uri={getProjectImage(item.mediaKey)} />}
      refreshing={loading}
      onRefresh={handlePullRefresh}
      onEndReached={handleMoreLoads}
      onEndReachedThreshold={0.2}
      estimatedItemSize={300}
      ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
    />
  );
};

export default observer(ProjectList);
