/**
 * NG Letter Avatar is directive for AngularJS apps
 * @version v4.0.2 - 2016-04-16 * @link https://github.com/uttesh/ngletteravatar
 * @author Uttesh Kumar T.H. <uttesh@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

var nla = angular.module('ngLetterAvatar', []);

nla.constant('defaultSettings', {
    alphabetcolors: ["#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29", "#0088B9", "#F18636", "#D93A37", "#A6B12E", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"],
    textColor: '#ffffff',
    defaultBorder: 'border:5px solid white',
    triangleup: 'width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid;',
    fontsize: 30, // unit in pixels
    height: 50, // unit in pixels
    width: 50, // unit in pixels
    fontWeight: 400, //
    charCount: 1,
    fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
    base: 'data:image/svg+xml;base64,',
    radius: 'border-radius:50%;',
    custombgcolor: '',
    dynamic: 'false',
    rotatedeg: '0'
});

/**
 * directive to create the avatar
 * @param {type} param1
 * @param {type} param2
 */
nla.directive('ngLetterAvatar', ['defaultSettings', function (defaultSettings) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                alphabetcolors: '=alphabetcolors',
                data: '@'
            },
            link: function (scope, element, attrs) {

                /**
                 * Populate the attribute values to params object
                 * @type type
                 */
                var params = {
                    charCount: attrs.charcount || defaultSettings.charCount,
                    data: attrs.data,
                    textColor: defaultSettings.textColor,
                    height: attrs.height || defaultSettings.height,
                    width: attrs.width || defaultSettings.width,
                    fontsize: attrs.fontsize || defaultSettings.fontsize,
                    fontWeight: attrs.fontweight || defaultSettings.fontWeight,
                    fontFamily: attrs.fontfamily || defaultSettings.fontFamily,
                    avatarBorderStyle: attrs.avatarcustomborder,
                    avatardefaultBorder: attrs.avatarborder,
                    defaultBorder: defaultSettings.defaultBorder,
                    shape: attrs.shape,
                    alphabetcolors: scope.alphabetcolors || defaultSettings.alphabetcolors,
                    avatarCustomBGColor: attrs.avatarcustombgcolor || defaultSettings.custombgcolor,
                    dynamic: attrs.dynamic || defaultSettings.dynamic,
                    rotatedeg: attrs.rotatedeg || defaultSettings.rotatedeg
                };
                
                /**
                 * to generate the avatar dynamically on data change, enable the below function to watch the event
                 */
                if (params.dynamic === 'true') {
                    scope.$watch('data', function () {
                        _generateLetterAvatar();
                    });
                } else {
                    _generateLetterAvatar();
                }

                function _generateLetterAvatar() {
                    var c = '';
                    if (params.charCount == 2) {
                        var _data = getFirstAndLastName(scope.data.toUpperCase());
                        if (_data) {
                            c = _data;
                        } else {
                            c = scope.data.substr(0, params.charCount).toUpperCase();
                        }
                    } else {
                        c = scope.data.substr(0, params.charCount).toUpperCase();
                    }
                    var cobj = getCharacterObject(c, params.textColor, params.fontFamily, params.fontWeight, params.fontsize);
                    var colorIndex = '';
                    var color = '';

                    /**
                     * Populate the colors according to attributes
                     */
                    if (c.charCodeAt(0) < 65) {
                        color = getRandomColors();
                    } else {
                        colorIndex = Math.floor((c.charCodeAt(0) - 65) % params.alphabetcolors.length);
                        color = params.alphabetcolors[colorIndex];
                    }

                    if (params.avatarCustomBGColor) {
                        color = params.avatarCustomBGColor;
                    }

                    var svg = getImgTag(params.width, params.height, color);
                    svg.append(cobj);
                    var lvcomponent = angular.element('<div>').append(svg.clone()).html();
                    var svgHtml = window.btoa(unescape(encodeURIComponent(lvcomponent)));
                    var component;
                    var base = defaultSettings.base;
                    var _style = '';
                    if (params.avatarBorderStyle) {
                        _style = params.avatarBorderStyle;
                    } else if (params.avatardefaultBorder) {
                        _style = params.defaultBorder;
                    }
                    
                    if(params.rotatedeg != '0'){
                        _style = '-ms-transform: rotate('+params.rotatedeg+'deg); -webkit-transform: rotate('+params.rotatedeg+'deg); transform: rotate('+params.rotatedeg+'deg)';
                    }

                    if (params.shape) {
                        if (params.shape === 'round') {
                            var round_style = defaultSettings.radius + _style;
                            component = "<img src=" + base + svgHtml + " style='" + round_style + "' title='"+scope.data+"' />";
                        }
                    } else {
                        component = "<img src=" + base + svgHtml + " style='" + _style + "' title='"+scope.data+"' />";
                    }

                    if (params.dynamic === 'true') {
                        element.empty();
                        element.append(component);
                    } else {
                        element.replaceWith(component);
                    }
                }
            }
        };
    }]);
/**
 * Get the random colors 
 * @returns {String}
 */
function getRandomColors() {
    var letters = '0123456789ABCDEF'.split('');
    var _color = '#';
    for (var i = 0; i < 6; i++) {
        _color += letters[Math.floor(Math.random() * 16)];
    }
    return _color;
}
/**
 * get the first name and last name first letters and combined and form the letter avatar
 * @param {type} data
 * @returns {unresolved}
 */
function getFirstAndLastName(data) {
    var names = data.split(" ");
    if (names && names.length >= 2) {
        var firstName = names[0];
        var lastName = names[1];
        if (firstName && lastName) {
            var text = firstName.substr(0, 1) + lastName.substr(0, 1);
            return text;
        } else {
            return data.substr(0, 2);
        }
    }
}

/**
 * Populate the svg tag which will used for the avatar generation
 * @param {type} width
 * @param {type} height
 * @param {type} color
 * @returns {unresolved}
 */
function getImgTag(width, height, color) {

    var svgTag = angular.element('<svg></svg>')
            .attr({
                'xmlns': 'http://www.w3.org/2000/svg',
                'pointer-events': 'none',
                'width': width,
                'height': height
            })
            .css({
                'background-color': color,
                'width': width + 'px',
                'height': height + 'px'
            });

    return svgTag;
}

/**
 *  Generate the Letter tag by using the svg text element
 * @param {type} character
 * @param {type} textColor
 * @param {type} fontFamily
 * @param {type} fontWeight
 * @param {type} fontsize
 * @returns {unresolved}
 */
function getCharacterObject(character, textColor, fontFamily, fontWeight, fontsize) {
    var textTag = angular.element('<text text-anchor="middle"></text>')
            .attr({
                'y': '50%',
                'x': '50%',
                'dy': '0.35em',
                //'stroke': '#000000',
                'pointer-events': 'auto',
                'fill': textColor,
                'font-family': fontFamily
            })
            .html(character)
            .css({
                'font-weight': fontWeight,
                'font-size': fontsize + 'px',
            });

    return textTag;
}

