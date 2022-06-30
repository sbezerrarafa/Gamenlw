import React, {createContext, ReactNode, useContext, useState} from 'react';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({
    id: 'string',
    username: 'string',
    firstName: 'string',
    avatar: 'string',
    email: 'string',
    token: 'string',
  } as User);
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

//useAuth
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
