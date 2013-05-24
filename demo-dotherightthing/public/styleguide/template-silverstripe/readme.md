## Styleguide SilverStripe template

### Setup

1. `StyleguidePage.php`:
	1. Update the value of `$styleguide_folder_path` to point to the project's CSS folder
	1. Copy this file` to `/YOUR_THEME_NAME/code/pages/`
1. `StyleguidePage.ss`:
	1. Copy this file` to `/YOUR_THEME_NAME/templates/Layout/`
1. Log in to the Silverstripe backend and create a page named 'Styleguide':
	1. Navigate to `http://YOUR_WEBSITE/dev/build` so that Silverstripe is aware of the new page type
	1. Create > Page > Go
	1. Click on the page's 'Content' tab
		1. Page name: Styleguide
		1. Navigation label: Styleguide
  1. Click on the page's 'Behaviour' tab
		1. Page type: select 'Styleguide Page'
		1. Deselect 'Show in menus?'
		1. Deselect 'Show in search?'
	1. Click Save and Publish
1. Navigate to `http://YOUR_WEBSITE/?flush=1`
	
Note that jQuery is a requirement, if this is not used in your project, please uncomment this include in styleguide/template/index.htm.

### Usage:

1. Navigate to `http://YOUR_WEBSITE/styleguide`
