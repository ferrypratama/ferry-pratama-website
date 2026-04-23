module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    permalink: data => `/blog/${data.page.fileSlug}/`,
    title: data => data.title,
  }
};
