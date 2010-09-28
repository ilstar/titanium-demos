var win = Ti.UI.currentWindow;

// create a blank web view.
var webview = Ti.UI.createWebView();
win.add(webview);

var button = Ti.UI.createButton({
  title: 'Send Request',
  width: 200,
  height: 100,
  bottom: 30
});
// after click the button, update the web view and set the response to web view html code.
button.addEventListener('click', function(e) {
  var client = Ti.Network.createHTTPClient({
    timeout: 2000
  });

  client.onload = function() {
    webview.html = this.responseText;
  };

  client.open('GET', 'http://www.google.com.hk');
  client.send();
});
win.add(button);
