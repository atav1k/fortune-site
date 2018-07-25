<template lang="pug">
  div.cols.isFull
    scrollactive.col2.bgSmoke.padX3
      ul.sticky.top2
        li
          a(href="/").h3 🔮
        li.marGapB4
          a(href="/#introduction").gray.bold  Introduction
        li.marGapL4.marGapB4
          a(href="/#install")  Install
        li.marGapL4.marGapB4
          a(href="/#theming")  Theming
        li.marGapL4.marGapB4
          a(href="/#variables")  Variables
        li.marGapB4
          a(href="/layout").gray.bold Layout
        li.marGapB4
          a.gray.bold.isDisabled Components
        li.marGapB4
          a.gray.bold.isDisabled Utilities
        li.marGapB4
          a(href="https://github.com/atav1k/fortune") Github
    nuxt.col
</template>
