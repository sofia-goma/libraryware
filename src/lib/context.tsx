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
  const categories = useFetch("/api/category");
  const books = useAxios(`/api/books`);
  const users = useAxios(`/api/users`);
  const user = useAxios(`/api/users/${userId && userId}`);

  return (
    <MyContext.Provider
      value={{ state, setState, categories, books, users, user }}
    >
      {children}
    </MyContext.Provider>
  );
};
