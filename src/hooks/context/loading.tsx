import { LoadingContextType } from '@/types/components';
import { createContext, useContext } from 'react';

export const LoadingContext = createContext<LoadingContextType>({ hasLoaded: false });

export const useInitialLoading = () => useContext(LoadingContext);
