## LightCSS Reset v0.3

LightCSS Reset is a CSS Reset solution for theme authors.

## How to use it

If you use Normalize.css in your project, I recommend you edit reset-main.scss like this:

	@import "normalize.scss";
	@import "reset-common.scss";
	@import "reset-custom.scss";

If you use CSS Reset(e.g Eric Meyer's CSS Reset), just edit reset-main.scss like this:

	@import "reset-basic.scss";
	@import "reset-common.scss";
	@import "reset-custom.scss";

If you use this for a WordPress theme, don't forget to include WordPress reset file at last: 

	@import "reset-wordpress.scss";

If you don't use scss preprocessor, just copy the contents in `css/reset-main.css` to your own style.css.

## -1

LightCSS Reset is a project by [Sivan](http://lightcss.com/).