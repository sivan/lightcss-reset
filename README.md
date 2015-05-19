# LightCSS Reset

LightCSS Reset is a simple & adaptable CSS Reset for SCSS users.

* Source: [https://github.com/sivan/lightcss-reset](https://github.com/sivan/lightcss-reset)
* Homepage: [http://lightcss.com/project/reset/](http://lightcss.com/project/reset/)
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
Now just copy `_reset` directory to your *SCSS* directory and follow `_reset/reset.scss` to use it.

### 1. Choose a basic reset

With LightCSS Reset, you can use *normalize.css* or *Eric Meyer's CSS Reset*.

```scsss
@import "libs/_normalize";
```

If you like *normalize.css* and need to support legacy browsers(IE6), you should use `@import "libs/_normalize-legacy";` instead.

### 2. Modify your own default style

You can config the basic code style you like, see more in `_custom.scss`.

\* If you have additional scss files from plugins, just move to `modules` and import them as a module. For example:

Include wordPress reset file if your project is a WordPress theme

```scss
@import "libs/_wordpress.scss";
```

Ok, that's all. Now just import `_reset.scss` in your project(e.g style.scss) and enjoy your code!

	@import "_reset.scss";

*If you don't use scss preprocessor, just copy the contents in `css/_reset.css` to your own style.css.*


## Thanks & Resources

This project is based on the work of the following people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalise.css](http://necolas.github.com/normalize.css/)
- [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/)
