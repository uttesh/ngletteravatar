# ng-letter-avatar

[![Join the chat at https://gitter.im/uttesh/ngletteravatar](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/uttesh/ngletteravatar?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
## Quick start

```
bower install ngletteravatar
```


or alternatively download and include `ngletteravatar.js` after `angular.min.js`.

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
`charCount` | 1 | Specifies the number letters to displayed.
`data` |  | input data
`height` | 50px | set the height for the avatar
`width` | 50px | set the width for the avatar
`fontWeight` | 400 | set the font weight for the  avatar
`fontSize` | 30px | set the font size for the letter
`shape` | square  | set the shape for the avatar. set 'round' for rounded avatars
`fontFamily` | HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif | set the font Family of the avatar.


## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)


