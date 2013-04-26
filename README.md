# [LightCSS Reset](http://lightcss.com/projects/reset/)

LightCSS Reset is a simple & adaptable CSS Reset for SCSS users.

* Source: [https://github.com/sivan/lightcss-reset](https://github.com/sivan/lightcss-reset)
* Homepage: [http://lightcss.com/project/reset/](http://lightcss.com/project/reset/)
* Twitter: [@SivanSun](http://twitter.com/SivanSun)
* Weibo: [@Sivan](http://weibo.com/sivan)

## Features

* Simple but adaptable (3kb), modify your own version  by only three steps.
* Work with [Normalize.css](http://necolas.github.com/normalize.css/) or [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/).
* HTML5 ready. Use the new elements with confidence.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+).
* Includes useful CSS helpers .
* Includes a optional reset for  WordPress theme authors.
* Multi-language support.
* Also include a simple CSS version.

## Quick start

There are only three steps to modify LightCSS Reset in your project. Follow `_reset.scss` to catch it.

###Here are two samples:

If you are using Normalize.css in your project, I recommend you edit _reset.scss like this:

	@import "libs/_normalize.scss";
	@import "libs/_common.scss";
	@import "libs/_custom.scss";

Modify your custom style at `_custom.scss` to match your design.

\* If your project is a WordPress theme, don't forget to include WordPress reset file at last: 

	@import "libs/_wordpress.scss";

Ok, that's all. Now just import `_reset.scss` in your project(e.g style.scss) and enjoy your code!

	@import "_reset.scss";

*If you don't use scss preprocessor, just copy the contents in `css/_reset.css` to your own style.css.*

## To-Do
* Add a optional typography style.
* Add Chinese typography style.

## Thanks & Resources

This project is based on the work of the following people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalise.css](http://necolas.github.com/normalize.css/)
- [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/)