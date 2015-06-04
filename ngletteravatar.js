'use strict';

var catalyst = angular.module('ngLetterAvatar', []);


catalyst.directive('ngLetterAvatar', function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {

							// Defining Colors
        var colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#b49255", "#a94136"];

					var charCount = attrs.charcount;
					var data = attrs.data;
					var textColor = '#ffffff';
					var height = attrs.height;
					var width = attrs.width;
					var fontSize = attrs.fontSize;
					var fontWeight = attrs.fontweight;
					var fontFamily = attrs.fontfamily;
					var shape = attrs.shape;
                    if (!charCount) {
                        charCount = 1;
                    }
                    if (!textColor) {
                        textColor = '#ffffff';
                    }
					if (!fontSize) {
                        fontSize = 30;
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
					console.log('character'+c);
			
					var cobj = $('<text text-anchor="middle"></text>').attr({
						'y': '50%',
						'x': '50%',
						'dy' : '0.35em',
						'pointer-events':'auto',
						'fill': textColor,
						'font-family': fontFamily
					}).html(c).css({
						'font-weight': fontWeight,
						'font-size': fontSize+'px',
					});
					
				var colorIndex = Math.floor((c.charCodeAt(0) - 65) % colors.length);
			
				var svg = $('<svg></svg>').attr({
					'xmlns': 'http://www.w3.org/2000/svg',
					'pointer-events':'none',
					'width': width,
					'height': height
				}).css({
					'background-color': colors[colorIndex],
					'width': width+'px',
					'height': height+'px'
				});
					svg.append(cobj);
					var svgHtml = window.btoa(unescape(encodeURIComponent($('<div>').append(svg.clone()).html())));	
					var component;
					var base = 'data:image/svg+xml;base64,';
					if(shape){
						if(shape ==='round'){
						 	component = "<img src="+base+svgHtml+" style='border-radius:30px;'/>";
						}
					}else{
						    component = "<img src="+base+svgHtml+" />";
					}
					element.append(component);
                }
            };
        });

    
