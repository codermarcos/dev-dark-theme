hexo.extend.helper.register('url_categories', (args) => {
    let original = args;
    let categories = [];
    
    original.data.forEach(element => {
      categories.push(element.name);
    });
  
    return categories.join('/');
  });