<template lang="pug">
  div.cols.isFull
    scrollactive.col2.bgSmoke.padX3
      ul.sticky.top2
        li
          a(href="/").h3 🔮
        li.marGapB4
          a(href="#introduction").gray.bold.scrollactive-item  Introduction
        li.marGapL4.marGapB4
          a(href="#install").scrollactive-item  Install
        li.marGapL4.marGapB4
          a(href="#theming").scrollactive-item  Theming
        li.marGapL4.marGapB4
          a(href="#variables").scrollactive-item  Variables          
        li.marGapB4
          a.gray.bold.isDisabled Layout
        li.marGapB4
          a.gray.bold.isDisabled Components
        li.marGapB4
          a.gray.bold.isDisabled Utilities
        li.marGapB4
          a(href="https://github.com/atav1k/fortune") Github
    nuxt.col
</template>
