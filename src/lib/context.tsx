"use client";

import { createContext, useState } from "react";
import useFetch from "./fetch";

type Props = {
  children: React.ReactNode;
};

interface MyContextProps {
  state: object;
  setState: React.Dispatch<React.SetStateAction<object>>;
}

export const MyContext = createContext({});

export const Context = ({ children }: Props) => {
  const [state, setState] = useState();
  const { data: category } = useFetch("http://localhost:3000/api/category");
  return (
    <MyContext.Provider value={{ state, setState, category }}>
      {children}
    </MyContext.Provider>
  );
};
