"use client";

import { createContext, useEffect, useState } from "react";
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
  const [userId, setUserId] = useState<string | null>();
  useEffect(() => {
    let id: string | null = sessionStorage.getItem("token")
      ? sessionStorage.getItem("id")
      : localStorage.getItem("id");
    setUserId(id);
  }, []);

  const [state, setState] = useState();
  const categories = useFetch("http://localhost:3000/api/category");
  const books = useAxios(`http://localhost:3000/api/books`);
  const users = useAxios(`http://localhost:3000/api/users`);

  return (
    <MyContext.Provider value={{ state, setState, categories, books, users }}>
      {children}
    </MyContext.Provider>
  );
};
