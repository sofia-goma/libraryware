"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { redirect } from "next/navigation";
import { useEffect, ComponentType } from "react";
import Loading from "@/app/loading";

const isAuth = <P extends object>(Component: ComponentType<P>) => {
  const IsAuth = (props: P) => {
    const { isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
      if (isLoading && !isAuthenticated) {
        redirect("/login");
      }
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
      return <Loading />;
    }

    return <Component {...props} />;
  };

  return IsAuth;
};

export default isAuth;
