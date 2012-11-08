# kss-node: dotherightthing styleguide demo

This is a demo I put together for reuse on our PHP-based client projects. 

It consists of:

1. /private - folder of any name which should exist anywhere *outside of* your project's web root
  * /styleguide/template/generated - empty folder
  * /styleguide/template/template - kss-node templating, and a custom PHP importer which acts as a bridge between the KSS templates and /styleguide/demo.php
  * /styleguide/update - contains an Automator .app for easy regeneration of style guides on OS X
  * /styleguide/user - config file for the Automator app - copy config-demo.plist to config.plist and customise for your project
1. /public - folder of any name which can exist anywhere *inside of* your project's webroot
  * /demo-images - demo images used by the demo-styles
  * /demo-styles - demo CSS stylesheets to test that KSS is working
  * /styleguide/demo.php - PHP page which makes the style guide formatting consistent with the rest of your website. This file needs to be customised to reflect your project file paths.
 
##Main changes from [https://github.com/hughsk/kss-node](https://github.com/hughsk/kss-node)
 
1. set up is for PHP/LAMP projects
1. `.svn` directories do not prevent styleguide regeneration
1. uses a configurable template for easy integration with the rest of your site
1. added Automator app to regenerate files on OS X
 
##TO DO

This demo has been borrowed/assembled/hacked on-the-fly to create something immediately usable. As a result the files are currently fairly messy.

Therefore I need to get to the following at some point:

1. Tidy up template code
1. Check that no config options are redundant
1. Edit kss-node to prevent the contents of the 'public' directory from being cloned to the 'generated' folder
1. Build a FAQ page of common developer errors when authoring KSS comments

As this is also my first outing with Github, I also need to address how these modifications do (or don't) fit in with the previous contributors' work.

##Credits

Thanks to Kyle Neath (kneath) for inventing KSS.

Thanks to Hugh Kennedy (hughsk) for his work on getting kss-node up and running.

As some work time was spent on tweaking this, I should also thank [Chrometoaster](http://www.chrometoaster.com) for their support in this endeavour.