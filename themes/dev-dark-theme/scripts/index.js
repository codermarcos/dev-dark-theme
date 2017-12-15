hexo.extend.helper.register('url_categories', args => {
  let original = args;
  let categories = [];

  original.data.forEach(element => {
    categories.push(element.name.replace(new RegExp(' ', 'g'), '-'));
  });

  return categories.join('/');
});
hexo.extend.helper.register('first_category', args => {
  let category = args.data[0] ? args.data[0].name : '';
  return category.replace(new RegExp(' ', 'g'), '-');
});
hexo.extend.helper.register('url_title', args => {
  let original = args;
  return original.replace(new RegExp(' ', 'g'), '-');
});