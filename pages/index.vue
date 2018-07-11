<template lang="pug">
  article
    section.container
      .cols#top.pad-t-5
        .col
          .h1.hdg-md Fortune
          p.italic A friendly CSS properties library
        .col
          p.bold Benefits
          ul
            li 🌈 Customizable CSS variables
            li ⚡️ Light-weight at ~ 10kb gzipped
            li ⛔️ No preprocessor required
        .col
          p.bold Features
          ul
            li 📐 Supports CSS grids and flexbox
            li 🥊 Non-blocking utility classes
            li 💧 Essential components to start 
      .cols
        .col-8
          h3 Installation
          p To load Fortune via CDN, add this to your head:
            .code rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css"
          p To theme your site, add :root or :scope to your CSS:
            .code :root {
              br 
              | --font-family: 'Roboto', sans-serif;
              br
              | --headings-font-family: 'Roboto', sans-serif;
              br
              | --container-width: 125em;
              br
              | --column-gutter: var(--space-4); }          
      .cols#spacing
        .col
          h1 Spacing
      .cols
        .col.mar-b-4
          h3 column.css
          h5 Classes
          .grid.grid-cols-2.grid-space-y-1.grid-gap-x-4
            .code .cols
            span Creates a row of columns
            .code.bord-l-2.border-purple .cols .cols-flush
            span Sets columns without gutter
            .code .col, .col-*
            span Sets flex or fixed width column
            .code .offset-*
            span Offest column by fixed number
            .code .order-*
            span Set order of column
            .code .multi-col-*
            span Use multi-col css
          h5.mar-t-2 CSS Properties
          .grid.grid-cols-2.grid-space-y-1.grid-gap-x-4
            .code --column-gutter
            span Defines gutter space, defaults to
            .code --columns-width
            span Defines column container width, defaults to
        .col.mar-b-4
          .sticky.top-5
            h5.bold Example
            .cols.mar-y-1
              .col-9
                .bg-lightgray .col-9
              .col-3
                .bg-lightgray .col-3
            .cols.mar-y-1
              .col
                .bg-lightgray .col
              .col
                .bg-lightgray .col
            .cols.mar-y-1
              .col-3
                .bg-lightgray .col-3
              .col-9
                .bg-lightgray .col-9
            .cols.cols-flush.mar-y-1
              .col
                .bg-lightgray .cols-flush .col
              .col
                .bg-lightgray .cols-flush .col
      .cols#components
        .col
          h1 Components
      .cols
        .col.mar-b-4
          h3 grid.css
          h5 Classes
          .grid.grid-cols-2.grid-space-y-1
            .code .cols
            span Creates a row of columns
            .code .cols .cols-flush
            span Sets columns without gutter
            .code .col, .col-*
            span Sets flex or fixed width column
            .code .offset-*
            span Offest column by fixed number
            .code .order-*
            span Set order of column
            .code .multi-col-*
            span Use multi-col css
          h5.mar-t-2 CSS Properties
          .grid.grid-cols-2.grid-space-y-1
            .code --column-gutter
            span Defines gutter space, defaults to
            .code --columns-width
            span Defines column container width, defaults to
        .col.mar-b-4
          .sticky.top-2
            h4 Demo
            .cols.mar-y-1
              .col-9
                .bg-lightgray .col-9
              .col-3
                .bg-lightgray .col-3
            .cols.mar-y-1
              .col
                .bg-lightgray .col
              .col
                .bg-lightgray .col
            .cols.mar-y-1
              .col-3
                .bg-lightgray .col-3
              .col-9
                .bg-lightgray .col-9
            .cols.cols-flush.mar-y-1
              .col
                .bg-lightgray .cols-flush .col
              .col
                .bg-lightgray .cols-flush .col
      .cols#utilities
        .col
          h1 Utilties
      .cols
        .col.mar-b-4
          h3 position.css
          h5 Classes
          .grid.grid-cols-2.grid-space-y-1
            .code .cols
            span Creates a row of columns
            .code .cols .cols-flush
            span Sets columns without gutter
            .code .col, .col-*
            span Sets flex or fixed width column
            .code .offset-*
            span Offest column by fixed number
            .code .order-*
            span Set order of column
            .code .multi-col-*
            span Use multi-col css
          h5.mar-t-2 CSS Properties
          .grid.grid-cols-2.grid-space-y-1
            .code --column-gutter
            span Defines gutter space, defaults to
            .code --columns-width
            span Defines column container width, defaults to
        .col.mar-b-4
          .sticky.top-2
            h4 Demo
            .cols.mar-y-1
              .col-9
                .bg-lightgray .col-9
              .col-3
                .bg-lightgray .col-3
            .cols.mar-y-1
              .col
                .bg-lightgray .col
              .col
                .bg-lightgray .col
            .cols.mar-y-1
              .col-3
                .bg-lightgray .col-3
              .col-9
                .bg-lightgray .col-9
            .cols.cols-flush.mar-y-1
              .col
                .bg-lightgray .cols-flush .col
              .col
                .bg-lightgray .cols-flush .col
</template>
