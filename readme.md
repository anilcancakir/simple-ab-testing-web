# Simple A/B Testing Library for Javascript

## How to install?

```shell
npm install
npm run start
```

## How is it working?

The A/B Testing library is working on your page automatically. You need to add just a custom HTML element attribute to
use the library in the HTML element on your page. After that, the library will rock you!

You should name your elements in the page by using `data-ab-variant` attribute. Example

```html

<div data-ab-variant="a">Foo</div>
<div data-ab-variant="b">Bar</div>
```

The library will decide which variant will show to the current user and it will remember the choice in the next visits.
You can add unlimited variants or you can add unlimited HTML elements to one variant. Example

```html

<div data-ab-variant="a">Volvo</div>
<div data-ab-variant="b">Apple</div>
<div data-ab-variant="a">Mercedes</div>
<div data-ab-variant="c">DHL</div>
```

Also, you can add weights to your variants by using `data-ab-weight` attribute easily. The library will choice the
variant by using weights.

```html

<div data-ab-variant="a" data-ab-weight="2">John</div>
```

## How is it tracking?

The library needs user allowance to track events in the document. The library ask for permission in first visit and it
remembers the choice in next visits.

We care #gdpr.
