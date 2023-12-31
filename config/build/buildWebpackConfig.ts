import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import buildLoader from './buildLoaders';
import { buildPugins } from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    resolve: buildResolvers(options),
    module: {
      rules: buildLoader(options),
    },
    plugins: buildPugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev && 'inline-source-map',
  };
}
