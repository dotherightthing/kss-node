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
	* Silverstripe users should use the following instead:
	
	// 1. Add this function to Page_Controller class in Page.php
	
	public function Styleguide() {
		// START KSS STYLEGUIDE
						
		global $styleguide_site_root;	
		global $styleguide_section;
		global $styleguide_folder_path;	
		
		$styleguide_site_root = $_SERVER['DOCUMENT_ROOT']; // /Users/Dan/github/kss-node/ctdemo
		$styleguide_section = isset($_GET['section']) ? $_GET['section'] : ''; // &section=['', or '1', '2', '3' etc]
		
		// START EDIT
		$styleguide_folder_path = '/path/to/resources/styleguide';
		// END EDIT
		
		ob_start(); 
		include( $styleguide_site_root . $styleguide_folder_path . '/template/importer.php' );
		
		$str = ob_get_contents();
		ob_end_clean();
		return $str; 
		
		// END KSS STYLEGUIDE
	}
	
	// 2. Create StyleguidePage.ss and type '$Styleguide' into this file
	// /themes/THEME_NAME/templates/StyleguidePage.ss
	// or
	// /themes/THEME_NAME/templates/Includes/StyleguidePage.ss
	// or
	// /themes/THEME_NAME/templates/Layouts/StyleguidePage.ss
	
	// 3. Create a 'Styleguide' page in the CMS, at /styleguide
	
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
  <link rel="stylesheet" href="../demo-styles/demo-reset.css" />
  <link rel="stylesheet" href="../demo-styles/demo-global.css" />
  <!-- a subfolder is used here just to ensure that all css is being parsed by kss-node -->
  <link rel="stylesheet" href="../demo-styles/subfolder/demo-buttons.css" />
  <link rel="stylesheet" href="../demo-styles/demo-print.css" media="print" />    
  <!-- PROJECT ASSETS: JS -->
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
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
		
			global $styleguide_site_root;			
			global $styleguide_section;
			global $styleguide_folder_path;						

			$styleguide_site_root = $_SERVER['DOCUMENT_ROOT']; // /Users/Dan/github/kss-node/ctdemo			
			$styleguide_section = isset($_GET['section']) ? $_GET['section'] : ''; // &section=['', or '1', '2', '3' etc]
			
			// START EDIT
			$styleguide_folder_path = '/demo-dotherightthing/public/styleguide';
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
