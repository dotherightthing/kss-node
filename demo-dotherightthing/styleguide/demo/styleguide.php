<?php 
/**
	* KSS Node Demo
**********************************
  * 
  * This DEMO page mimics how a CMS like Drupal would use templates to style different types of content.
  * 
  * In a real world situation this page might be available at http://domain.com/documentation/styleguide.
	*
	* NOTE: jQuery is a requirement, if this is not used in your project, please uncomment this include in kss/index.htm
  * 
*/
	
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<head>
  <title>KSS Demo</title>
  <!-- iOS style -->
  <meta name="viewport" content="width=1024" />
  <!-- PROJECT ASSETS: CSS -->  
  <!-- linking your project stylesheets here will serve to style both the project 'chrome' and the KSS HTML examples -->
  <!-- in a CMS environment the list of CSS files would usually be dynamically generated, with CSS files having been passed through various filters (eg the Munger) to alter the output -->
  <link rel="stylesheet" href="resources/css/reset.css" />
  <link rel="stylesheet" href="resources/css/global.css" />
  <!-- a subfolder is used here just to ensure that all css is being parsed by kss-node -->
  <link rel="stylesheet" href="resources/css/subfolder/buttons.css" />
  <link rel="stylesheet" href="resources/css/print.css" media="print" />    
  <!-- PROJECT ASSETS: JS -->
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script type="text/javascript" src="resources/js/ui.js"></script>
</head>
<body>

  <div id="header">
    <div class="liner">
      <p>Project header</p>  
    </div>
  </div>
	<!-- end #header -->
  
	<div id="body">
		<?php	
			// START KSS STYLEGUIDE
		
			global $styleguide_site_name;
			global $styleguide_site_root;
			global $styleguide_path;
			global $styleguide_generated_path;			
			global $styleguide_section;
			global $styleguide_section_prefix;
			global $styleguide_munge_breadcrumbs;
			global $styleguide_munge_title;
			global $styleguide_viewport_width;
			global $styleguide_css_path;
			global $styleguide_folder_path;			

			$styleguide_site_root = $_SERVER['DOCUMENT_ROOT']; // /Users/Dan/github/kss-node/ctdemo
			$styleguide_path = $_SERVER['PHP_SELF'];// /resources/styleguide/demo.php	
			$styleguide_section = isset($_GET['section']) ? $_GET['section'] : ''; // &section=['', or '1', '2', '3' etc]

			// START EDIT
			$styleguide_site_name = 'TestProject';			
			$styleguide_folder_path = '/demo-dotherightthing/styleguide';	
			$styleguide_css_path = '/demo-dotherightthing/styleguide/demo/resources/css';	
			$styleguide_section_prefix = '?section=';
			$styleguide_munge_breadcrumbs = 'false';
			$styleguide_munge_title = 'true';
			$styleguide_viewport_width = '1024';						
			// END EDIT
			
			include( $styleguide_site_root . $styleguide_folder_path . '/template/importer.php' );
			
			// END KSS STYLEGUIDE
    ?>
  </div>
  <!-- end #body -->
  
  <div id="footer">
    <div class="liner">
      <p>Project footer</p>  
    </div>
  </div>
  <!-- end #footer -->
  
</body>
</html>
