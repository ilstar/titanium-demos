//
// table view
//
var win = Ti.UI.currentWindow;

var tableView = Ti.UI.createTableView({
});

var rowCommunication = Ti.UI.createTableViewRow({
  title: 'Communicate with webView',
  backgroundColor: '#def',
  hasChild: true,
  url: 'communicate_with_webview.js'
});
tableView.appendRow(rowCommunication);

var rowDB = Ti.UI.createTableViewRow({
  title: 'DB operations',
  hasChild: true,
  url: 'db_operations.js'
});
tableView.appendRow(rowDB);

var rowHTTP = Ti.UI.createTableViewRow({
  title: 'HTTP request',
  hasChild: true,
  url: 'http_request.js'
});
tableView.appendRow(rowHTTP);

// event listners
tableView.addEventListener('click', function(e) {
  if (e.rowData.url) {
    var newWindow = Ti.UI.createWindow({
      url: e.rowData.url,
      title: e.rowData.title
    });
    Ti.UI.currentTab.open(newWindow);
  }
});

// add table view to current window
win.add(tableView);
