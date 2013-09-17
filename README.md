Splasher
========

Create all mobile splash page (and app icon) sizes instantly from your responsive HTML!


## Requirements

* phantomjs 1.7.0+
* your splash page/icon/whatever design in HTML

##Settings

Splasher will create a snapshot of your HTML page for each size+filename listed in your config file. The example config file `defaults.json` in this repo specifies the filenames and sizes used by Titanium for iOS default screen images. The config file `icons.json` will build the iOS 7 app icon sizes.

## Usage

First, describe your splash page (or app icon) design and layout in HTML. Use whatever javascript, media queries, etc. you want to arrange for the sizes you need. Splasher will give your HTML one second to load and render before taking each snapshot.

Then, just pass the path to splasher.js.

Run the included default page example like this:

```
./splasher.js example.html ./defaults.json
```

Or generate the example app icon sizes like this:

```
./splasher.js icons.html ./icons.json
```

Make your own config file to build whatever set of sizes your app needs.

## Output

Your generated images will be saved in the folder out/

## How it works

Splasher opens an iframe with phantomjs. Your HTML is loaded into the iframe. Then for each size listed in the config json, Splasher resizes the iframe, waits one second, and takes a snapshot.
