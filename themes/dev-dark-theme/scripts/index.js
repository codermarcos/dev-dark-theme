hexo.extend.helper.register('url_data', args => {
  let data = [];

  args.data.forEach(element => {
    data.push(element.name.replace(new RegExp(' ', 'g'), '-'));
  });

  return data.join('/');
});
hexo.extend.helper.register('first_data', args => {
  let data = args.data[0] ? args.data[0].name : '';
  return data.replace(new RegExp(' ', 'g'), '-');
});
hexo.extend.helper.register('url_title', args => {
  return args.replace(new RegExp(' ', 'g'), '-');
});