<template lang="pug">
  article
    section.container
      .bottom-1.right-2.fixed
        .h3 🔮
      .cols
        .col
          h3.hdg-md Fortune, a friendly CSS properties library
      .cols
        .col
          h1 Utilities
      .cols
        .col.mar-b-4
          h3 Columns
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
        .col
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
