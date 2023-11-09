import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins ({ paths, isDev, analyze }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            title: 'Aston Project'
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        ...(
            isDev ? [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()] : []
        ),
        ...(
            analyze
                ? [new BundleAnalyzerPlugin(
                    { openAnalyzer: true }
                )]
                : []
        )
    ];

    return plugins;
}
