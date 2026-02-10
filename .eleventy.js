module.exports = function (eleventyConfig) {
  // Copy CSS and assets to output root
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/ogrc-logo-white.svg": "ogrc-logo-white.svg" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

