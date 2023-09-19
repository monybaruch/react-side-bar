import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModelOpen(true);
  };
  const closeModal = () => {
    setIsModelOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, isModelOpen, openModal, openSidebar, closeModal, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
