/*
 * simpleDatabase.js
 * a simple wrapper around Max 5's JS support for SQLite databases.
 * by Tim Place
 * copyright © 2008, Cycling '74
 */

var sqlite = new SQLite;
var result = new SQLResult;


function opendb(x)
{
    sqlite.open(x,1); //open a file-based DB
}


function closedb()
{
	sqlite.close();
}


function exec(arg)
{
	// execute the SQL statement in arg, returning results in the 'result' object
	sqlite.exec(arg, result);

	// access information about the returned records by calling functions on the result object
	formatResultForSfPlay();
}


function getversion()
{
	post("SQLite Version: " + sqlite.getversion() + "\n");
}

function formatResultForSfPlay()
{
    var numfields = result.numfields();
    var numrecords = result.numrecords();
    var fieldnames = new Array(numfields);
    var values = new Array(numfields);

	for(var i=0; i<numfields; i++)
		outlet(0, result.fieldname(i));

	for(var i=0; i<numrecords; i++){
		for(var j=0; j<numfields; j++)
			outlet(0, result.value(j, i));
	}
}

