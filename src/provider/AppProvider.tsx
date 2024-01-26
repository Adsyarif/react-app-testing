import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface Context {
  user?: User;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
}

const defaultValue: Context = {
  user: undefined,
  setUser: undefined,
};

interface Props {
  children: ReactNode;
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useUser = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usesUser must be used within a AppProvider");
  }
  return context;
};

export default AppProvider;
