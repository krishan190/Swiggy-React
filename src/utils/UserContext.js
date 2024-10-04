import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummyname",
    email: "dummyemail@gmail.com",
  },
});

export default userContext;
