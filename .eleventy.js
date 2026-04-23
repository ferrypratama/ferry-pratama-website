module.exports = function(eleventyConfig) {

  // Passthrough — copy as-is to _site/
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "images": "images" });

  // Date filter — format: "15 Apr 2026"
  eleventyConfig.addFilter("postDate", (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day:   "numeric",
      month: "short",
      year:  "numeric",
    });
  });

  // Capitalize filter for tag labels
  eleventyConfig.addFilter("capitalize", (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  // Blog posts collection — newest first
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: {
      input:    ".",
      output:   "_site",
      includes: "_includes",
      layouts:  "_layouts",
    },
    // Only process .njk and .md — old .html files are ignored (not copied)
    templateFormats:       ["njk", "md"],
    markdownTemplateEngine: "njk",
  };
};
