*Last updated 26.03.2013*

## What is KSS?

KSS involves adding structured comments to CSS files to generate a **Living Styleguide**. These comments create an index, 
HTML snippets which are transformed into live demos which demonstrate any style variants, 
and a place to make any notes which would be useful to the client or fellow developers.

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
 
### Getting started

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

[Download the Node installer](http://nodejs.org/download/).

#### Step 3: Install a Git client

KSS-node is hosted on [Github](https://github.com/). 
Originally developed to simplify sharing code, GitHub has grown into the largest code host in the world.
At the heart of GitHub is an open source version control system 
(VCS) called [Git](http://git-scm.com/book/en/Getting-Started-Git-Basics).

It's important that you stay up-to-date with any changes to the KSS-node code repository. 

The easiest way to do this is to install a Git client.

Install the GitHub client (GUI) for [Mac](http://mac.github.com/) or [Windows](http://windows.github.com/).

#### Step 4: Install the KSS binary

1. Install the KSS ([Knyle Style Sheets, ala Kyle Neath, Design Director at Github](http://warpspire.com/posts/kss/)) binary

#### Step 5: Install the KSS-Node dependencies

1. Install the kss-node dependencies

TO FINISH

##### OS X

1. Launch the Githib application
1. Sign in to Github (create an account if haven't done so already). 
1. Clone our fork of [kss-node, 'A NodeJS Implementation of KSS'](https://github.com/dotherightthing/kss-node) by clicking the 'Clone in Mac' button.
1. Open Terminal
1. Use the Node Package Manager (NPM, installed with step 1) to install the KSS binary, by running `sudo npm install -g kss`
1. Navigate to your local kss-node directory (step 3), eg: `cd /Users/Dan/github/kss-node/`, then use the Node Package Manager to install the kss-node dependencies: `sudo npm install -g`, (`-g` = global, ie copy files to `/usr/local/lib/node_modules/kss/`) 

##### Windows 7

1. Launch the Githib application, then click 'tools' > 'options' to see where your 'default storage directory' is, or to change this
1. Sign in to Github (create an account if haven't done so already). 
1. Clone my bug-fixed fork of [kss-node, 'A NodeJS Implementation of KSS'](https://github.com/dotherightthing/kss-node) by clicking the 'Clone in Windows' button. This will add '﻿dotherightthing/kss-node' to your local repositories. Then close the Github application
1. Open a Command Prompt: Start > Run > `cmd` > Enter
1. Use the Node Package Manager (NPM, installed with step 1) to install the KSS binary, by running `npm install -g kss`
1. Navigate to your local kss-node directory (step 3), eg: `cd ﻿C:\Files\Websites\GitHub\kss-node`, then use the Node Package Manager to install the kss-node dependencies: `npm install -g`, (`-g` = global, ie copy files to `???`)

#### Set up the styleguide structure in your project

Please note that this is *in addition to* checking out our kss-node fork to your development computer.

1. Move your site stylesheets to a separate folder if they are not already in one, eg: `/path/to/resources/styles`
1. Create a 'styleguide' folder within your project. Typically this would be a sibling of the folder which contains your site stylesheets. eg: `/path/to/resources/styleguide`
1. Create a dynamic project template page, that will pull in the external styleguide 'template'. This file should be similar to your existing site templates, in that it should include all project assets such as CSS, JS etc, and use the same structural markup. A boilerplate file is available at [https://github.com/dotherightthing/kss-node/blob/master/demo-dotherightthing/public/styleguide/demo.php](https://github.com/dotherightthing/kss-node/blob/master/demo-dotherightthing/public/styleguide/demo.php).

#### Populate the styleguide structure by regenerating the styleguide

##### OS X

I've created a small Automator application which handles population of the styleguide folder including regeneration of the styleguide.

The first time you use the application with any project, you will need to create a configuration file:

1. Create a configuration file for the application by making a copy of the `config-demo.plist` file and naming this so that you remember which project it is for (as you could end up having different configuration files for different projects). Configuration files live in `/path/to/kss-node/demo-dotherightthing/private/styleguide/user/`.
1. Open up your configuration file in a text editor. The file uses an XML structure. Update the `<string>` values to suit your project.

Once ytou configuration file is set up:

1. Run `/path/to/kss-node/demo-dotherightthing/private/styleguide/update/regenerate-styleguide.app`

##### Windows 7

TODO: I need to add step-by-step instructions here

### View the generated styleguide

You may now view the documentation via your custom template, eg `/demo-dotherightthing/html/styleguide.php`.

#### Commenting your stylesheets, KSS-style

First up let's create an item in the Styleguide table of contents (TOC):

```css
/* <- start KSS comment block
Button styles <- name of the section for the styleguide jump links

Lorem ipsum dolor sit anet. <- description which appears below the topmost heading when this TOC item is selected

Styleguide  1 <- index for generated TOC (table of contents)
end KSS comment block -> */ 
```

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

#### Known issues

1. Some modifiers are not output in the styleguide
  1. Check that the modifier is followed by a description: `.mymodifier - my description`
	1. Remove any empty lines from the KSS code
1. Styleguide is generated but the styleguide page is blank
  1. Navigate to the styleguide homepage then select the desired page from the dropdown, this will eliminate the possibility that the desired index comment has been removed from the stylesheets
  1. Remove any empty lines from the end of the stylesheet files
