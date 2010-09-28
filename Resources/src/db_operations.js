//
// db operations, includes create a database, create a table, query, update and delete etc.
//

// create a database 
// the 1st argument is the filename of sqlite, before run this code, you should run `sqlite3 ../test.db` in shell for create file.
// the 2rd argument is the name of database.
var db = Titanium.Database.install('../test.db', 'test');


// create table and insert records
db.execute("CREATE TABLE IF NOT EXISTS tips (ID INTEGER, content TEXT)");

// if you have any variables in sql, use ? replace it maybe more convenient.
db.execute("INSERT INTO tips (id, content) VALUES (?, ?)", 3, 'long content');
db.execute("INSERT INTO tips (id, content) VALUES (?, ?)", 4, 'so many stuff');

Ti.API.info('====================start');

// query all records in table tips
var records = db.execute("SELECT * FROM tips");
for (var i = 0; i < records.rowCount; i++) {
  Ti.API.info('id:' + records.fieldByName('id') + ', content:' + records.fieldByName('content'));
  // move the pointer to next row
  records.next();
}


// update a record and delete a row.
db.execute("UPDATE tips SET content=? WHERE id=?", 'very short content', 3);
var records = db.execute("SELECT * FROM tips WHERE id=?", 3);
if (records.isValidRow()) {
  Ti.API.info('record 3 updated, the new content is: ' + records.fieldByName('content'));
}


db.execute("DELETE FROM tips WHERE id=? ", 4);
Ti.API.info("the count of records in table tips:" + db.execute("SELECT * FROM tips").rowCount);

// remember close the database if you not use it any more.
db.close();
// usually, you don't need call this method, becase it will remove all data of your database.
db.remove();


Ti.API.info('====================end');

var view = Ti.UI.createView({backgroundColor: 'white'});
view.add(Ti.UI.createLabel({text: 'there is nothing in here, please look the source code and log info.'}));
Ti.UI.currentWindow.add(view);
