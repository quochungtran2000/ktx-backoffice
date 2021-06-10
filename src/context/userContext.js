import { createContext, useState, useEffect, useContext } from "react";
// import { Redirect } from "react-router";
import userApi from "../api/userApi";
import { useHistory } from 'react-router-dom';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const history = useHistory()

  console.log(user);
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    history.push("/")
  };
  useEffect(() => {
    if (!token) {
      return setUser(null);
    }
    const fetchUser = async () => {
      const data = await userApi.getUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setUser(data);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setToken,
        token,
        logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
