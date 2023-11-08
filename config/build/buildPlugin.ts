import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
// TODO убрать
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

export function buildPlugins({ paths, isDev, analyze }: BuildOptions): webpack.WebpackPluginInstance[] {
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
            analyze ? [new BundleAnalyzerPlugin(
                { openAnalyzer: true }
            )] : []
        )
    ]

    return plugins
}
