import { useMemo } from 'react';
import { rootStore } from '@store';

export const useStore = () => useMemo(() => rootStore, []);
