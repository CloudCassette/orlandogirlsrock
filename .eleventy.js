module.exports = function (eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/ogrc-logo-white.svg");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

