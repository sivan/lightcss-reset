# LightCSS Reset v2.0

LightCSS Reset is a simple & scalable CSS Reset for SCSS users.

* Source: [https://github.com/sivan/lightcss-reset](https://github.com/sivan/lightcss-reset)
* Twitter: [@SivanSun](http://twitter.com/SivanSun)
* Weibo: [@Sivan](http://weibo.com/sivan)

## Features

* Simple(3KB) but scalable(easy use with components and modules) AND very easy to use, you can modify your own version by only three steps;
* Work with [normalize.css](http://necolas.github.com/normalize.css/) or [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/);
* HTML5 ready. Use the new elements with confidence;
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+);
* Includes useful CSS helpers;
* Includes a optional reset for *WordPress* theme authors;
* Also include a simple CSS version.

## Quick start

There are only three steps to modify LightCSS Reset in your project.
Now just copy `_base` directory to your *SCSS* directory and follow `_base/reset.scss` to use it.

### 1. Choose a basic reset

With LightCSS Reset, you can use *normalize.css* or *Eric Meyer's CSS Reset*.

```scss
@import "libs/_normalize";
```

If you like *normalize.css* and need to support legacy browsers(IE6), you should use `@import "libs/_normalize-legacy";` instead.

### 2. Modify your own default style

Config the basic code style you like in `_custom.scss`, if you have additional SCSS files from plugins, just move to `modules` and import them.

#### Example:

\* Include WordPress reset file if your project is a WordPress theme

```scss
@import "libs/_wordpress.scss";
```

### 3. Import in your SCSS

Now just import `_base/reset.scss` in your project(e.g style.scss) and begin to work!

```scss
@import "_base/reset.scss";
```

\* If you don't use SCSS preprocessor, just use the css version from `css/reset.min.css`.*


## Thanks & Resources

* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [normalise.css](http://necolas.github.com/normalize.css/)
* [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/)

##[Changelog](CHANGELOG.md)

-- EOF --
