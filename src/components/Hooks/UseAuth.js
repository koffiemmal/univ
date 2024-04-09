import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

const UseAuth = () => {
  return useContext(UserContext);
};

export default UseAuth;
