const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig){

	eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
	// Paths are relative to the project root. The input directory is stripped
	// from the output path, so these land in `_site/` rather than `_site/src/`.
	eleventyConfig.addPassthroughCopy("src/articles/*/*.png");

	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPassthroughCopy("src/contact/formfragment.html");
	
	eleventyConfig.addPassthroughCopy("src/_assets");
	eleventyConfig.addPassthroughCopy("src/download");

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	};
};
