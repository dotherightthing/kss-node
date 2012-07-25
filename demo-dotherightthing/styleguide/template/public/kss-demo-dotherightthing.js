	$(document).ready(function(){

		// Ensure code blocks are highlighted properly...
		if ( $('#kss-overview').length ) {
			if ( $('pre').parent().not('div.highlight') ) {
				$('pre').wrap('<div class="kss-markup styleguide-html"><div class="highlight"></div></div>');
			}
		}			
		
		$('pre>code').addClass('prettyprint');
		prettyPrint();
		
		var $kss_title = $('h2.kss-title');	
		var kss_title_text;
		var h1_text = $('h1').text();
					
		if ( styleguide_munge_breadcrumbs ) {
			
			// show the styleguide section in the page title and breadcrumbs				
			var $breadcrumb = $('.breadcrumb ul');			
			$breadcrumb.find('li:last').remove(); // strip 'DEMO'					
			
		}				
		
		if ( styleguide_munge_title ) {
			
			if ( $kss_title.length ) {				
				kss_title_text = $kss_title.eq(0).text();								
			}
			else {				
				kss_title_text = 'About this guide';					
			}				
			
			// update page title
			document.title = kss_title_text + ' - ' + h1_text + ' | ' + styleguide_site_name;						
			
		}
				
		if ( styleguide_munge_breadcrumbs ) {

			// update breadcrumbs
			$breadcrumb
			.append('<li><a href="' + styleguide_path + '">' + h1_text + '</a></li>')				
			.append('<li>' + kss_title_text + '</li>');				
			
		}
		
		// update viewport width to handle wider styleguide layout
		// works but not reqd in demo
		//if ( document.getElementById("viewport").length ) {
			// TODO: fix string
			//document.getElementById("viewport").setAttribute("content", "width=' + styleguide_viewport_width + '");
		//}
					
	});