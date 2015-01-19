// jshint ignore: start
window.printAboveTheFoldCss = function() { 
  var CSSCriticalPath = function(w, d, opts) {
    var opt = opts || {};
    var css = {};
    var pushCSS = function(r) {
      if(!!css[r.selectorText] === false) {
			css[r.selectorText] = {};
      } 
      var styles = r.style.cssText.split(/;(?![A-Za-z0-9])/);
      for(var i = 0; i < styles.length; i++) {
        if(!!styles[i] === false) {
			continue;	
        }
        var pair = styles[i].split(": ");
        pair[0] = pair[0];
        pair[1] = pair[1]; 
        if(pair[1] === undefined) {
			continue;	
        }
        css[r.selectorText][pair[0]] = pair[1];
      }
    };
    
    var parseTree = function() { 
      // Get a list of all the elements in the view.
      var height = w.innerHeight;
      var walker = d.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, function() { return NodeFilter.FILTER_ACCEPT; }, true);
  
      while(walker.nextNode()) {
        var node = walker.currentNode;
        var rect = node.getBoundingClientRect();
        if(rect.top < height || opt.scanFullPage) {
          var rules = w.getMatchedCSSRules(node);
          if(!!rules) {
            for(var r = 0; r < rules.length; r++) {
              pushCSS(rules[r]); 
            }
          }
        } 
      }
    };
   
    this.generateCSS = function() {
      var finalCSS = "";
      for(var k in css) {
        finalCSS += k + " { ";
        for(var j in css[k]) {
          finalCSS += j + ": " + css[k][j] + "; ";
        }
        finalCSS += "}\n";
      }
      
      return finalCSS;
    };
    
    parseTree();
  };
 
 
  var cp = new CSSCriticalPath(window, document);
  var css = cp.generateCSS();
  
  return css;
};