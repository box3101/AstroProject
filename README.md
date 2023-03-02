# Jung-gu Office with Astro1.0


##
![basics](https://box3101.github.io/JungGu/assets/front/img/%EC%9D%B8%EC%B2%9C%EC%A4%91%EA%B5%AC-%EA%B5%90%EC%9C%A1%ED%8F%AC%ED%84%B8.png)


## 🚀 프로젝트조 구조

Jung-gu Office File Structure


```
dist
├── src
│   └── pages ... pages 
│   └── layouts  
│   │   └── BaseLayout.astro
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── SubBody.astro
│   │   └── SubHeader.astro
│   │   └── SubLayout.astro
│   └── components  
│   │   └── Button.astro.
│   │   └── Card.astro
│   │   └── Gotop.astro
│   │   └── MoNavigation.astro
│   │   └── Navigation.astro
│   │   └── PagingNavigation.astro
│   └── css         
│   │   └── ui.css 
│   └── scss        
│   │   └── bass.
│   │   │   └──  "base/reset.scss";
│   │   │   └──  "base/variables.scss";
│   │   └── utility
│   │   │   └──  "utility/function.scss"; 
│   │   │   └──  "utility/mixin.scss"; 
│   │   └── vandors 
│   │   │   └──  "vandors/animate.scss";  
│   │   │   └──  "vandors/swiper.scss"; 
│   │   └── components 
│   │   │   └──  "components/card.scss";  
│   │   │   └──  "components/button.scss"; 
│   │   │   └──  "components/form.scss";  
│   │   │   └──  "components/popup.scss"; 
│   │   └── layout 
│   │   │   └──  "layout/baseLayout.scss";  
│   │   │   └──  "layout/common.scss"; 
│   │   │   └──  "layout/header.scss";  
│   │   │   └──  "layout/footer.scss"; 
│   │   └── pages
│   │   │   └──  "pages/main.scss"; 
│   └── img
│   └── font
│   └── js 
```

## 🧞 터미널 명령

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

