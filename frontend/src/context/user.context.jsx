import React from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const login = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const logout = () => {
    setUsername("");
    setLoggedIn(false);
  };

  const userValue = { loggedIn, username, login, logout };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const { loggedIn, username, login, logout } =
    React.useContext(UserContext);

  return { loggedIn, username, login, logout };
};

export default useUserContext;
