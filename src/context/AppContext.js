import React, { createContext, useState } from "react";

export const AllContext = createContext();

const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    show,
    handleClose,
    handleShow,
    showSidebar,
    setShowSidebar,
  };

  return (
    <>
      <AllContext.Provider value={value}>
        {children}
      </AllContext.Provider>
    </>
  );
};

export default AppContext;
