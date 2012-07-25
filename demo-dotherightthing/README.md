# kss-node: dotherightthing styleguide demo

This is a demo I put together for reuse on our PHP-based client projects. 

It consists of:

1. styleguide - the directory to copy to your projects 'resources'/'assets'/'theme' folder
1. styleguide/demo - 'styleguide.php' is a configurable file which imports the KSS documentation, which is generated from the 'resources/css' folder; the 'overview' page contains setup instructions for Windows and OS X
1. styleguide/generated - this is the folder which the KSS documentation is generated into; the child 'public' folder is never referenced, but I haven't hacked this script to stop this being populated yet
1. styleguide/template - 'importer.php' uses placeholders to pass styleguide.php's config options to the KSS template 'index.htm'
 
##Main changes from [https://github.com/hughsk/kss-node](https://github.com/hughsk/kss-node)
 
1. set up is for PHP/LAMP projects
1. `.svn` directories do not prevent styleguide regeneration
1. uses a configurable template for easy integration with the rest of your site
 
It is important to note that this demo still uses the command-line for styleguide regeneration.
 
##TO DO

This demo has been borrowed/assembled/hacked on-the-fly to create something immediately usable. As a result the files are currently fairly messy.

Therefore I need to get to the following at some point:

1. Tidy up template code
1. Tidy up stylesheets
1. Check that no config options are redundant
1. Edit kss-node to prevent the contents of the 'public' directory from being cloned to the 'generated' folder
1. Build a FAQ page of common developer errors when authoring KSS comments

As this is also my first outing with Github, I also need to address how these modifications do (or don't) fit in with the previous contributors' work.

##Credits

Thanks to Kyle Neath (kneath) for inventing KSS.

Thanks to Hugh Kennedy (hughsk) for his work on getting kss-node up and running.

As some work time was spent on tweaking this, I should also thank [Chrometoaster](http://www.chrometoaster.com) for their support in this endeavour.