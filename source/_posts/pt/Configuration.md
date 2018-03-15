---
title: Configuration
lang: pt
date: 2017-12-10 00:30:00
updated: 2017-12-10 00:30:00
photo: []
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
description: How to customise this theme
tags: [Personalization, Colors, Settings]
categories:
- Settings
---
## Configuration theme 
This theme has some configutarions pre-defined in **_config.yml** 
```yml
title: # Title of the site
charset: # Charset of the site
robots: # Content of the meta tag robots
keywords: # Content of the meta tag keywords
content: # Content of the meta tag description 
author: # Name or Nickname of the site author
language: # Your language
```

If you want use comments configure with this lines, but if you prefer use [Facebook Docs](https://developers.facebook.com/tools/comments/) to customise comments
```yml
comments:
  show: # true or false to show comments
  moderation: # true or false will be moderation
  fb_user_id: # user id of the moderator
```

And inner **themes** > **dev-dark-theme** > **config.yml** 
```yml
# Miscellaneous
analitycs: # Your analitycs code 
favicon: # Your favicon path
twitter: # Twitter link
github: # Github username
facebook: # Facebook link
instagram: # Instagram link
linkedin: # Linkedin link
youtube: # Youtube link
whatsapp: # Link telto your phone number or Link to whatsapp
gmail: # Link mailto your gmail
```

### Personalization 
Inner **themes** > **dev-dark-theme** > **source** > **css** > **variables.css** has the colors and images background of the theme
```css
:root {
  /* COLORS */
  --color_primaryLight: #fffff7;
  --color_primaryAcent: #c0392b;
  --color_secondaryDark: #282830;
  --color_secondaryMiddle: #abb2bf;
  --color_secondaryLight: #60646d;
  --color_transparent: transparent;
  /* IMAGES */
  --image_header: url('../images/header.jpg');
}
```

To make post, page or draft read [using Dev Dark Theme](/pt/HowTo/Using-Dev-Dark-Theme)