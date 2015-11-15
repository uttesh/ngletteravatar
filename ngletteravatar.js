/**
 * NG Letter Avatar is directive for AngularJS apps
 * @version v3.0.1 - 2015-09-28 * @link https://github.com/uttesh/ngletteravatar
 * @author Uttesh Kumar T.H. <uttesh@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

var nla = angular.module('ngLetterAvatar', []);

nla.constant('defaultSettings', {
    alphabetcolors: ["#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29", "#0088B9", "#F18636", "#D93A37", "#A6B12E", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"],
    textColor: '#ffffff',
    defaultBorder: 'border:5px solid white',
	fontsize: 30, // unit in pixels
	height: 50, // unit in pixels
	width: 50, // unit in pixels
	fontWeight:400, //
	charCount:1,
	fontFamily:'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
	base:'data:image/svg+xml;base64,',
	radius:'border-radius:30px;'

});

nla.directive('ngLetterAvatar', ['defaultSettings',function(defaultSettings) {
            return {
                restrict: 'AE',
				replace: true,
				scope: {
					alphabetcolors: '=alphabetcolors'
				},
                link: function(scope, element, attrs) {
					
					var params = {
						charCount:isNotNull(attrs.charcount) ? attrs.charcount : defaultSettings.charCount,
						data:attrs.data,
						textColor:defaultSettings.textColor,
						height:isNotNull(attrs.height) ? attrs.height : defaultSettings.height,
						width:isNotNull(attrs.width) ? attrs.width : defaultSettings.width,
						fontsize:isNotNull(attrs.fontsize) ? attrs.fontsize : defaultSettings.fontsize,
						fontWeight:isNotNull(attrs.fontweight) ? attrs.fontweight : defaultSettings.fontWeight,
						fontFamily:isNotNull(attrs.fontfamily) ? attrs.fontfamily : defaultSettings.fontFamily,
						avatarBorderStyle:attrs.avatarcustomborder,
						avatardefaultBorder:attrs.avatarborder,
						defaultBorder:defaultSettings.defaultBorder,
						shape:attrs.shape,
						alphabetcolors: scope.alphabetcolors || defaultSettings.alphabetcolors
					};
					
					if(attrs.alphabetcolors){
						console.log(params.alphabetcolors.length);
					}

					var c = params.data.substr(0, params.charCount).toUpperCase();
					var cobj = getCharacterObject(c,params.textColor,params.fontFamily,params.fontWeight,params.fontsize);
					var colorIndex = '';
					var color = '';
					
					if(c.charCodeAt(0) < 65){
						color = getRandomColors();
					}else{
						colorIndex = Math.floor((c.charCodeAt(0) - 65) % params.alphabetcolors.length);
						color =  params.alphabetcolors[colorIndex];
					}
				
			
				    var svg = getImgTag(params.width,params.height,color);
					svg.append(cobj);
					var lvcomponent = angular.element('<div>').append(svg.clone()).html();
					var svgHtml = window.btoa(unescape(encodeURIComponent(lvcomponent)));	
					var component;
					var base = defaultSettings.base;
					var _style = '';
					    if(params.avatarBorderStyle){
							    _style = params.avatarBorderStyle;
						}else if(params.avatardefaultBorder){
								_style = params.defaultBorder;
						}					
					
					if(params.shape){
						if(params.shape ==='round'){
							var round_style = defaultSettings.radius+_style;
							component = "<img src="+base+svgHtml+" style='"+round_style+"' />";
						}
					}else{
						component = "<img src="+base+svgHtml+" style='"+_style+"' />";
					}
					element.replaceWith(component);
                }
            };
        }]);


        function getRandomColors(){
			var letters = '0123456789ABCDEF'.split('');
						var _color = '#';
							for (var i = 0; i < 6; i++ ) {
								_color += letters[Math.floor(Math.random() * 16)];
							}
			return _color;
		}			
		function isNotNull(obj){
			if(obj){
				return true;
			}
			return false;
		}

		function getImgTag(width,height,color){
			
			var svgTag = angular.element('<svg></svg>')
			                    .attr({
										'xmlns': 'http://www.w3.org/2000/svg',
										'pointer-events':'none',
										'width': width,
										'height': height
									})
								.css({
										'background-color': color,
										'width': width+'px',
										'height': height+'px'
									});
				
			return svgTag;
		}
		
		function getCharacterObject(character,textColor,fontFamily,fontWeight,fontsize){
				 var textTag =	angular.element('<text text-anchor="middle"></text>')
					       .attr({
									'y': '50%',
									'x': '50%',
									'dy' : '0.35em',
									'pointer-events':'auto',
									'fill': textColor,
									'font-family': fontFamily
								})
						   .html(character)
						   .css({
									'font-weight': fontWeight,
									'font-size': fontsize+'px',
								});
				
			return textTag;
		}
    
