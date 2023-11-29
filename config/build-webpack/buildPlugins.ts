import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import dotenv from 'dotenv';
import CopyPlugin from 'copy-webpack-plugin';

dotenv.config({
    path: './.env'
});

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
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                DB: process.env.DB,
                API_URL: process.env.API_URL,
                CLIENT_URL: process.env.CLIENT_URL,
                FB_API_KEY: process.env.FB_API_KEY,
                FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
                FB_PROJECT_ID: process.env.FB_PROJECT_ID,
                FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
                FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
                FB_APP_ID: process.env.FB_APP_ID,
                FB_DB_URL: process.env.FB_DB_URL
            })
        }),
        new CopyPlugin({
            patterns: [
                { from: './_redirects', to: '' }
            ]
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
