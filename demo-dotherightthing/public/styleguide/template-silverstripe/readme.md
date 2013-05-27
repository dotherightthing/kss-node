## Styleguide SilverStripe template

### Setup

1. `StyleguidePage.php`:
	1. Copy this file` to `/YOUR_THEME_NAME/code/pages/`
1. `StyleguidePage.ss`:
	1. Copy this file` to `/YOUR_THEME_NAME/templates/Layout/`
	1. Edit this page to better match `/YOUR_THEME_NAME/templates/Layout/Page.ss`
1. `/PROJECT_NAME/_config.php`
	1. Add this line: `Styleguide::$directory = '/resources/styleguide';`
	1. Update the line you just added if your directory path is different
1. Log in to the Silverstripe backend and create a page named 'Styleguide':
	1. Navigate to `http://YOUR_WEBSITE/dev/build` so that Silverstripe is aware of the new page type
	1. Create > Page > Go
	1. Click on the page's 'Content' tab
		1. Click on the 'Main' sub tab
			1. Page name: Styleguide
			1. Navigation label: Styleguide
		1. Click on the 'Metadata' sub tab 
			1. URL: match this to the `project_webroot_styleguide_path` setting in your `plist` config file, eg 'styleguide'
  1. Click on the page's 'Behaviour' tab
		1. Page type: select 'Styleguide Page'
		1. Deselect 'Show in menus?'
		1. Deselect 'Show in search?'
		1. If there is a 'PageClass' field, add a custom class if desired, eg `t-styleguide` or `styleguide-page`
	1. Click Save and Publish
1. Navigate to `http://YOUR_WEBSITE/?flush=1`
	
Note that jQuery is a requirement, if this is not used in your project, please uncomment this include in styleguide/template/index.htm.

### Usage:

1. Navigate to `http://YOUR_WEBSITE/styleguide`
