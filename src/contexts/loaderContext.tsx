import { createContext, useState } from 'react';

const initialValues = {
  loading: false,
  setLoading: () => {
    null;
  },
};
interface LoaderContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const LoaderContext = createContext<LoaderContextProps>(initialValues);

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
export { LoaderContext, LoaderProvider };
