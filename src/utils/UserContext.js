import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummyname",
    email: "dummyemail",
  },
});

export default userContext;
