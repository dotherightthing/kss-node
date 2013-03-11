// Disabled by DS@CT as this breaks the Styleguide layout in Chrome
(function() {
  var KssStateGenerator;

  KssStateGenerator = (function() {

    function KssStateGenerator() {
      var idx, idxs, pseudos, replaceRule, rule, stylesheet, _i, _len, _len2, _ref, _ref2;
      pseudos = /(\:hover|\:disabled|\:active|\:visited|\:focus)/g;
      // try {
        _ref = document.styleSheets;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          stylesheet = _ref[_i];
					
					// prevent a cross domain error caused by attempting to parse 3rd-party Fontdeck stylesheets
					if ( stylesheet != '7432.css' ) {
						
						console.log( stylesheet );
						
						idxs = [];
						_ref2 = stylesheet.cssRules || [];
						for (idx = 0, _len2 = _ref2.length; idx < _len2; idx++) {
							rule = _ref2[idx];
							if ((rule.type === CSSRule.STYLE_RULE) && pseudos.test(rule.selectorText)) {
								replaceRule = function(matched, stuff) {
									return ".pseudo-class-" + matched.replace(':', '');
								};
								this.insertRule(rule.cssText.replace(pseudos, replaceRule));
							}
						}						
						
					}
					
        }
      // } catch (_error) {console.log(_error.message);}
    }

    KssStateGenerator.prototype.insertRule = function(rule) {
      var headEl, styleEl;
      headEl = document.getElementsByTagName('head')[0];
      styleEl = document.createElement('style');
			styleEl.title = 'KSS dynamic stylesheet'; // DS
      styleEl.type = 'text/css';
      if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = rule;
      } else {
        styleEl.appendChild(document.createTextNode(rule));
      }
      return headEl.appendChild(styleEl);
    };

    return KssStateGenerator;

  })();

  new KssStateGenerator;

});//.call(this);
