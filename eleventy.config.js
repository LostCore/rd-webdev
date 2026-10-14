module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("base64", value => Buffer.from(value).toString("base64"));

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
