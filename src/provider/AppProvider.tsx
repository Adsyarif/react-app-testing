import { createContext } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const defaultValue = {};

const AppProvider = createContext(defaultValue);
