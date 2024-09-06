"use client";

import React from "react";
import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { useRouter } from "next/navigation";

const address = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!address) throw new Error("Convex URL not found");
const convex = new ConvexReactClient(address);

const authDomain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string;
const authClient = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string;
if (!authDomain) throw new Error("Auth domain not found");
if (!authClient) throw new Error("Auth client not found");

function OAuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigate = useRouter();

  const onRedirectCallback = (appState?: AppState) => {
    navigate.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <>
      <Auth0Provider
        domain={authDomain}
        clientId={authClient}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        onRedirectCallback={onRedirectCallback}
      >
        <ConvexProviderWithAuth0 client={convex}>
          {children}
        </ConvexProviderWithAuth0>
      </Auth0Provider>
    </>
  );
}

export default OAuthProvider;
