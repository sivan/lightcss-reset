## LightCSS Reset v0.4

LightCSS Reset is a simple CSS Reset solution for building fast, adaptable web sites.

* Source: [https://github.com/sivan/lightcss-reset](https://github.com/sivan/lightcss-reset)
* Homepage: [http://lightcss.com/project/reset/](http://lightcss.com/project/reset/)
* Weibo: [@Sivan](http://weibo.com/sivan)

## Features

* Simple but adaptable (3kb), only three steps to modify your custom version.
* Support both [Normalize.css](http://necolas.github.com/normalize.css/) and [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/).
* Made for SCSS users, also have a pure CSS version.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+).
* Includes useful CSS helpers from `HTML5 Boilerplate`.
* Includes a WordPress reset for theme authors.
* Multi-language support.
* Includes a Chinese typography style(not yet).

## Quick start

There are only three steps to modify LightCSS Reset in your project. Follow `reset.scss` to catch it.

###Here are two samples:

If you use Normalize.css in your project, I recommend you edit reset.scss like this:

	@import "libs/_normalize.scss";
	@import "libs/_common.scss";
	@import "libs/_custom.scss";

If you prefer to use CSS Reset(e.g Eric Meyer's CSS Reset), just edit reset.scss like this:

	@import "libs/_basic.scss";
	@import "libs/_common.scss";
	@import "libs/_custom.scss";

If you use this for a WordPress theme, don't forget to include WordPress reset file at last: 

	@import "libs/_wordpress.scss";

Then just import `reset.scss` in your project(e.g style.scss) and enjoy your code!

	@import "reset.scss";

*If you don't use scss preprocessor, just copy the contents in `css/reset.css` to your own style.css.*

## Thanks & Resources

This project is based on the work of the following fine people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalise.css](http://necolas.github.com/normalize.css/)