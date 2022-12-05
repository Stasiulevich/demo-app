const baseUrl = 'https://stg.bionabu.com'; //todo: only for dev

export const getProjectImage = (uuid: string) => {
  if (!uuid) return '';
  return `${baseUrl}/nest/api/public/projects/media/download/${uuid}`;
};

export const getActivityImage = (uuid: string) => {
  if (!uuid) return '';
  return `${baseUrl}/nest/api/public/activities/media/download/${uuid}`;
};

export const getAvatarUrl = (uuid: string) => {
  if (!uuid) return '';
  return `${baseUrl}/nest/api/public/experts/avatar/${uuid}`;
};
