import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, Text, View } from 'native-base';
import CustomIcon from '@components/UI/CustomIcon';

type TProps = {
  isFilterApplied?: boolean;
  clearCb?: () => void;
};

const NoData = ({ isFilterApplied = true, clearCb }: TProps) => {
  return (
    <Box py={5}>
      <Center>
        <CustomIcon size={40} name={isFilterApplied ? 'search' : 'archive'} />
        <Text pt={3}>{isFilterApplied ? 'Sorry, nothing found' : 'No data'}</Text>
        {isFilterApplied ? (
          <Button variant="link" onPress={clearCb && clearCb}>
            Clear filters
          </Button>
        ) : null}
      </Center>
    </Box>
  );
};

export default observer(NoData);
