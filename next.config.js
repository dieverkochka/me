import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
