# Jung-gu Office with Astro1.0


##
![basics](https://box3101.github.io/JungGu/assets/front/img/%EC%9D%B8%EC%B2%9C%EC%A4%91%EA%B5%AC-%EA%B5%90%EC%9C%A1%ED%8F%AC%ED%84%B8.png)

## π project deliverables

- Publishing Guide Document

[μΈμ²μ€κ΅¬_κ΅μ‘ν¬νΈ_UI_νΌλΈλ¦¬μ±κ°μ΄λ.pdf](https://box3101.github.io/JungGu/assets/front/img/20230220_%EC%9D%B8%EC%B2%9C%EC%A4%91%EA%B5%AC_%EA%B5%90%EC%9C%A1%ED%8F%AC%ED%84%B8_UI_%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1%EA%B0%80%EC%9D%B4%EB%93%9C.pdf)

- URL

[μΈμ²μ€κ΅¬_κ΅μ‘ν¬νΈ](https://leechanyong.netlify.app/)


## π project structure

Jung-gu Office File Structure


```
dist
βββ src
β   βββ pages ... pages 
β   βββ layouts  
β   β   βββ BaseLayout.astro
β   β   βββ Footer.astro
β   β   βββ Header.astro
β   β   βββ SubBody.astro
β   β   βββ SubHeader.astro
β   β   βββ SubLayout.astro
β   βββ components  
β   β   βββ Button.astro.
β   β   βββ Card.astro
β   β   βββ Gotop.astro
β   β   βββ MoNavigation.astro
β   β   βββ Navigation.astro
β   β   βββ PagingNavigation.astro
β   βββ css         
β   β   βββ ui.css 
β   βββ scss        
β   β   βββ bass.
β   β   β   βββ  "base/reset.scss";
β   β   β   βββ  "base/variables.scss";
β   β   βββ utility
β   β   β   βββ  "utility/function.scss"; 
β   β   β   βββ  "utility/mixin.scss"; 
β   β   βββ vandors 
β   β   β   βββ  "vandors/animate.scss";  
β   β   β   βββ  "vandors/swiper.scss"; 
β   β   βββ components 
β   β   β   βββ  "components/card.scss";  
β   β   β   βββ  "components/button.scss"; 
β   β   β   βββ  "components/form.scss";  
β   β   β   βββ  "components/popup.scss"; 
β   β   βββ layout 
β   β   β   βββ  "layout/baseLayout.scss";  
β   β   β   βββ  "layout/common.scss"; 
β   β   β   βββ  "layout/header.scss";  
β   β   β   βββ  "layout/footer.scss"; 
β   β   βββ pages
β   β   β   βββ  "pages/main.scss"; 
β   βββ img
β   βββ font
β   βββ js 
```

## π§ terminal command

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

