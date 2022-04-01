import { createContext, ReactNode, useState } from 'react';
import { Inputs } from '../components/Auth/Register/CompleteRegisterForm';

const initialValue = {
  userData: {},
  setUserData: () => {}
};

type PreviewContextProps = {
  children: ReactNode;
};

type PreviewContextTypes = {
  userData: any;
  setUserData: (user: Inputs) => void;
};

export const PreviewContext = createContext<PreviewContextTypes>(initialValue);

export const PreviewContextProvider = ({ children }: PreviewContextProps) => {
  const [userData, setUserData] = useState<Inputs | any>(initialValue.userData);

  return (
    <PreviewContext.Provider value={{ userData, setUserData }}>
      {children}
    </PreviewContext.Provider>
  );
};
