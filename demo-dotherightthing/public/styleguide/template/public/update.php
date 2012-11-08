<?php

	// /sites/all/themes/sorted2/templates/styleguide/public/update.php?os=osx
	// /sites/all/themes/sorted2/templates/styleguide/public/update.php?os=win

	if ( $_GET['os'] === 'win' ) {
		
		
		
	}
	else if ( $_GET['os'] === 'osx' ) {
		
		echo "<h1>Updating KSS styleguide</h1>";	
		
		// Start kss-node, run styleguide regeneration
		$output = shell_exec("cd /Users/Dan/github/kss-node/; node index.js; ls; kss-node /Users/Dan/Websites/sorted2/prototype/htdocs/sites/all/themes/sorted2/css /Users/Dan/Websites/sorted2/prototype/htdocs/sites/all/themes/sorted2/kss/styleguide --template /Users/Dan/Websites/sorted2/prototype/htdocs/sites/all/themes/sorted2/templates/styleguide/;");
		//$output = shell_exec("cd /Users/Dan/github/kss-node/; node index.js; ");
		
		//echo "<p>Done</p>";
		
		echo "<pre>$output</pre>";
	}
	else {
		echo "Error - ?os not defined";
	}

//$output = shell_exec('ls -lart');
//echo "<pre>$output</pre>";

?>