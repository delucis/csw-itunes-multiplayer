// trackDisplay.js
//
// automatically generate bpatchers to display
// now-playing track information
//

// inlets and outlets
inlets = 1;
outlets = 0;

// global variables and arrays
var numtracks = 0;

// Maxobj variables for scripting
var trackInfo = new Array(32);

/*
// methods start here
*/
// tracks -- generates and binds the track-info modules in the max patch
function tracks(val)
{
	if(arguments.length) // bail if no arguments
	{
		// parse arguments
		a = arguments[0];

		// safety check for number of tracks
		if(a<0) a = 0; // too few tracks, set to 0
		if(a>32) a = 32; // too many tracks, set to 32

		// out with the old...
		for(i=0;i<numtracks;i++) // get rid of the track-info modules using the old number of tracks
		{
			this.patcher.remove(trackInfo[i]);
		}

		// ...in with the new
		numtracks = a; // update our global number of track-info modules to the new value
		for(k=0;k<a;k++) // create the track-info modules
		{
			if(k%2) { x = 555 } else { x = 255 } // set object’s x co-ordinate
			y = ~~(k/2) * 45 + 15; // set object’s y co-ordinate
			trackInfo[k] = this.patcher.newdefault(x, y, "bpatcher", "track-info", "@patching_rect", x, y, 300, 45, "@presentation_rect", x, y, 300, 45, "@presentation", 1, "@args", k+1);
		}
	}

	else // complain about arguments
	{
		post("tracks message needs arguments");
		post();
	}
}