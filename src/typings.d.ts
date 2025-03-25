declare module 'slick-carousel';
declare module 'jquery' {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}