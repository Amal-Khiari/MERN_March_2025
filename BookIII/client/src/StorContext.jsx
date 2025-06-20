import { createContext, useState } from 'react';

export const MyContext = createContext();

export const StoreProvider = ({ children }) => {
  const [title, setTitle] = useState('');

  return (
    <MyContext.Provider value={{ title, setTitle }}>
      {children}
    </MyContext.Provider>
  );
}