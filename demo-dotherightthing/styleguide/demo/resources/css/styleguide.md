## About this guide

*These instructions are located in css/styleguide.md and are written using [markdown](http://en.wikipedia.org/wiki/Markdown). For a good online editor, check out [Dillinger](http://dillinger.io/).* 

The stylesheet documentation containined in this styleguide is dynamically generated from the CSS stylesheets using KSS (Knyle Style Sheets).

The rest of the information on this page is for CSS developers who wish to contribute to the maintenance of this guide.

### Setup and usage instructions for developers 

#### Why use KSS?

1. long and complex stylesheets are difficult for clients and even other experienced coders to decipher
1. even the original coder can be stumped about what they did 6 months ago, when they have since evolved their coding style
1. visualising stylesheets allows developers to see at a glance whether a style already exists before authoring new styles
1. exposing modifiers encourages development of reusable code that can be skinned
1. reused and resuable code = less code to download, less code to maintain
1. visual documention provides an easy way to check that there are no bugs, oversights, or redundant rules in the CSS
1. HTML demos assist back-end developers and other front-end developers in troubleshooting integration issues
1. automatic styleguide generation is many times more efficient than manually building a PDF or HTML styleguide and being responsible for its maintenance
1. a KSS styleguide is 'living' or 'alive' because it updates when your CSS does (when you regenerate it via the commandline)
  
#### Commenting your stylesheets, KSS-style

First up let's create an item in the Styleguide table of contents (TOC):

```css
/* <- start KSS comment block
Button styles <- name of the section for the styleguide jump links

Note that the Munger is not active on this demo, so Munger comments will be ignored, resulting in all styles being shown to all browsers. <- description which appears below the topmost heading when this TOC item is selected

Styleguide  1 <- index for generated TOC
end KSS comment block -> */ 
```

Now let's start documenting the individual components. Here's an example:

```css
/* <- start KSS comment block
Faux button <- title for generated docs

A fake `button`. <- description for generated docs

Markup: 
<a href="#" class="button {$modifiers}">Link</a> <- this markup may span multiple lines and is rendered into the stylesguide to demonstrate the style. A copy will be generated for each modifier, plus one for the 'default' state.

:hover - Hover state (color change) <- this is a 'modifier' and its description
.disabled - Dims the button to indicate it cannot be used. <- this is another 'modifier' and it's description

Styleguide 1.1.0. <- index for generated TOC
end KSS comment block -> */ 

.button {
    color: red;
	padding: 10px;
	border: 1px solid;
}
.button:hover,
.button:focus {
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
	<span>Box</span>
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

### Install the required software

To use KSS, you will need to do the following:

1. Install a LAMP stack, so that you can run PHP scripts. *Installation of a LAMP stack is not covered in this documentation.*
1. Install node.js - node.js aka 'Node' is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications, that run in the backend, outside a browser. 
1. Install some sort of Git client to access our patched kss-node repo on github.com
1. Install the KSS ([Knyle Style Sheets, ala Kyle Neath, Design Director at Github](http://warpspire.com/posts/kss/)) binary
1. Install the kss-node dependencies

##### OS X

1. Install [node.js](http://nodejs.org/) 
1. Install the [GitHub GUI for Mac](http://mac.github.com/)
1. Launch the Githib application
1. Sign in to Github (create an account if haven't done so already). 
1. Clone my bug-fixed fork of [kss-node, 'A NodeJS Implementation of KSS'](https://github.com/dotherightthing/kss-node) by clicking the 'Clone in Mac' button.
1. Open Terminal
1. Use the Node Package Manager (NPM, installed with step 1) to install the KSS binary, by running `sudo npm install -g kss`
1. Navigate to your local kss-node directory (step 3), eg: `cd /Users/Dan/github/kss-node/`, then use the Node Package Manager to install the kss-node dependencies: `sudo npm install -g`, (`-g` = global, ie copy files to `/usr/local/lib/node_modules/kss/`) 

##### Windows 7

1. Install [node.js](http://nodejs.org/).
1. Install the [GitHub GUI for Windows](﻿http://windows.github.com/)
1. Launch the Githib application, then click 'tools' > 'options' to see where your 'default storage directory' is, or to change this
1. Sign in to Github (create an account if haven't done so already). 
1. Clone my bug-fixed fork of [kss-node, 'A NodeJS Implementation of KSS'](https://github.com/dotherightthing/kss-node) by clicking the 'Clone in Windows' button. This will add '﻿dotherightthing/kss-node' to your local repositories. Then close the Github application
1. Open a Command Prompt: Start > Run > `cmd` > Enter
1. Use the Node Package Manager (NPM, installed with step 1) to install the KSS binary, by running `npm install -g kss`
1. Navigate to your local kss-node directory (step 3), eg: `cd ﻿C:\Files\Websites\GitHub\kss-node`, then use the Node Package Manager to install the kss-node dependencies: `npm install -g`, (`-g` = global, ie copy files to `???`)

#### Copy the templating files to your project

1. Copy the 'styleguide' folder to your 'resources' (assets) or 'theme' folder
1. Copy `[{STYLEGUIDE_FOLDER_PATH_ABSOLUTE}]/demo/resources/css/`**`styleguide.md`** to your site's `css` or `styles` folder (eg `[{STYLEGUIDE_CLI_SOURCE}]`)
1. Create a page which will `<?php `**`include()`**`; ?>` the `[{STYLEGUIDE_CLI_TEMPLATE}]/`**`importer.php`** file. This file should be similar to your existing site templates, in that it should  include all project assets such as CSS, JS etc, and use the same structural markup. Tip: a full-width template (ie without secondary navigation) will work best. For an example of this, see: [/demo/styleguide.php]([{STYLEGUIDE_FOLDER_PATH}]/demo/styleguide.php) (you may even be looking at this now ;-)). Note the required (editable) PHP globals.

~~~

Note: If using a zipped folder called 'styleguide.zip'

If the uncompressed folder has green text in Explorer, this means that the files are encrypted - this will cause problems for Apache.

To resolve this:

1. Create a New Compressed (zipped) Folder
1. Drag the uncompressed folder into the new zip
1. Extract the new zip
1. Use the extracted files


#### Navigate to the kss-node directory and start `kss-node`

##### OS X

1. Navigate to the kss-node directory, eg: `cd /Users/Dan/github/kss-node/`
1. Start the node.js server: `node index.js`

##### Windows 7

1. Navigate to the kss-node directory, eg: `cd ﻿C:\Files\Websites\GitHub\kss-node`
1. Start the node.js server: `node index.js`

#### (Re)generate the styleguide

Run kss-node via the commandline: 

`kss-node [{STYLEGUIDE_CLI_SOURCE}] [{STYLEGUIDE_CLI_DESTINATION}] --template [{STYLEGUIDE_CLI_TEMPLATE}]`

This command:

1. Calls kss-node: `kss-node`
1. Reads KSS comments in stylesheets in this folder: `[{STYLEGUIDE_CLI_SOURCE}]`
1. Generates documentation into this folder: `[{STYLEGUIDE_CLI_DESTINATION}]`
1. Formats the results using this custom `.html` template (and associated assets): `--template [{STYLEGUIDE_CLI_TEMPLATE}]`

### View the generated styleguide

You may now view the documentation via your custom template, eg [/demo/styleguide.php]([{STYLEGUIDE_FOLDER_PATH}]/demo/styleguide.php).

#### Known issues

1. Pseudo-classes don't display correctly in the documentation, in some browsers. Seems to work ok in Chrome (OS X &amp; Windows 7) though.
1. When regenerating documentation locally, the contents of the 'generated' folder may be deleted and then recreated. This breaks SVN, because the .svn stub files are also removed. In this case it is necessary to specify a different 'generated' folder, then manually copy the files over.

#### Read the Developer Notes

[Full developer and usage notes are available here](https://github.com/hughsk/kss-node/blob/master/demo/styleguide.md). 