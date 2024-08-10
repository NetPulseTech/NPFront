const nextConfig = {
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/newsfeed/style1",
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  