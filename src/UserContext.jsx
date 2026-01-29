// import { createContext } from "react";

// const UserContext = createContext(null);

// export default UserContext;



import { createContext } from "react";

const UserContext = createContext({
  user: "",
  setUser: () => {},
  total: 0,
  setTotal: () => {},
});

export default UserContext;
