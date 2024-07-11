"use client";

import { createContext, useState } from "react";
import useFetch from "./fetch";
import useAxios from "./axios.fetch";

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
  const { data: category, isLoading } = useFetch(
    "http://localhost:3000/api/category"
  );
  let id;
  if (localStorage.getItem("id") !== undefined) {
    id = localStorage.getItem("id");
  } else if (sessionStorage.getItem("id") !== undefined) {
    id = sessionStorage.getItem("id");
  }

  const { data: user } = useAxios(`http://localhost:3000/api/users/${id}`);

  return (
    <MyContext.Provider value={{ state, setState, category, isLoading, user }}>
      {children}
    </MyContext.Provider>
  );
};
