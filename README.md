## LightCSS Reset v0.2

LightCSS Reset is a CSS Reset solution for basic theme authors.

## How to use it

If you use Normalize.css in your project, I recommend you edit style.scss like this:

	@import "normalize.scss";
	@import "reset-normalize.scss";
	@import "reset-common.scss";
	@import "reset-custom.scss";

If you use CSS Reset(e.g Eric Meyer's CSS Reset), just edit style.scss like this:

	@import "reset-basic.scss";
	@import "reset-common.scss";
	@import "reset-custom.scss";

If you use this for a WordPress Theme, don't forget include reset for WordPress: 

	@import "normalize.scss";
	@import "reset-normalize.scss";
	@import "reset-wordpress.scss";
	@import "reset-common.scss";
	@import "reset-custom.scss";

If you don't use scss preprocessor, just copy the contents from "**/css**" directory to your own style.css.

## Acknowledgements

LightCSS Reset is a project by [Sivan](http://lightcss.com/).