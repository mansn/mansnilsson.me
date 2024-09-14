import { config } from '@netlify/remix-edge-adapter'


/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...config,
  mdx: async (filename, ...rest) => {
    const [rehypeHighlight, remarkToc] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("remark-toc").then((mod) => mod.default),
    ]);
  
    return {
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeHighlight],
    };
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
