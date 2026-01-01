module.exports = function (eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

