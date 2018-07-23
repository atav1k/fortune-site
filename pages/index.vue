<template lang="pug">
  article
    section.marL4
      .cols#introduction.padT2.marB3
        .col6
          p.h4 Fortune.css is a friendly CSS variables driven library. It is light, customizable and needs no preprocessor builds.
          p Fortune is well suited to static sites and code pens, and built to support new CSS specs using current style and naming conventions.
          .cols
            ul.col
              li.bold Benefits
              li 🌈 Uses CSS custom properties
              li ⚡️ Light-weight at ~ 10kb gzipped
              li ⛔️ No preprocessor required
            ul.col
              li.bold Features
              li 📐 Supports CSS grids and flexbox
              li 🥊 Non-blocking utility classes
              li 💧 Essential components to start
      .cols#install.marB3
        .gray.col8
          h3 Installation
          p There are a few ways to use Fortune. You can use the CDN, install it from NPM or download it.
          h4 Load from CDN
          .code.pad1.marB2 rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css"
          h4 Install from NPM
          .code.pad1.marB2 npm install fortune-css --save
          h4 Use manually
          a.button.marB1 Download
          p Fortune uses postcss and gulp to generate autoprefixed CSS should you want to build your own components.
          .code.pad1.marB2 npm install
            br
            | gulp build
      .cols#theming.marB3
        .gray.col8
          h3 Theming            
          p Since Fortune is based on CSS proporties, theming is simple. Simply add :root or :scope definitions to your CSS.
            .code.pad1 :root {
              br
              | --font-family: 'Roboto', sans-serif;
              br
              | --headings-font-family: 'Roboto', sans-serif;
              br
              | --container-width: 125em;
              br
              | --column-gutter: var(--space-4); }
      .cols#variables.marB3
        .col8
          h3 Variables
          p Fortune is built with CSS variables throughout. You can redefine any of the variables in the variables.css file to theme Fortune to your style.
          h4 Colors
          .grid.gridCols4.gridSpace1.white.marB2
            .bgRed.pad1 Red
            .bgPink.pad1 Pink
            .bgGrape.pad1 Grape
            .bgViolet.pad1 Violet            
            .bgIndigo.pad1 Indigo
            .bgBlue.pad1 Blue
            .bgCyan.pad1 Cyan
            .bgTeal.pad1 Teal
            .bgGreen.pad1 Green
            .bgLime.pad1 Lime
            .bgYellow.pad1 Yellow
            .bgOrange.pad1 Orange
          h4 Gray            
          .grid.gridCols4.gridSpace1.white.marB2
            .bgWhite.pad1.gray White
            .bgSmoke.pad1.gray Smoke 
            .bgLight.pad1.gray Light 
            .bgSilver.pad1 Silver
            .bgDark.pad1 Dark            
            .bgGray.pad1 Gray
            .bgBlack.pad1 Black     
          h4 Spacing
          .grid.gridCols4.gridGapX3.gridSpaceY1.gray.marB2
            .bgDark.wid1.silver(style="--space-1: var(--gap-1)")  
            div --gap-1
            div 0.0625rem
            div 1px          
            .bgDark.wid1.silver(style="--space-1: var(--gap-2)")  
            div --gap-2
            div 0.125rem
            div 2px
            .bgDark.wid1.silver(style="--space-1: var(--gap-3)")  
            div --gap-3
            div 0.25rem
            div 4px
            .bgDark.wid1.silver(style="--space-1: var(--gap-4)")  
            div --gap-4
            div 0.5rem
            div 8px
            .bgDark.wid1.silver(style="--space-1: var(--gap-5)")  
            div --gap-5
            div 0.75rem
            div 12px          
            .bgSilver.wid1.silver  
            div --space-1
            div 1rem
            div 16px
            .bgSilver.wid2.silver  
            div --space-2
            div 1.5rem
            div 24px
            .bgSilver.wid3.silver  
            div --space-3
            div 2rem
            div 32px
            .bgSilver.wid4.silver  
            div --space-4
            div 3rem
            div 48px
            .bgSilver.wid5.silver  
            div --space-5
            div 4rem
            div 64px
            .bgSilver.wid6.silver  
            div --space-6
            div 5rem
            div 80px
            .bgSilver.wid7.silver  
            div --space-7
            div 6rem
            div 96px
            .bgSilver.wid8.silver  
            div --space-8
            div 8rem
            div 128px
            .bgSilver.wid9.silver  
            div --space-9
            div 10rem
            div 160px
</template>
