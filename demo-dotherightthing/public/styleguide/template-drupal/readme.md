## Styleguide Drupal template

### Setup

1. `page--styleguide.tpl.php`:
	1. Update the value of `$styleguide_folder_path` to point to the project's Styleguide folder
	1. Replace the two HTML comments with your project's dynamic includes
	1. Copy this file` to `/sites/all/themes/YOUR_THEME_NAME/templates/page_types/`
	1. Log in to the Drupal backend > Clear cache

Note that jQuery is a requirement, if this is not used in your project, please uncomment this include in styleguide/template/index.htm.

### Usage

1. Navigate to `http://YOUR_WEBSITE/styleguide`
