export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
      applicationID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    },
  ],
};
