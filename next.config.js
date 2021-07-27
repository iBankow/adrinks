module.exports = {
  reactStrictMode: true,
  resolve: {
    fallback: {
      net: false,
    },
  },
  images: {
    domains: ["localhost", "adrinks-painel.host.zukt.cloud"],
  },
};
