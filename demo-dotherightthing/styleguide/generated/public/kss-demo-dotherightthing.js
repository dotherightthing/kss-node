/**
  KSS Styleguide
	Extra functions
	DTRT
*/

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
			
			Issues still to resolve in:
			- Win XP SP3 IE8: iframe content is generated but print->screen stylesheet not working ('Object does not support this property or method)
			
			Notes:
			- runs window.onload (ie after images have loaded), so that .kss-html-variation container heights are calculated correctly
		*/
		
		$(window).load( function() {
			
			$('.kss-html-variation').each( function(i, item) {
				
				var iframe_el = '';
				iframe_el += '<div class="kss-clear"></div>';
				iframe_el += '<div class="kss-html-variation-print">';
				iframe_el += '<p class="kss-print-heading">Print preview:</p>';
				iframe_el += '<iframe id="kss-html-variation-print-' + i + '" allowtransparency="true" height="' + $(item).height() + '" width="100%">print example</iframe>';
				iframe_el += '</div>';												
				
				var kss_head = $('head').html();
				var kss_html = $(item).html().trim();
				
				var iframe_html = '';
				iframe_html += '<!DOCTYPE html>';
				iframe_html += '<html xmlns="http://www.w3.org/1999/xhtml">';
				iframe_html += '<head>';
				iframe_html += kss_head;			
				iframe_html += '<link rel="stylesheet" href="' + styleguide_template_path + 'public/kss.css" />'; // Styleguide styles (eg .kss-placeholder)	
				iframe_html += '<script type="text/javascript">';
				
				// jQuery document.ready fails in MSIE9
				//iframe_html += 'jQuery(document).ready( function($) {';
				//iframe_html += '});';	
				
				// window.onload works ok
				iframe_html += 'window.onload = function() {';
				iframe_html += 'jQuery(\'link[media="print"]\').attr(\'media\',\'screen\');';
				iframe_html += '}';
				
				iframe_html += '<\/script>';							
				iframe_html += '</head>';
				iframe_html += '<body>';
				iframe_html += kss_html;
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
				
			});
			
		});
							
	});