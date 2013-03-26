# KSS Node/PHP boilerplate 

Boilerplate for reuse on [Chrometoaster](http://www.chrometoaster.com)'s PHP-based client projects. 

*Last updated 26.03.2013*

##Credits

* Thanks to Kyle Neath ([kneath](https://github.com/kneath/)) for inventing KSS.
* Thanks to Hugh Kennedy ([hughsk](https://github.com/hughsk/)) for his work on getting kss-node up and running.
* Thanks to my employer [Chrometoaster](http://www.chrometoaster.com), for allowing me time to work on this boilerplate, 
and their interest in new technologies such as KSS.

## What is KSS?

KSS is an acronym which stands for 'Knyle Style Sheets'. 'Knyle' is a combination of 'Kyle' + 'Neath'. 
Kyle Neath is the Design Director at Github. 
Read [Kyle's introduction to Knyle Style Sheets](http://warpspire.com/posts/kss/).

KSS involves adding structured comments to CSS files to generate a **Living Styleguide**. 
These comments create an easily navigable index, 
live HTML/CSS demos which demonstrate the available style variants, 
and a place to store any notes which would be useful to the client or fellow developers.

KSS Node was created by Kyle Neath ([kneath](https://github.com/kneath/)) 
and is maintained on [Github](https://github.com/kneath/kss).

## What is KSS Node?

KSS Node is a NodeJS implementation of KSS. 

KSS Node was created by Hugh Kennedy ([hughsk](https://github.com/hughsk/)) 
and is maintained in [Github](https://github.com/hughsk/kss-node).

## What's different in this fork?

This fork has been tweaked to suit our workflow at [Chrometoaster](http://www.chrometoaster.com), and includes:

* Some minor bug fixes which allow Subversion to be used for version control, rather than Git
* A bundled OS X app for regenerating styleguides without using the command line, 
plus XML configuration files to allow easy switching between projects
* A boilerplate for integration into PHP-based CMSes (Content Management Systems)
* A front-end layout which maximises the available screen real estate
* Use of vanilla CSS rather than LESS

This fork was created by Dan Smith ([dotherightthing](https://github.com/dotherightthing/)) 
and is maintained in [Github](https://github.com/dotherightthing/kss-node).


## Benefits of using KSS

### Clarity:

* provides an overview of complex stylesheets suitable for clients and other developers
* provides a reference for developers returning to a project after a long break

### Efficiency:

* visualising stylesheets allows developers to see at a glance whether a style already exists,
before authoring new styles
* exposing modifiers encourages development of reusable components that can be skinned
* reused and resuable code = less code to download, less code to maintain
* automatic styleguide generation is many times more efficient than manually building a PDF or HTML styleguide, 
and being responsible for its maintenance

### Completeness:

* visual documention provides an easy way to check that there are no bugs, oversights, or redundant rules in the CSS

### Integration:

* HTML demos assist back-end developers and other front-end developers in troubleshooting integration issues, 
and identifying what is in 'the box of bits'

## Setup and usage instructions for developers 
 
### A) Getting started

When first using KSS-Node, it's necessary to ensure that some technologies are installed on your computer.

#### Step 1: Install a LAMP stack

[LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle)) is an acronym which stands for 
'Linux, Apache, MySQL, PHP' - a popular open-source combination for web development. 
Some common LAMP stacks are 
[WAMP](http://www.wampserver.com) (Windows, Apache, MySQL, PHP) and 
[MAMP](http://www.mamp.info) (Mac, Apache, MySQL, PHP).

While KSS Node runs on [node.js](http://nodejs.org), this fork is designed for use with PHP-based sites, 
such as those running on 
[Drupal](http://drupal.org), 
[Silverstripe](http://www.silverstripe.com), or 
[Wordpress](http://wordpress.org).

The intention is that the KSS Styleguide becomes a 'living' part of the site, 
integrated into the stylesheets and the CMS front-end, so that the Styleguide stays up to date 
as your site changes and grows.

As your site should already be running on a PHP CMS, installation of a LAMP stack is not covered in this documentation.

#### Step 2: Install Node

node.js aka 'Node' is a platform built on Chrome's JavaScript runtime, for easily building fast, 
scalable network applications, that run in the backend, outside a browser. 

Node installers are available for Windows, Mac, Linux and SunOS.

[Download and install Node](http://nodejs.org/download/).

#### Step 3: Install a Git client

KSS-node is hosted on [Github](https://github.com/). 
Originally developed to simplify sharing code, GitHub has grown into the largest code host in the world.
At the heart of GitHub is an open source version control system 
(VCS) called [Git](http://git-scm.com/book/en/Getting-Started-Git-Basics).

It's important that you stay up-to-date with any changes to our fork of the KSS-node code repository. 

The easiest way to do this is to install a Git client.

Download and install the GitHub client for [Mac](http://mac.github.com/) or [Windows](http://windows.github.com/).

#### Step 4: Download our code

1. Launch the Github application
1. If using Windows, click 'tools' > 'options' to see where your 'default storage directory' is, or to change this
1. Sign in to Github (create an account if haven't done so already). 
1. Clone our fork of kss-node by clicking the 'Clone in Windows' or 'Clone in Mac' button, as appropriate.
1. `dotherightthing/kss-node` will be added to your local repositories
1. Close the Github application

#### Step 5: Install the KSS binary

1. Open Terminal (OS X) or a Command Prompt (Windows: `Start > Run > `cmd` > Enter`)
1. Type `sudo npm install -g kss` (OS X) or `npm install -g kss` (OS X) and press `Enter`
1. This will tell NPM (the Node Package Manager, installed with NodeJS) to install the KSS binary
1. Leave Terminal (OS X) or the Command Prompt (Windows) open for Step 6

#### Step 6: Install the KSS-Node dependencies

1. Navigate to your local kss-node directory using Terminal or a Command Prompt:
1. Type `cd` ('Change Directory') followed by a space and then the path to the location you 
downloaded our code to, eg `cd /Users/Dan/github/kss-node/` (OS X) or `cd ﻿C:\Files\Websites\GitHub\kss-node` (Windows)
1. Type `sudo npm install -g` (OS X) or `npm install -g` (Windows) and press `Enter`
`. This will tell NPM (the Node Package Manager, installed with NodeJS) to install the kss-node dependencies. The 
`-g` ('global') flag tells OS X to copy the files to `/usr/local/lib/node_modules/kss/

### B) Per-project set-up

Please ensure that you have completed (A) Getting started, before starting your project set-up.

When setting up a new website, or adding a styleguide to an existing site, there are a few 
set-up tasks that you need to perform.

#### Step 1: Set up the Styleguide structure

1. Move your site stylesheets to a separate folder if they are not already in one, eg: `/path/to/resources/styles`
1. Create a 'styleguide' folder within your project. 
Typically this would be a sibling of the folder which contains your site stylesheets, 
eg: `/path/to/resources/styleguide`
1. Create a dynamic project template page, that will pull in the external styleguide 'template'. 
This file should be similar to your existing site templates, in that it should include all project assets such as 
CSS, JS etc, and use the same structural markup. 
A boilerplate file is available at [https://github.com/dotherightthing/kss-node/blob/master/demo-dotherightthing/public/styleguide/demo.php](https://github.com/dotherightthing/kss-node/blob/master/demo-dotherightthing/public/styleguide/demo.php).

TODO: I'll commit separate boilerplate files to this project as I find time.

#### Step 2: Create a configuration file

I've created a small Automator application (OS X only) which handles population of the Styleguide folder, 
including regeneration of the styleguide.

If you're using Windows (as some of our contractors are), 
you'll need to ask someone on a Mac to complete this step for you.

TODO: create a .bat (batch) file to allow project setup via Windows.

The first time you use the application with any project, you will need to create a configuration file:

1. Create a configuration file for the application by making a copy of the `config-demo.plist` file,  
renaming this so that you remember which project it is for (as you could end up having different configuration 
files for different projects). Configuration files live in 
`/path/to/kss-node/demo-dotherightthing/private/styleguide/user/`.
1. Open up your configuration file in a text editor. The file uses an XML structure. 
Update the various `<string>` values to suit your project.
1. Save and close the configuration file

### C) Using the generator to create or recreate a Styleguide

#### Step 1: Run the generator

1. Run `/path/to/kss-node/demo-dotherightthing/private/styleguide/update/regenerate-styleguide.app`
1. The application will open the directory containing your configuration files
1. Double-click a configuration file to use those options
1. When the generator has finished running, you will have the option to close the application 
or open the styleguide in a web browser

TODO: add steps to install aLaunch

#### Step 2: View the generated styleguide

You may now view the documentation via your custom template, eg `/demo-dotherightthing/html/styleguide.php`.

#### Step 3: Debugging common problems

1. Some modifiers are not output in the styleguide
  1. Check that the modifier is followed by a description: `.mymodifier - my description`
  1. Remove any empty lines from the KSS code
1. Styleguide is generated but the styleguide page is blank
  1. Navigate to the styleguide homepage then select the desired page from the dropdown, 
this will eliminate the possibility that the desired index comment has been removed from the stylesheets
  1. Remove any empty lines from the end of the stylesheet files
 
### D) Authoring KSS

#### Create a Styleguide section

Sections are created with the text: `Styleguide N`, where 'N' is the number of the section.

This creates an entry in the topmost dropdown menu in your styleguide.

If your site can dynamically merge stylesheets, it's a good idea to have a separate stylesheet for each section of
the Styleguide. This makes it easy to find styles when viewing a Styleguide.

For example:

* typography.css = `Styleguide 1`
* scaffolding.css = `Styleguide 2`
* forms.css = `Styleguide 3`

The example code below demonstrates the code that should appear at the top of your stylesheet. 

Please note the following:

* multiline comment syntax is used
* the text after the opening comment will appear in the menu
* we include the name of the source file for easy debugging
* there is a short description
* there is no Markup block (we'll see this later)
* we finish with the TOC (Table of Contents) index, with no trailing period

```css
/*
Typography

src: typography.css

Text styles

Styleguide  1
*/ 
```

#### Create a Styleguide sub-section

TO FINISH

Now let's start documenting the individual components. Here's an example, please pay special attention to the use of line breaks and new lines.

```css
/* <- start KSS comment block
Faux button <- title for generated docs

A fake `button`. <- description for generated docs

Markup: 
<a href="#" class="button {$modifiers}">Link</a> <- this markup may span multiple lines and is rendered into the stylesguide to demonstrate the style. A copy will be generated for each modifier, plus one for the 'default' state.

.hover - Hover state (color change) <- this is a 'modifier' and its description, note that KSS can not demonstrate pseudo classes such as :hover
.disabled - Dims the button to indicate it cannot be used. <- this is another 'modifier' and it's description

Styleguide 1.1. <- index for generated TOC, note that 0.0 is reserved for the 'About this guide' page
end KSS comment block -> */ 

.button {
  color: red;
  padding: 10px;
  border: 1px solid;
}
.button:hover,
.button.hover {
 color: green;
}
.button.disabled {
  color: grey;
  cursor: text;
}
```
		
Here's another example:		

```css
/*
Box

A square container.

Markup: 
<div class="box {$modifiers}">
	<span>Box</span> <- note that this span is indented with two spaces rather than one 'tab'
</div>

.phat - Thick border		

Styleguide 1.2.0.
*/

.box {
	width: 100px;
	height: 100px;
	border: 1px solid;
}
.box.phat {
	border-width: 20px;
}
.foo { /* <- this class won't appear in the KSS docs because the modifier isn't listed above */
	border: 5px solid red;
}
.foo.bar { /* <- this class won't appear in the KSS docs because the modifier isn't listed above */
	border-color: green;
}
```

And another:	

```css
/*
Hidden <- This demo will generate a heading in the KSS docs but no examples as there is no sample markup to 'skin'

Hide anything with this utility class.

.shown - a variation

Styleguide 1.3.0.
*/
.hidden { /* <- this class won't appear in the KSS docs because the modifier isn't listed above */
	border: 5px solid blue;
}
.hidden.shown {
	border-color: yellow;
}
```		

Remember that munging/minification will strip all comments, so don't hold back on documenting your code (note that you only need to KSS-comment rules which would be meaningful in a styleguide). 

It's also ok if classes listed in the Modifiers section are actually located in another part of the stylesheet.

#### Creating placeholder styles

Placeholder styles can easily be created as follows. This allows styles to be filled in gradually, while understanding what is left to do.  

Note that modifiers cannot be combined, in this scenario.

```css
/*
Buttons (TODO)

Links, buttons etc

Markup:
<div class="styleguide-placeholder">
  <img src="/sites/all/themes/mysite/images/ui/placeholders/{$modifiers}.png" alt="{$modifiers}" title="{$modifiers}" />
  <div class="styleguide-overlay"></div>
</div>

.button-green - Green button
.button-purple - Purple button

Styleguide 9.9.
*/
```		

#### Helper styles that are available

There are a handful of `styleguide-` name-spaced classes available for use when authoring your styleguide:

1. `.styleguide-reveal` - adds a light grey background color and an 8px bottom margin, can be nested
1. `.styleguide-reveal-bottomless` - as above, without the bottom margin
1. `.styleguide-reveal-light` - alternative with a lighter background colour
1. `.styleguide-block-20` - forces display block and a height of 20 pixels
1. `.styleguide-block-20` - forces display block and a height of 50 pixels
1. `.styleguide-clear` - clears preceding floats
1. `.styleguide-nofloat` - disables floating on the element
1. `.styleguide-hidden` - hides the element



