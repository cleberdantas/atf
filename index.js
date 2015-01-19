'use strict';

var phantom = require('phantom');

module.exports = function (url) {

phantom.create(function(ph) {
  return ph.createPage(function(page) {
    return page.open(url, function(status) {
      console.log("opened site? ", status);         
            page.injectJs(__dirname + '/criticalCss.js', function() {
                 setTimeout(function() {
                    return page.evaluate(function() {  

                        return printAboveTheFoldCss();
                    }, function(result) {
                        console.log(result);
                        ph.exit();
                    });
                }, 5000);
            });
    });
    });
});
};
