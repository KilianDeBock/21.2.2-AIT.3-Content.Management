const mix = require('laravel-mix');

mix
    .js('./src/scripts/index.js', 'app.js')
    .sass('./src/styles/main.scss', 'app.css')
    .setPublicPath('./web/dist')
    .version();

// mix.browserSync({ proxy: "https://pgm-website.ddev.site", https: true });
mix.browserSync("https://pgm-website.ddev.site");