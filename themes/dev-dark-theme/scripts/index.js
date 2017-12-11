hexo.extend.helper.register('url_categories', args => {
  let original = args;
  let categories = [];

  original.data.forEach(element => {
    categories.push(element.name.replace(new RegExp(' ', 'g'), '-'));
  });

  return categories.join('/');
});
hexo.extend.helper.register('first_category', args => {
  let original = args;
  let category = original.data[0].name.replace(new RegExp(' ', 'g'), '-');
  return category;
});
hexo.extend.helper.register('url_title', args => {
  let original = args;
  return original.replace(new RegExp(' ', 'g'), '-');
});