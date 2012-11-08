# kss-node: dotherightthing styleguide demo

This is a demo I put together for reuse on our PHP-based client projects. 

It consists of:

1. styleguide/public - folder which can exist anywhere in your project
  * /index.php - file which makes the style guide formatting consistent with the rest of your website 
  * /source - empty folder which the style guide is generated into via kss-node
1. styleguide/private - folder which should exist outside of your project's web root
  * /template - 'importer.php' uses placeholders to pass styleguide.php's config options to the KSS template 'index.htm'
  * /template/public - assets used by the KSS template
  * /update - contains an Automator .app for easy regeneration of style guides on OS X
  * /user - contains config-demo.plist which should be copied to config.plist and customized for your project
 
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