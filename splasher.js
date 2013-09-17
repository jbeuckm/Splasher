#!/usr/bin/env phantomjs

var htmlFile;
var configFile;

/**
 * Identify the HTML file that will be used to render the splash images.
 */
var args = require('system').args;
if (args.length === 1) {
  console.log('Pass the path of the HTML file as the first argument.');
  phantom.exit();
}
else {
  htmlFile = args[1];
  configFile = args[2] || './defaults.json';
}

/**
 * Load the splash pages size specs.
 */
var config = require(configFile);

var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};


/**
 * When the frame wrapper html loads, set the iframe src to the splash page html and stop responding to LoadFinished.
 * @param status
 */
page.onLoadFinished = function(status) {

  if ( status === "success" ) {

    page.evaluate(function(htmlFile) {
      $('#splash-frame').prop('src', htmlFile);
    }, htmlFile);

    processNextDefaultSize();
  }
  else {
    console.log(status);
    phantom.exit();
  }

  page.onLoadFinished = null;
};

page.open('./frame.html');


/**
 * Resize the iframe to the next specification, wait for phantom to redraw, and render the named image.
 */
function processNextDefaultSize() {

  if (config.length == 0) {
    phantom.exit();
    return;
  }

  var size = config.shift();


  page.evaluate(function(size) {

    $('#splash-frame').prop('width', size.width).prop('height', size.height);

    console.log('size = '+JSON.stringify(size));

  }, size);


  page.clipRect = { left: 0, top: 0, width: size.width, height: size.height };

  setTimeout(function(){

    page.render('out/'+size.filename);

    processNextDefaultSize();

  }, 1000);

}
