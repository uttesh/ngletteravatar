# ng-letter-avatar [![Build Status](https://travis-ci.org/uttesh/ngletteravatar.svg?branch=master)](https://travis-ci.org/uttesh/ngletteravatar)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/uttesh/ngletteravatar?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)


AngularJS directive for simple data avatar like gmail/inbox. 
<a href="http://uttesh.github.io/ngletteravatar/">demo</a>
 preview snaps :
 
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo2.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/numbers.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/special_charaters.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/chinese.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_shape_digit_special.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_chinese_kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border2.png)
## Quick start

```
bower install ngletteravatar or npm install ngletteravatar
```

or alternatively download and include `ngletteravatar.js` after `angular.min.js`. minified version ngletteravatar.min.js is under dist folder.

Add the `ngLetterAvatar` module as a dependency when creating your app, e.g.

```
var app = angular.module('myApp', ['ngLetterAvatar']);`
```

NO NEED TO INJECT in controller directly use in html.

## Rendering


```
<p>
  <small>
     <ng-letter-avatar data="uttesh"></ng-letter-avatar>
  </small>
</p>
```

## Option attirbutes

You can affect how letteravatar operates with the following settings:

name | default | description
-----|---------|------------
`avatarcustombgcolor` | No default value | Using this attribute set the custom color for avatar background.
`dynamic` | false | Set this attribute to true if dynamically avatar needs to be generated on data change.
`rotatedeg` | 0 | Set this attribute required degrees of rotation of the avatar.
`alphabetcolors` | default color set | Using this attribute set the custom colors for the alphabets only.
`charCount` | 1 | Specifies the number of letters to displayed. to generate combined letter avatar of first name and last name which are separated by space then set the value to '2'
`data` |  | Input data i.e. email, names...etc -OR- If image already exists for item, set image URL or image data
`height` | 50px | set the height for the avatar
`width` | 50px | set the width for the avatar
`fontWeight` | 400 | set the font weight for the  avatar
`fontSize` | 30px | set the font size for the letter
`shape` | square  | set the shape for the avatar. set 'round' for rounded avatars
`fontFamily` | HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif | set the font Family of the avatar.
`avatarborder` | false | set the avatarborder to 'true' for the white border to avatar.
`avatarcustomborder` | no default value | using this attribute set the custom style to avatar borders i.e <code> "border:5px solid black"</code>.

## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)

# License

The MIT License

Copyright (c) 2015 Uttesh Kumar T.H. http://www.uttesh.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

