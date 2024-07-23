**Canva Premium Remover** is an Open Source Chrome extension that removes all premium elements (buttons, illustrations, features, ...) from Canva.com UI.
This will greatly improve your experience as a free Canva user!

Good extension for Graphic Designers, Social Media Managers, Content Creators, Marketing Professionals, Teachers, Business Owners, Bloggers and Influencers, Freelancers, ...

## Contributing
Feel free to contribute and improve this extension. The licence is MIT.

## How it works?
For the moment, the extension works like this:  
- Setup a MutationObserver
- Which detects all SVG path that have a given shape
- Get the closest parent element of this `<path>` that is not a SVG/SPAN

This heuristic does not work on all Canva.com element, so maybe you could improve it. Make a PR :)

## Licence
This code is licenced under MIT.

## Other extension
[This extension](https://chromewebstore.google.com/detail/canva-premium-element-rem/nelaapcmnppfpielmfmlhdlgjekaodfl) is supposed to do the same thing, but it doesn't work for me, and it's not open source.
