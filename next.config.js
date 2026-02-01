const nodeModulesPath = new URL('./node_modules', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      /**
       * To support ES Modules and TypeScript using `"module": "NodeNext"`, we specify aliases that
       * `.js` file lookups could be referring to.
       */
      extensionAlias: {
        ...config.resolve?.extensionAlias,
        '.js': ['.ts', '.tsx', '.js'],
        '.jsx': ['.ts', '.tsx', '.js'],
      },
      modules: [...(config.resolve.modules || []), nodeModulesPath],
      plugins: [...(config.resolve.plugins || [])],
    },
  }),
  eslint: {
    /**
     * Disable ESLint on production builds
     */
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
