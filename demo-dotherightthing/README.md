# kss-node: dotherightthing styleguide demo

This is a demo I put together for reuse on our PHP-based client projects. 

It consists of:

1. `/private` - folder of any name which should exist anywhere **outside of** your project's web root
1. `/private/styleguide/template/generated` - empty folder
1. `/private/styleguide/template/template` - kss-node templating, and a custom PHP importer which acts as a bridge between the KSS templates and `/public/styleguide/demo.php`
1. `/private/styleguide/update` - contains an Automator .app for easy regeneration of style guides on OS X
1. `/private/styleguide/user` - XML config file for the Automator app. **Copy `config-demo.plist` to `config.plist` and customise for your project**.
1. `/public` - folder of any name which can exist anywhere **inside of** your project's web root
1. `/public/demo-images` - demo images used by the `demo-styles`
1. `/public/demo-styles` - demo CSS stylesheets to test that KSS is working
1. `/public/styleguide/demo.php` - webpage which makes the style guide formatting consistent with the rest of your website. **This file needs to be customised to reflect your project file paths**.
 
##Main changes from [https://github.com/hughsk/kss-node](https://github.com/hughsk/kss-node)
 
1. set up is for PHP/LAMP projects
1. `.svn` directories do not prevent styleguide regeneration, github `.svn` directories do not pollute the target project (`kss-node` executable edited)
1. LESS compiling to resolve issues with generated files falling out of sync
1. uses a configurable template for easy integration with the rest of your site
1. added Automator app for on-demand regeneration of files on OS X, this loads `.plist` config files for easy management of project-specific settings
 
##TO DO

This demo has been borrowed/assembled/hacked on-the-fly to create something immediately usable. Therefore I need to get to the following at some point:

1. Tidy up template code
1. Build a FAQ page of common developer errors when authoring KSS comments

As this is also my first outing with Github, I also need to address how these modifications do (or don't) fit in with the previous contributors' work.

##Credits

Thanks to Kyle Neath (kneath) for inventing KSS.

Thanks to Hugh Kennedy (hughsk) for his work on getting kss-node up and running.

As some work time was spent on tweaking this, I should also thank [Chrometoaster](http://www.chrometoaster.com) for their support in this endeavour.