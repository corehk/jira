import React, { ReactNode, useContext, useState } from "react";
import * as auto from "auth-provider";
import { User } from "screens/project-list/search-panel";
import { promises } from "fs";

interface AutoForm {
  username: string;
  password: string;
}

export const AutoContext = React.createContext<
  | {
      user: User | null;
      register: (form: AutoForm) => Promise<void>;
      login: (form: AutoForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AutoContext.displayName = "AutoContext";

export const AutoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AutoForm) => auto.login(form).then(setUser);
  const register = (form: AutoForm) => auto.register(form).then(setUser);
  const logout = () => auto.logout().then(() => setUser(null));

  return (
    <AutoContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AutoContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AutoContext);
  if (!context) {
    throw new Error("useAuth 必须在AutoContext中使用");
  }
  return context;
};
