/**
 * NG Letter Avatar is directive for AngularJS apps
 * @version v2.0.1 - 2015-05-25 * @link https://github.com/uttesh/ngletteravatar
 * @author Uttesh Kumar T.H. <uttesh@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

var catalyst = angular.module('ngLetterAvatar', []);


catalyst.directive('ngLetterAvatar', function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {

        var colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#b49255", "#a94136"];
		
					var charCount = attrs.charcount;
					var data = attrs.data;
					var textColor = '#ffffff';
					var height = attrs.height;
					var width = attrs.width;
					var fontsize = attrs.fontsize;
					var fontWeight = attrs.fontweight;
					var fontFamily = attrs.fontfamily;
					var avatarBorderStyle = attrs.avatarcustomborder;
					var avatardefaultBorder = attrs.avatarborder;
					var defaultBorder = "border:5px solid white";
					
					var shape = attrs.shape;
                    if (!charCount) {
                        charCount = 1;
                    }
                    if (!textColor) {
                        textColor = '#ffffff';
                    }
					if (!fontsize) {
                        fontsize = 30;
                    }
					if (!height) {
                        height = 50;
                    }
					if (!width) {
                        width = 50;
                    }
					if (!fontWeight) {
                        fontWeight = 400;
                    }
					if (!fontFamily) {
                        fontFamily = 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif';
                    }
					var c = data.substr(0, charCount).toUpperCase();
			
					var cobj = getCharacterObject(c,textColor,fontFamily,fontWeight,fontsize);
				var colorIndex = '';
				var color = '';
				if(c.charCodeAt(0) < 65){
					var letters = '0123456789ABCDEF'.split('');
					var _color = '#';
						for (var i = 0; i < 6; i++ ) {
							_color += letters[Math.floor(Math.random() * 16)];
						}
					color = _color;
				}else{
				    colorIndex = Math.floor((c.charCodeAt(0) - 65) % colors.length);
					color =  colors[colorIndex];
				}
				
			
				    var svg = getImgTag(width,height,color);
					svg.append(cobj);
					var svgHtml = window.btoa(unescape(encodeURIComponent($('<div>').append(svg.clone()).html())));	
					var component;
					var base = 'data:image/svg+xml;base64,';
					var _style = '';
					    if(avatarBorderStyle){
							    _style = avatarBorderStyle;
						}else if(avatardefaultBorder){
								_style = defaultBorder;
						}					
					
					if(shape){
						if(shape ==='round'){
							var round_style = "border-radius:30px;"+_style;
							component = "<img src="+base+svgHtml+" style='"+round_style+"' />";
						}
					}else{
						component = "<img src="+base+svgHtml+" style='"+_style+"' />";
					}
					element.append(component);
                }
            };
        });

		function getImgTag(width,height,color){
			var svg = $('<svg></svg>').attr({
						'xmlns': 'http://www.w3.org/2000/svg',
						'pointer-events':'none',
						'width': width,
						'height': height
					}).css({
						'background-color': color,
						'width': width+'px',
						'height': height+'px'
						//'border': '5px solid red'
					});
			return svg;
		}
		
		function getCharacterObject(character,textColor,fontFamily,fontWeight,fontsize){
				var cobj = $('<text text-anchor="middle"></text>').attr({
						'y': '50%',
						'x': '50%',
						'dy' : '0.35em',
						'pointer-events':'auto',
						'fill': textColor,
						'font-family': fontFamily
					}).html(character).css({
						'font-weight': fontWeight,
						'font-size': fontsize+'px',
					});
			return cobj;
		}
    
