const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	watch: true,
	cache: false,
	entry: path.join(__dirname, "src", "index"),
	output: {
		path: path.resolve(__dirname, "assets/js"),
		filename: "app.js",
		clean: true
	},
	// plugins: [
	// 	new MiniCssExtractPlugin({
	// 		filename: "style.css",
	// 	}),
	// ],
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.css$/i,
	// 			use: [
	// 				{
	// 					loader: MiniCssExtractPlugin.loader,
	// 					options: {
	// 						publicPath: (resourcePath, context) => {
	// 							return path.relative(path.dirname(resourcePath), context) + "/assets/css";
	// 						  },
	// 					},
	// 				},
	// 				"css-loader",
	// 				"postcss-loader",
	// 			],
	// 		},
	// 	],
	// },
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
};
