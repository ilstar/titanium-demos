//
// how to Ti communicate with webview
//

var win = Ti.UI.currentWindow;

var webview = Ti.UI.createWebView({
  url: '../pages/webview_js.html'
});
win.add(webview);

Ti.App.addEventListener('fromPage', function(e) {
  // receive argument by variables 'e'
  Ti.API.info('these message from html page:' + e.num + e.msg);
});

var button = Ti.UI.createButton({
  title: 'Change HTML element',
  width: 200,
  height: 60,
  bottom: 30
});
button.addEventListener('click', function() {
  // the argument is a string just as javascript code in html
  webview.evalJS("$('#d2').css('background-color', 'red')");
});
win.add(button);

