<?php
	class StyleguidePage extends Page {
		// leave empty
	}
	
	class StyleguidePage_Controller extends Page_Controller {
		
			public function Styleguide() {
				// START KSS STYLEGUIDE
				global $styleguide_site_root;
				global $styleguide_section;
				global $styleguide_folder_path;
				$styleguide_site_root = $_SERVER['DOCUMENT_ROOT']; // /Users/Dan/github/kss-node/ctdemo
				$styleguide_section = isset($_GET['section']) ? $_GET['section'] : ''; // &section=['', or '1', '2', '3' etc]
				// START EDIT
				$styleguide_folder_path = '/resources/ui/styleguide';
				// END EDIT
				ob_start();
				include( $styleguide_site_root . $styleguide_folder_path . '/template/importer.php' );
				$str = ob_get_contents();
				ob_end_clean();
				return $str;
				// END KSS STYLEGUIDE
			} 
		
	}
?>