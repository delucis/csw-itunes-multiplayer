# iTunes multiplayer

Max 6 patch to grab tracks from iTunes library and play them.

Parses iTunes Library XML file, retrieving artist, album, track name and file location information. Stores this information in an SQL database and uses it to playback files from the library and display their basic information.

**Caution:** This is buggy and, for large libraries, slow to initialise — use at your own discretion.

## Dependencies

* [sadam.rapidXML] from Ádám Siska’s [sadam library](http://sadam.hu/en/software) for parsing the iTunes XML
* [mxj ej.urn] from Emmanuel Jourdan’s [ejies collection](https://github.com/emmanueljourdan/ejies) to deal with random selection from a database containing more than 4096 entries

## Acknowledgments

With thanks to [Josiah Wolf Oberholtzer](http://josiahwolfoberholtzer.com/) for unravelling the secrets of `this.patcher` in Max’s scripting environment.