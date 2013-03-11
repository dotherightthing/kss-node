# kss-node: dotherightthing styleguide demo

Boilerplate for reuse on our PHP-based client projects. 

Please read the [instructions](https://github.com/dotherightthing/kss-node/blob/master/demo-dotherightthing/private/styleguide/template/template/public/styleguide.md)
 
##Main changes from [https://github.com/hughsk/kss-node](https://github.com/hughsk/kss-node)
 
1. set up is for PHP/LAMP projects
1. `.svn` directories do not prevent styleguide regeneration, github `.svn` directories do not pollute the target project (`kss-node` executable edited)
1. LESS compiling to resolve issues with generated files falling out of sync
1. uses a configurable template for easy integration with the rest of your site
1. added Automator app for on-demand regeneration of files on OS X, this loads `.plist` config files for easy management of project-specific settings
 
As this is also my first outing with Github, I also need to address how these modifications do (or don't) fit in with the previous contributors' work.

##Credits

Thanks to Kyle Neath (kneath) for inventing KSS.

Thanks to Hugh Kennedy (hughsk) for his work on getting kss-node up and running.

As some work time was spent on tweaking this, I should also thank [Chrometoaster](http://www.chrometoaster.com) for their support in this endeavour.