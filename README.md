Splasher
========

Create all mobile splash page sizes instantly from your responsive HTML!


## Requirements

* phantomjs 1.7.0+
* your mobile splash page design in HTML

## Usage

First, describe your splash page design and layout in HTML. Use media queries to arrange for the sizes you need. Then, just pass the path to splasher.js like this:

```
./splasher.js example.html
```

Splasher will create a snapshot of your HTML page for each size+filename listed in defaults.json. The default sizes are based on what Titanium uses.
