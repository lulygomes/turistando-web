import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../service/api';

interface User {
  id?: string;
  name: string;
}

interface AuthContextState {
  user: User;
  signIn(name: string): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)

  const signIn = useCallback(async ({name}) => {
    try {

      const { data } = await api.post('/user', {name});
      
      console.log(data);
      setUser(data)
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };