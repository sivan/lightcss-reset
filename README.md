## LightCSS Reset v0.3

LightCSS Reset is a CSS Reset solution based on SCSS.

## How to use it

If you use Normalize.css in your project, I recommend you edit reset.scss like this:

	@import "modules/normalize.scss";
	@import "modules/reset-common.scss";
	@import "modules/reset-custom.scss";

If you use CSS Reset(e.g Eric Meyer's CSS Reset), just edit reset.scss like this:

	@import "modules/reset-basic.scss";
	@import "modules/reset-common.scss";
	@import "modules/reset-custom.scss";

If you use this for a WordPress theme, don't forget to include WordPress reset file at last: 

	@import "modules/reset-wordpress.scss";

If you don't use scss preprocessor, just copy the contents in `css/reset.css` to your own style.css.

## -1

LightCSS Reset is a project by [Sivan](http://lightcss.com/).