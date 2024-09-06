"use client";

import React, {
  useMemo,
  useCallback,
  createContext,
  useEffect,
  useState,
} from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { useMutation } from "convex/react";
import { Context, PropsWithChildren, useContext } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

const initialState: IAuth0 = {
  login: async () => {},
  logout: async () => {},
  user: undefined,
  isAuthenticated: false,
  isLoading: false,
};

export const AuthContext = createContext(initialState) as Context<IAuth0>;

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: PropsWithChildren) {
  const {
    loginWithRedirect: auth0Login,
    logout: auth0Logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  const [userId, setUserId] = useState<Id<"users"> | null>(null);

  const logout = useCallback(
    () =>
      auth0Logout({ logoutParams: { returnTo: `${window.location.origin}/` } }),
    [auth0Logout]
  );

  const login = useCallback(
    (connection?: string) =>
      auth0Login({
        authorizationParams: {
          connection: connection,
          redirect_uri: `${window.location.origin}/user`,
        },
      }),
    [auth0Login]
  );

  const storeUser = useMutation(api.user.checkOrCreateUser);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      return;
    }

    const syncUser = async () => {
      try {
        if (!user.email) {
          throw Error("Email not define");
        }

        const user_id = await storeUser({
          user: {
            email: user.email,
            name: user.name || "Anonymous",
            phone: user.phone_number,
            image: user.picture,
          },
        });

        setUserId(user_id);
      } catch (error) {
        return;
      }
    };
    syncUser();
  }, [isAuthenticated, storeUser, user]);

  const auth0 = useMemo(
    () =>
      ({
        login,
        logout,
        user: { id: userId, ...user },
        isAuthenticated,
        isLoading,
      }) as IAuth0,
    [login, logout, user, userId, isAuthenticated, isLoading]
  );
  return <AuthContext.Provider value={auth0}>{children}</AuthContext.Provider>;
}
