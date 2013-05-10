Splasher
========

Create all mobile splash page sizes instantly from your responsive HTML!


## Requirements

* phantomjs 1.7.0+
* your mobile splash page design in HTML

##Settings

Splasher will create a snapshot of your HTML page for each size+filename listed in defaults.json. The example defaults.json in this repo specifies the filenames and sizes used by Titanium for iOS default screen images.

## Usage

First, describe your splash page design and layout in HTML. Use whatever javascript, media queries, etc. you want to arrange for the sizes you need. Splasher will give your page one second to load and render before taking each snapshot.

Then, just pass the path to splasher.js.

Run the included example like this:

```
./splasher.js example.html
```

## Output

Your generated images will be saved in the folder out/

## How it works

Splasher opens an iframe with phantomjs. Your HTML is loaded into the iframe. Then for each size in defaults.json, Splasher resizes the iframe, waits one second, and takes a snapshot. The snapshots are saved according to the filenames in defaults.json.
