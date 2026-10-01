## Project architecture

- Keep shared L&P navigation, footer, and cursor companion in `SiteChrome`; all public pages inherit it from the root route for consistency.
- Keep demo catalogue entries in `src/lib/products.ts`; the future data source can replace one structured collection without rewriting cards.
