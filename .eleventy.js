const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // Load environment variables from .env file
  const envPath = path.join(__dirname, 'src', '.env');
  let envVars = {
    SHOW_SIGNUP: 'false',
    SIGNUP_FORM_URL: '#',
    SHOW_VOLUNTEER_SIGNUP: 'false',
    VOLUNTEER_SIGNUP_FORM_URL: '#'
  };

  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          envVars[key.trim()] = value.trim();
        }
      }
    });
  }

  // Convert string 'true'/'false' to boolean
  eleventyConfig.addGlobalData('SHOW_SIGNUP', envVars.SHOW_SIGNUP === 'true');
  eleventyConfig.addGlobalData('SIGNUP_FORM_URL', envVars.SIGNUP_FORM_URL);
  eleventyConfig.addGlobalData('SHOW_VOLUNTEER_SIGNUP', envVars.SHOW_VOLUNTEER_SIGNUP === 'true');
  eleventyConfig.addGlobalData('VOLUNTEER_SIGNUP_FORM_URL', envVars.VOLUNTEER_SIGNUP_FORM_URL);

  // Copy CSS and assets to output root
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/ogrc-logo-white.svg": "ogrc-logo-white.svg" });
  eleventyConfig.addPassthroughCopy({ "src/orlandogirlsrockcamp-signup26.jpg": "orlandogirlsrockcamp-signup26.jpg" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
