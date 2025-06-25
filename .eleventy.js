const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig){

	eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
	eleventyConfig.addPassthroughCopy("articles/*/*.png");

	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPassthroughCopy("contact/formfragment.html");
	
	eleventyConfig.addPassthroughCopy("_assets");
	eleventyConfig.addPassthroughCopy("download");

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	};
};
