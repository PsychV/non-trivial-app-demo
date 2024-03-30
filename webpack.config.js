import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: path.resolve(__dirname, "src", "public", "ts", "main.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }/*,
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\(.png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: "file-loader",
            }
            */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "views", "index.html")
        })
    ],
    devServer: {
        host: "localhost",
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".js", ".jsx", ".tsx", ".ts", ".*"]
    }
};