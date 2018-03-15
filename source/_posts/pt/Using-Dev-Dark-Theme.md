---
title: Using Dev Dark Theme
lang: pt
date: 2017-12-10 00:20:00
updated: 2017-12-10 00:20:00
photo: []
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
description: Tutorial make post, page or draft using Dev Dark Theme
tags: [Using, Informations, Run]
categories:
- HowTo
---
### Make Post 
Use this command line
```bash
    hexo new post YOUR_POST_TITLE_WITHOUT_SPACE --lang=YOUR_LANGUAGE
```
Or Create a file with this structure inner **source/_posts/YOUR_LANGUAGE/** 
with name of the yout post title **YOUR_POST_TITLE_WHITOUT_SPACE.md** 
and create a folder with the same name **YOUR_POST_TITLE_WHITOUT_SPACE**
```yml
---
title: YOUR POST TITLE
lang: YOUR_POST_LANGUAGE
date: YOUR_POST_DATE -use this format "0000-00-00 00:00:00"
description: YOUR POST DESCRIPTION
tags: [YOUR, POST, TAGS]
categories:
- YOUR_POST_CATEGORY_WITHOUT_SPACE
---
```
### Make Draft 
Use this command line
```bash
    hexo new draft YOUR_POST_TITLE_WITHOUT_SPACE --lang=YOUR_LANGUAGE
```
Or Create a file with this structure inner **source/_drafts/YOUR_LANGUAGE/** 
with name of the yout post title **YOUR_DRAF_TITLE_WHITOUT_SPACE.md** 
and create a folder with the same name **YOUR_DRAFT_TITLE_WHITOUT_SPACE**
```yml
---
title: YOUR DRAFT TITLE
lang: YOUR_DRAFT_LANGUAGE
description: YOUR DRAFT DESCRIPTION
tags: [YOUR, DRAFT, TAGS]
categories:
- YOUR_DRAFT_CATEGORY_WITHOUT_SPACE
---
```