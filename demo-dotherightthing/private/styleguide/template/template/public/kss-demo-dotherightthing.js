/**
  KSS Styleguide
	Extra functions
	DTRT
*/
 
/*jshint browser:true, jquery:true, strict:true, devel:true, smarttabs:true */
/*global prettyPrint, styleguide_munge_breadcrumbs, styleguide_munge_title, styleguide_site_name, styleguide_path, styleguide_template_path*/
 
 var styleguide = {
	
		tests: {
			is_hifi: function() {
				
				"use strict";
				
				if ( ( $.browser.msie ) && ( $.browser.version < 8 ) ) {
					return false;
				}
				else {
					return true;
				}
			}
		},
	
		resize_page_load: true,
		
		html: {},		
		selectors: {},
		
		cache_selectors: function() {
			
			"use strict";
			
			return {
				kss_nav_form: $('#kss-nav-form'),
				kss_jump_nav_hx: $('.kss-title-level-1[id], .kss-title-level-2[id]'),
				kss_overview: $('#kss-overview'),
				kss_title: $('h2.kss-title'),
				h1: $('.kss-title-level-1'),
				breadcrumbs: $('.breadcrumb')
			};
			
		},
		
		// Set iframe height - DI @ CT
		// script is called by the iframe content onload
		set_iframe_height: function( iframe_id, height ) {	
		
			"use strict";
			
			// Chrome gives 32px too high on page load - adjust this to suit
			if ( /chrome/.test(navigator.userAgent.toLowerCase()) && styleguide.resize_page_load === true ) {
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
			styleguide.resize_page_load = false;
			
		},
		
		 // http://jquerybyexample.blogspot.com/2012/06/get-url-parameters-using-jquery.html
		 get_url_parameter: function(loc, sParam) {

			"use strict";

			 var sPageURL;
			 
			 if ( loc === window.location ) {
				 sPageURL = loc.search.substring(1);	
			 }
			 else {
				 sPageURL = loc.split('?')[1];	
			 }		
			 
			 if ( !sPageURL ) {
				 return;
			 }
			 
			 var sURLVariables = sPageURL.split('&');
			 for (var i = 0; i < sURLVariables.length; i++) {
				 var sParameterName = sURLVariables[i].split('=');
				 if (sParameterName[0] === sParam) {
					 return sParameterName[1];
				 }
			 }
		 },		 
		
		enhance_page_select: function() {
			
			"use strict";
			
			// hide fallback submit button
			styleguide.selectors.kss_nav_form.removeClass('kss-nojs');
						
			// select item in selectmenu						
			var page_section = styleguide.get_url_parameter(window.location, 'section');
			styleguide.selectors.kss_nav_form.find('option').each( function() {
				if ( $(this).val() === page_section ) {
					$(this).attr('selected', 'selected');
				}
			});
			
			// go without clicking Go
			// http://stackoverflow.com/questions/5150363/onchange-open-url-via-select-jquery
			var form_action = styleguide.selectors.kss_nav_form.attr('action');
			styleguide.selectors.kss_nav_form.find('select').change(function() {				
				window.location = form_action + '?section=' + $(':selected',this).attr('value');
			});			
			
		},
		
		generate_jumplinks_sidebar: function() {
			
			"use strict";
			
			// add select navigation for page headings				
			
			if ( styleguide.selectors.kss_jump_nav_hx.length && styleguide.selectors.kss_nav_form.length ) {
				
				styleguide.html.kss_jump_nav_select = '<ul id="styleguide-jump-nav-sidebar" class="styleguide-sidebar"></select>';
							
				//console.log( styleguide.html );
							
				// insert
				styleguide.selectors.kss_nav_form.append( styleguide.html.kss_jump_nav_select );
				
				styleguide.selectors.kss_jump_nav_select = $('#kss-jump-nav-select');	
				
				styleguide.selectors.kss_jump_nav_hx.each( function(i) {	
					// replace node-generated reference dots with dashes, else the ids can't be targetted	by jquery
					var old_id = $(this).attr('id');
					var new_id = old_id.replace('.', '-'); // x1
					new_id = new_id.replace('.', '-'); // x2
					new_id = new_id.replace('.', '-'); // x3	
					$(this).attr('id', new_id);
					
					// exclude first item, as this will match the item in the preceding noscript select
					if ( i > 0 ) {
						styleguide.selectors.kss_jump_nav_select.append('<li><a href="#' + new_id + '">' + $(this).text() + '</a></li>');
					}										
					
				});					
														
				// Jump on change						
				styleguide.selectors.kss_jump_nav_select.change( function() {
					
					$( $(':selected',this).attr('value') ).ScrollTo({
						duration: 1000,
						easing: 'linear'
					});
				});				
			}								
			
		},
		
		generate_jumplinks_select: function() {
			
			"use strict";
			
			// add select navigation for page headings				
			
			if ( styleguide.selectors.kss_jump_nav_hx.length && styleguide.selectors.kss_nav_form.length ) {
				
				styleguide.html.kss_jump_nav_select = '<select name="jumpto" id="kss-jump-nav-select" class="kss-select"></select>';
							
				//console.log( styleguide.html );
							
				// insert
				styleguide.selectors.kss_nav_form.append( styleguide.html.kss_jump_nav_select );
				
				styleguide.selectors.kss_jump_nav_select = $('#kss-jump-nav-select');	
				
				styleguide.selectors.kss_jump_nav_hx.each( function(i) {	
					// replace node-generated reference dots with dashes, else the ids can't be targetted	by jquery
					var old_id = $(this).attr('id');
					var new_id = old_id.replace('.', '-'); // x1
					new_id = new_id.replace('.', '-'); // x2
					new_id = new_id.replace('.', '-'); // x3	
					$(this).attr('id', new_id);
					
					// exclude first item, as this will match the item in the preceding noscript select
					if ( i > 0 ) {
						styleguide.selectors.kss_jump_nav_select.append('<option value="#' + new_id + '">' + $(this).text() + '</option>');
					}										
					
				});					
														
				// Jump on change						
				styleguide.selectors.kss_jump_nav_select.change( function() {
					
					$( $(':selected',this).attr('value') ).ScrollTo({
						duration: 1000,
						easing: 'linear'
					});
				});				
			}			
			
		},
		
		// Ensure code blocks are highlighted properly...
		highlight_code: function() {
			
			"use strict";
			
			if ( styleguide.selectors.kss_overview.length ) {
				if ( $('pre').parent().not('div.highlight') ) {
					$('pre').wrap('<div class="kss-markup styleguide-html"><div class="highlight"></div></div>');
				}
			}			
			
			$('pre>code').addClass('prettyprint');
			prettyPrint();			
			
		},	
		
		munge_title: function() {	
		
			"use strict";					

			if ( styleguide_munge_title ) { // TODO: namespace
				
				styleguide.html.h1_text = '0.0 About this guide'; // fallback
				
				if ( styleguide.selectors.h1.length ) {
					styleguide.html.h1_text = styleguide.selectors.h1.text();
				}
				
				// update page title				
				//document.title = styleguide.html.kss_title_text + ' - ' + styleguide.html.h1_text + ' | ' + styleguide_site_name;						
				document.title = styleguide.html.h1_text + ' | ' + styleguide_site_name + ' Living Styleguide';
				
			}
		},			
		
		munge_breadcrumbs_1: function() {
			
			"use strict";
			
			if ( styleguide_munge_breadcrumbs ) { // TODO: namespace
				
				if ( styleguide.selectors.breadcrumbs.length ) {
					styleguide.selectors.breadcrumbs.find('ul').eq(0).find('li:last').remove(); // strip 'DEMO'	
				}

			}
				
		},	
		
		munge_breadcrumbs_2: function() {
			
			"use strict";
			
			if ( styleguide_munge_breadcrumbs ) { // TODO: namespace			

				if ( styleguide.selectors.breadcrumbs.length ) {
					
					styleguide.selectors.breadcrumbs.find('ul')
					.append('<li><a href="' + styleguide_path + '">' + styleguide.html.h1_text + '</a></li>')				
					.append('<li>' + styleguide.html.kss_title_text + '</li>');
					
				}
			}
			
		},			
		
		// update viewport width to handle wider styleguide layout
		// works but not reqd in demo
		update_viewport_width: function() {
			
			"use strict";
			
			//if ( document.getElementById("viewport").length ) {
				// TODO: fix string
			//	document.getElementById("viewport").setAttribute("content", "width=' + styleguide_viewport_width + '");
			//}						
			
		},
		
		// slow so not currently used
		generate_print_preview: function() {		
		
			"use strict";		
											
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
				
				// this is a bit buggy in some versions, so remove it until we have time to debug things
				// disabled as it is quite slow...
				//if ( $.browser.msie ) {
				//	return;
				//}
				
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
						iframe_html += '<html xmlns="http://www.w3.org/1999/xhtml" class="styleguide-print t-styleguide">';
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
						iframe_html += 'setTimeout( function() { window.parent.set_iframe_height( "kss-html-variation-print-' + i + '", $(document).outerHeight() ); }, 1000 );';
						iframe_html += '}';
						
						iframe_html += '<\/script>';							
						iframe_html += '</head>';
						iframe_html += '<body>';
						iframe_html += '<div class="styleguide-liner">';
						iframe_html += kss_html;
						iframe_html += '<div class="kss-clear styleguide-clear"></div>';
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
								
		},	
		
		copyable_classes: function() {
			
			$('input.styleguide-modifier-classname').each( function(i, item) {
				var $this = $(item);
				var $parent_div = $this.parents('.styleguide-html-modifier:first');
				
				$parent_div.data('styleguide_input', $this);
				
				$parent_div.click( function() {
					$(this).data('styleguide_input').focus();
				});
				
				$this
				.bind( 'focus', function() {						
					
					var val1 = $this.val();
					var val2 = val1.split('.').join(' ');
					if ( val2.substring(0, 1) === ' ' ) {
						val2 = val2.substring(1); // remove leading space						
					}
					
					$this.val( val2 );
					$this.select();
				})
				.bind( 'blur', function() {
					var val2 = $this.val();
					val2 = ' ' + val2; // add leading space
					var val1 = val2.split(' ').join('.');					
					$this.val( val1 );
				});						
			});
			
		},

		
		init: function() {
		
			"use strict";
		
			 if ( styleguide.tests.is_hifi ) {
			 
					styleguide.selectors = styleguide.cache_selectors();
			
					styleguide.enhance_page_select();
				 
					styleguide.generate_jumplinks_select();
				 
				 	// TODO: add copy to prettyprint somehow so the HTML can be copied as easily as this
					styleguide.copyable_classes();	
				 
					styleguide.highlight_code();
				 
					// optional extras				 
					styleguide.munge_breadcrumbs_1();
					styleguide.munge_title();
					styleguide.munge_breadcrumbs_2();
			 }			
	
		}
		 
 };
 
if (typeof jQuery !== 'undefined') { 

	jQuery(document).ready( function() {
		
		"use strict";
		
		if ( typeof styleguide !== 'undefined' ) {
			styleguide.init();
		}
		
	});

}
 
if (typeof jQuery !== 'undefined') { 

/*
 src: http://balupton.github.com/jquery-scrollto/demo/ > Download
 MIT License {@link http://creativecommons.org/licenses/MIT/}
*/
(function(p,q){var d,l;d=p.jQuery;l=d.ScrollTo=d.ScrollTo||{config:{duration:400,easing:"swing",callback:q,durationMode:"each",offsetTop:0,offsetLeft:0},configure:function(e){d.extend(l.config,e||{});return this},scroll:function(e,c){var a,b,g,f,i,m,j,k,h,n;a=e.pop();b=a.$container;g=b.get(0);f=a.$target;i=d("<span/>").css({position:"absolute",top:"0px",left:"0px"});m=b.css("position");b.css("position","relative");i.appendTo(b);a=i.offset().top;a=f.offset().top-a-parseInt(c.offsetTop,10);j=i.offset().left;
k=f.offset().left-j-parseInt(c.offsetLeft,10);f=g.scrollTop;j=g.scrollLeft;i.remove();b.css("position",m);h={};n=function(a){0===e.length?"function"===typeof c.callback&&c.callback.apply(this,[a]):l.scroll(e,c);return!0};c.onlyIfOutside&&(i=f+b.height(),m=j+b.width(),f<a&&a<i&&(a=f),j<k&&k<m&&(k=j));a!==f&&(h.scrollTop=a);k!==j&&(h.scrollLeft=k);d.browser.safari&&g===document.body?(p.scrollTo(h.scrollLeft,h.scrollTop),n()):h.scrollTop||h.scrollLeft?b.animate(h,c.duration,c.easing,n):n();return!0},
fn:function(e){var c,a,b;c=[];var g=d(this);if(0===g.length)return this;e=d.extend({},l.config,e);a=g.parent();for(b=a.get(0);1===a.length&&b!==document.body&&b!==document;){var f;f="visible"!==a.css("overflow-y")&&b.scrollHeight!==b.clientHeight;b="visible"!==a.css("overflow-x")&&b.scrollWidth!==b.clientWidth;if(f||b)c.push({$container:a,$target:g}),g=a;a=a.parent();b=a.get(0)}c.push({$container:d(d.browser.msie||d.browser.mozilla?"html":"body"),$target:g});"all"===e.durationMode&&(e.duration/=c.length);
l.scroll(c,e);return this}};d.fn.ScrollTo=d.ScrollTo.fn})(window);

}
	