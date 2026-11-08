// Tailwind build config for the SAM website.
// Tailwind scans these files for class names (e.g. "mt-6", "text-center")
// and only includes the classes it finds in css/tailwind.css.
//
// After adding or changing Tailwind classes, run:   npm run build:css
// To rebuild automatically while you edit, run:    npm run watch:css
module.exports = {
  content: [
    './*.html',
    './scripts/!(jquery.min).js',
  ],
};
