/**
  KSS Styleguide
	Extra functions
	DTRT
*/

 /*
	 Set iframe height
	 DI @ CT 
 */
 
	var resize_page_load = true;
	
	// script is called by the iframe content onload
	function set_iframe_height( iframe_id, height) {
		
		"use strict";				
		
		// Chrome gives 32px too high on page load - adjust this to suit
		if ( /chrome/.test(navigator.userAgent.toLowerCase()) && resize_page_load === true ) {
			height = height - 32;
		}
		// IE7 gives 28px too low - adjust this to suit
		if ( $.browser.msie && parseInt($.browser.version, 10) === 7 ) {
			height = height + 28;
		}
		// IE8 gives 20px too low - adjust this to suit
		if ( $.browser.msie && parseInt($.browser.version, 10) === 8 ) {
			height = height + 20;
		}
	
		// swap in a selector that will get the iframe
		$('#' + iframe_id).css('height', height);
		resize_page_load = false;		
	} 	

	$(document).ready( function() {
		
		/*jshint browser:true, jquery:true, strict:true, devel:true, smarttabs:true */
		/*global prettyPrint, styleguide_munge_breadcrumbs, styleguide_munge_title, styleguide_site_name, styleguide_path, styleguide_template_path*/
		"use strict";

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
		var $breadcrumb = false;
					
		if ( styleguide_munge_breadcrumbs ) {
			
			// show the styleguide section in the page title and breadcrumbs				
			$breadcrumb = $('.breadcrumb ul');			
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
					
		/*
			Print preview
			DTRT
		
			Injects an iframe which contains the KSS Example's HTML, and changes the attached print stylesheet from 'print' to 'screen' media type.
		
			Assumptions:
			- print css overrides (and adds to) screen css
			
			Tested and working in: 
			- OS X 10.7.4 FF15
			- OS X 10.7.4 Chrome 21
			- OS X 10.7.4 Safari 5.1.6
			- Win 7 SP1 IE9
			- Win 8 RTM IE10
						
			Issues still to resolve in:
			- Win XP SP3 IE8: iframe content is generated but print->screen stylesheet not working ('Object does not support this property or method)
			- Win XP SP3 IE7: iframe content is not generated
			
			Notes:
			- runs window.onload (ie after images have loaded), so that .kss-html-variation container heights are calculated correctly
		*/				
		
		$(window).load( function() {
			
			var kss_head = $('head').html();
			
			// was initially going to exclude -defaults, but sometimes they are required..
			$('.kss-html-default, .kss-html-variation').each( function(i, item) {
				
				setTimeout( function() {
													
					var kss_html = $(item).html().trim();		
					
					var iframe_el = '';
					iframe_el += '<div class="kss-clear"></div>';
					iframe_el += '<div class="kss-html-variation-print">';
					iframe_el += '<p class="styleguide-print-heading">Print preview (+ background images disabled):</p>';
					iframe_el += '<iframe class="styleguide-print-iframe" id="kss-html-variation-print-' + i + '" allowtransparency="true" width="100%">print example</iframe>';
					iframe_el += '</div>';																
					
					var iframe_html = '';
					iframe_html += '<!DOCTYPE html>';
					iframe_html += '<html xmlns="http://www.w3.org/1999/xhtml" class="styleguide-print">';
					iframe_html += '<head>';
					iframe_html += kss_head;			
					iframe_html += '<link rel="stylesheet" href="' + styleguide_template_path + 'public/kss.css" />'; // Styleguide styles (eg .styleguide-placeholder)	
					iframe_html += '<script type="text/javascript">';
					iframe_html += 'document.domain = "' + document.domain + '";';
					
					// jQuery document.ready fails in MSIE9
					//iframe_html += 'jQuery(document).ready( function($) {';
					//iframe_html += '});';	
					
					//console.log( window.parent );
					
					// window.onload works ok				
					iframe_html += 'window.onload = function() {';				
					iframe_html += 'jQuery(\'link[media="print"], style[media="print"]\').attr(\'media\',\'screen\').attr(\'title\',\'[Print stylesheet]\');';
					iframe_html += 'window.parent.set_iframe_height( "kss-html-variation-print-' + i + '", $(\'body>.styleguide-liner\').outerHeight() );';
					iframe_html += '}';
					
					iframe_html += '<\/script>';							
					iframe_html += '</head>';
					iframe_html += '<body>';
					iframe_html += '<div class="styleguide-liner">';
					iframe_html += kss_html;
					iframe_html += '<div class="kss-clear styleguide-clear"></div>'
					iframe_html += '</div>';
					iframe_html += '</body>';
					iframe_html += '</html>';
					
					$(item).after( iframe_el );
					
					// fails:
					//$('#print-' + i).contents().append(iframe_html);				
					//$('#print-' + i).contents().find('body').append( $(this).html().trim() );
							
					// works:	
					// http://bitsandcodes.blogspot.co.nz/2010/09/how-to-write-content-of-iframe-using.html				
					var frame = $('#kss-html-variation-print-' + i)[0].contentWindow.document; 
					frame.open();
					frame.write( iframe_html );
					frame.close();
					
				}, 250 );
				
			});
			
		});
							
	});