(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 54
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.About-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  });
  $('.About-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  });
})(jQuery); // End of use strict

/***/ })
/******/ ]);
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * Start Bootstrap - Agency v4.1.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
!function (a) {
  "use strict";
  a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var o = a(this.hash);if ((o = o.length ? o : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({ scrollTop: o.offset().top - 54 }, 1e3, "easeInOutExpo"), !1;
    }
  }), a(".js-scroll-trigger").click(function () {
    a(".navbar-collapse").collapse("hide");
  }), a("body").scrollspy({ target: "#mainNav", offset: 56 });var o = function () {
    a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink");
  };o(), a(window).scroll(o), a(".About-modal").on("show.bs.modal", function (o) {
    a(".navbar").addClass("d-none");
  }), a(".About-modal").on("hidden.bs.modal", function (o) {
    a(".navbar").removeClass("d-none");
  });
}(jQuery);

/***/ })
/******/ ]);
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function () {
    var playerOneCode = 1;
    var playerTwoCode = 2;
    var redBlocks = 0;
    var greenBlocks = 0;
    var isMillRed = false;
    var isMillGreen = false;
    var isActiveRed = false;
    var isActiveGreen = false;
    var isGreenThreeLeft = false;
    var isRedThreeLeft = false;
    var blockWidth = 16;
    var strokeWidth = 2;
    var lastX = 0;
    var lastY = 0;
    var lastCenterX = 0;
    var lastCenterY = 0;
    var Turn = true;
    var rows = 7;
    var columns = 7;
    var clickSound;
    var positionMatrix = new Array(7);
    var referenceMatrix = new Array(7);
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var playerContract;
    //web3.eth.getAccounts().then(e => { 
    //firstAccount = e[0];
    //console.log("A: " + firstAccount);
    //}) 
    // var account1 = document.getElementById("address").value;

    $("#SubmitBut").click(function () {
        var account1 = document.getElementById("address1").value;
        var account2 = document.getElementById("address2").value;
        var validated = Check(account1, account2);

        if (validated) {
            playerContract = new PlayerContract(account1);
            if (EmbarkJS.isNewWeb3()) {

                MorabarabaContract.methods.NewGame(account1, account2).call({ from: account1, gas: 3000000 }, function (err, value) {
                    alert(value);
                    if (!err) {
                        var section = $(this).attr("PlaySection");
                        $("html, body").animate({
                            scrollTop: $(section).offset().top
                        });
                        initializeGame();
                    }

                    // Setup the game board etc..   
                });
            }
        } else {}

        return false;
    });

    //validates if the provided input is null or not
    function Check(account1, account2) {
        var valid = true;
        if (account1 == "" && account2.length > 0 || account1.length == 0) {
            alert("Player 1's address required");
            valid = false;
        }
        if (account1 > 0 && account2 == "" || account2.length == 0) {
            alert("Player 2's account required");
            valid = false;
        }
        return valid;
    }
    //For when the user doesnt enter all addresses required for playing the game
    function ReShowModal(show) {
        if (show) {
            $("#myModal").modal("show");
        } else {
            $("#myModal").modal("hide");
        }
    }
    function initializeGame() {
        //clickSound = new sound("");
        initializeArray();
        alert("Player 1 turns first followed by Player 2");
    }

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
    }

    function initializeArray() {
        for (var i = 0; i < 7; i++) {
            referenceMatrix[i] = new Array(7);
            positionMatrix[i] = new Array(7);
        }

        for (var j = 0; j < 7; j++) {
            for (var k = 0; k < 7; k++) {
                //Make all diagonal elements + boundary + center to zero
                if (j == 3 || k == 3 || j == k || j + k == 6) {
                    referenceMatrix[j][k] = 0;
                    positionMatrix[j][k] = 0;
                } else {
                    referenceMatrix[j][k] = -1;
                    positionMatrix[j][k] = -1;
                }
            }
        }
        //Finally making center also -1
        referenceMatrix[3][3] = -1;
        positionMatrix[3][3] = -1;
    }

    function makeMove(X, Y) {
        var yCenter;
        var xCenter;

        switch (X) {
            case 0:
                {
                    switch (Y) {
                        case 0:
                            {
                                yCenter = 25;
                                xCenter = 25;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 25;
                                break;
                            }
                        case 6:
                            {
                                yCenter = 525;
                                xCenter = 25;
                                break;
                            }
                    }
                    break;
                }
            case 1:
                {
                    switch (Y) {
                        case 1:
                            {
                                yCenter = 115;
                                xCenter = 115;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 115;
                                break;
                            }
                        case 5:
                            {
                                yCenter = 435;
                                xCenter = 115;
                                break;
                            }
                    }
                    break;
                }
            case 2:
                {
                    switch (Y) {
                        case 2:
                            {
                                yCenter = 195;
                                xCenter = 195;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 195;
                                break;
                            }
                        case 4:
                            {
                                yCenter = 355;
                                xCenter = 195;
                                break;
                            }
                    }
                    break;
                }
            case 3:
                {
                    switch (Y) {
                        case 0:
                            {
                                yCenter = 25;
                                xCenter = 275;
                                break;
                            }
                        case 1:
                            {
                                yCenter = 115;
                                xCenter = 275;
                                break;
                            }
                        case 2:
                            {
                                yCenter = 195;
                                xCenter = 275;
                                break;
                            }
                        case 4:
                            {
                                yCenter = 355;
                                xCenter = 275;
                                break;
                            }
                        case 5:
                            {
                                yCenter = 435;
                                xCenter = 275;
                                break;
                            }
                        case 6:
                            {
                                yCenter = 525;
                                xCenter = 275;
                                break;
                            }
                    }
                    break;
                }
            case 4:
                {
                    switch (Y) {
                        case 2:
                            {
                                yCenter = 195;
                                xCenter = 355;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 355;
                                break;
                            }
                        case 4:
                            {
                                yCenter = 355;
                                xCenter = 355;
                                break;
                            }
                    }
                    break;
                }
            case 5:
                {
                    switch (Y) {
                        case 1:
                            {
                                yCenter = 115;
                                xCenter = 435;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 435;
                                break;
                            }
                        case 5:
                            {
                                yCenter = 435;
                                xCenter = 435;
                                break;
                            }
                    }
                    break;
                }
            case 6:
                {
                    switch (Y) {
                        case 0:
                            {
                                yCenter = 25;
                                xCenter = 525;
                                break;
                            }
                        case 3:
                            {
                                yCenter = 275;
                                xCenter = 525;
                                break;
                            }
                        case 6:
                            {
                                yCenter = 525;
                                xCenter = 525;
                                break;
                            }
                    }
                    break;
                }
        }

        //////clickSound.play();
        if (!Turn) {
            //Player two made a move, hence made a block red.
            redBlocks++;
            positionMatrix[X][Y] = 2;
            context.beginPath();
            context.arc(xCenter, yCenter, blockWidth, 0, 2 * Math.PI, false);
            context.fillStyle = '#F44336';
            context.fill();
            context.lineWidth = strokeWidth;
            context.strokeStyle = '#003300';
            context.stroke();
            document.getElementById("turn").innerHTML = "P1";
        } else {
            //Player one just made a move, hence made a block green
            context.beginPath();
            context.arc(xCenter, yCenter, blockWidth, 0, 2 * Math.PI, false);
            context.fillStyle = '#2E7D32';
            context.fill();
            context.lineWidth = strokeWidth;
            context.strokeStyle = '#003300';
            context.stroke();
            //alert("turn").innerHTML = "P2";
        }
    }

    canvas.addEventListener("click", mouseClick);

    function mouseClick(event) {
        //Get the X and Y co-ordinate at the point of touch in canvas
        var X = event.clientX - canvas.getBoundingClientRect().left;
        var Y = event.clientY - canvas.getBoundingClientRect().top;

        //Check if touch event occurs in canvas or not
        if (X >= 0 && X <= 550 && Y >= 0 && Y <= 550) {
            if (X >= 0 && X <= 75 && Y >= 0 && Y <= 75) {
                makeMove(0, 0);
            } else if (X >= 235 && X <= 315 && Y >= 0 && Y <= 75) {
                makeMove(3, 0);
            } else if (X >= 475 && X <= 550 && Y >= 0 && Y <= 75) {
                makeMove(6, 0);
            } else if (X >= 75 && X <= 155 && Y >= 75 && Y <= 155) {
                makeMove(1, 1);
            } else if (X >= 235 && X <= 315 && Y >= 75 && Y <= 155) {
                makeMove(3, 1);
            } else if (X >= 395 && X <= 475 && Y >= 75 && Y <= 155) {
                makeMove(5, 1);
            } else if (X >= 155 && X <= 235 && Y >= 155 && Y <= 235) {
                makeMove(2, 2);
            } else if (X >= 235 && X <= 315 && Y >= 155 && Y <= 235) {
                makeMove(3, 2);
            } else if (X >= 315 && X <= 395 && Y >= 155 && Y <= 235) {
                makeMove(4, 2);
            } else if (X >= 0 && X <= 75 && Y >= 235 && Y <= 315) {
                makeMove(0, 3);
            } else if (X >= 75 && X <= 155 && Y >= 235 && Y <= 315) {
                makeMove(1, 3);
            } else if (X >= 155 && X <= 235 && Y >= 235 && Y <= 315) {
                makeMove(2, 3);
            } else if (X >= 315 && X <= 395 && Y >= 235 && Y <= 315) {
                makeMove(4, 3);
            } else if (X >= 395 && X <= 475 && Y >= 235 && Y <= 315) {
                makeMove(5, 3);
            } else if (X >= 475 && X <= 550 && Y >= 235 && Y <= 315) {
                makeMove(6, 3);
            } else if (X >= 155 && X <= 235 && Y >= 315 && Y <= 395) {
                makeMove(2, 4);
            } else if (X >= 235 && X <= 315 && Y >= 315 && Y <= 395) {
                makeMove(3, 4);
            } else if (X >= 315 && X <= 395 && Y >= 315 && Y <= 395) {
                makeMove(4, 4);
            } else if (X >= 75 && X <= 155 && Y >= 395 && Y <= 475) {
                makeMove(1, 5);
            } else if (X >= 235 && X <= 315 && Y >= 395 && Y <= 475) {
                makeMove(3, 5);
            } else if (X >= 395 && X <= 475 && Y >= 395 && Y <= 475) {
                makeMove(5, 5);
            } else if (X >= 0 && X <= 75 && Y >= 475 && Y <= 550) {
                makeMove(0, 6);
            } else if (X >= 235 && X <= 315 && Y >= 475 && Y <= 550) {
                makeMove(3, 6);
            } else if (X >= 475 && X <= 550 && Y >= 475 && Y <= 550) {
                makeMove(6, 6);
            }
        }
    }

    function updateLastParam(xCenter, yCenter, X, Y) {
        lastCenterX = xCenter;
        lastCenterY = yCenter;
        lastX = X;
        lastY = Y;
    }

    function turnOffActive(x, y) {
        ////////clickSound.play();
        context.beginPath();
        context.arc(x, y, blockWidth, 0, 2 * Math.PI, false);
        if (isActiveRed) {
            context.fillStyle = '#F44336';
        } else {
            context.fillStyle = '#2E7D32';
        }
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();
        isActiveRed = false;
        isActiveGreen = false;
    }

    function turnOffMill() {
        isMillGreen = false;
        isMillRed = false;
    }

    function clearBlock(xI, yI) {
        ////////clickSound.play();
        //Clear canvas at previous position
        context.clearRect(xI - blockWidth - strokeWidth, yI - blockWidth - strokeWidth, 2 * (blockWidth + strokeWidth), 2 * (blockWidth + strokeWidth));
        positionMatrix[lastX][lastY] = 0;
    }

    function drawBlock(x, y, X, Y) {
        context.beginPath();
        context.arc(x, y, blockWidth, 0, 2 * Math.PI, false);
        if (isActiveRed) {
            positionMatrix[X][Y] = 2;
            context.fillStyle = '#F44336';
            if (checkMill(X, Y, 2)) {
                isMillRed = true;
                document.getElementById("message").innerHTML = "Click on green block to remove it.";
            }
        } else {
            positionMatrix[X][Y] = 1;
            context.fillStyle = '#2E7D32';
            if (checkMill(X, Y, 1)) {
                isMillGreen = true;
                document.getElementById("message").innerHTML = "Click on red block to remove it.";
            }
        }
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();

        isActiveGreen = false;
        isActiveRed = false;
        update();
    }

    function update() {
        //Update player turn

    }
});

$(window).on('load', function () {
    //For future use
});

/***/ })
/******/ ]);
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function ($) {

  var createdElements = [];

  var defaults = {
    options: {
      prependExistingHelpBlock: false,
      sniffHtml: true, // sniff for 'required', 'maxlength', etc
      preventSubmit: true, // stop the form submit event from firing if validation fails
      submitError: false, // function called if there is an error when trying to submit
      submitSuccess: false, // function called just before a successful submit event is sent to the server
      semanticallyStrict: false, // set to true to tidy up generated HTML output
      autoAdd: {
        helpBlocks: true
      },
      filter: function () {
        // return $(this).is(":visible"); // only validate elements you can see
        return true; // validate everything
      }
    },
    methods: {
      init: function (options) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique($siblingElements.map(function () {
          return $(this).parents("form")[0];
        }).toArray());

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
                $controlGroup = $this.parents(".form-group").first();
            if ($controlGroup.hasClass("warning")) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function () {

          // Get references to everything we're interested in
          var $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(),
              $form = $this.parents("form").first(),
              validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
            $helpBlock = $('<div class="help-block" />');
            $controlGroup.find('.controls').append($helpBlock);
            createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = $this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax");
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = $this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin");
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationValidemailMessage", message);
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            });

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function (i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function (i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });

            validatorNamesToInspect = newValidatorNamesToInspect;
          } while (validatorNamesToInspect.length > 0);

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = message !== undefined;
            var foundValidator = false;
            message = message ? message : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->";

            $.each(settings.validatorTypes, function (validatorType, validatorTemplate) {
              if (validators[validatorType] === undefined) {
                validators[validatorType] = [];
              }
              if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                validators[validatorType].push($.extend(true, {
                  name: formatValidatorName(validatorTemplate.name),
                  message: message
                }, validatorTemplate.init($this, el)));
                foundValidator = true;
              }
            });

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(settings.validatorTypes, function (validatorTemplateType, validatorTemplate) {
                  if (validators[validatorTemplateType] === undefined) {
                    validators[validatorTemplateType] = [];
                  }
                  if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                    $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                    validators[validatorType].push($.extend(validator, validatorTemplate.init($this, el)));
                    foundValidator = true;
                  }
                });
              }
            }

            if (!foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data("original-contents", $helpBlock.data("original-contents") ? $helpBlock.data("original-contents") : $helpBlock.html());

          $helpBlock.data("original-role", $helpBlock.data("original-role") ? $helpBlock.data("original-role") : $helpBlock.attr("role"));

          $controlGroup.data("original-classes", $controlGroup.data("original-clases") ? $controlGroup.data("original-classes") : $controlGroup.attr("class"));

          $this.data("original-aria-invalid", $this.data("original-aria-invalid") ? $this.data("original-aria-invalid") : $this.attr("aria-invalid"));

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind("validation.validation", function (event, params) {

            var value = getValue($this);

            // Get a list of the errors to apply
            var errorsFound = [];

            $.each(validators, function (validatorType, validatorTypeArray) {
              if (value || value.length || params && params.includeEmpty || !!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting) {
                $.each(validatorTypeArray, function (i, validator) {
                  if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                    errorsFound.push(validator.message);
                  }
                });
              }
            });

            return errorsFound;
          });

          $this.bind("getValidators.validation", function () {
            return validators;
          });

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind("submit.validation", function () {
            return $this.triggerHandler("change.validation", {
              submitting: true
            });
          });
          $this.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (e, params) {

            var value = getValue($this);

            var errorsFound = [];

            $controlGroup.find("input,textarea,select").each(function (i, el) {
              var oldCount = errorsFound.length;
              $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                errorsFound.push(message);
              });
              if (errorsFound.length > oldCount) {
                $(el).attr("aria-invalid", "true");
              } else {
                var original = $this.data("original-aria-invalid");
                $(el).attr("aria-invalid", original !== undefined ? original : false);
              }
            });

            $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

            errorsFound = $.unique(errorsFound.sort());

            // Were there any errors?
            if (errorsFound.length) {
              // Better flag it up as a warning.
              $controlGroup.removeClass("success error").addClass("warning");

              // How many errors did we find?
              if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                // Only one? Being strict? Just output it.
                $helpBlock.html(errorsFound[0] + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              } else {
                // Multiple? Being sloppy? Glue them together into an UL.
                $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              }
            } else {
              $controlGroup.removeClass("warning error success");
              if (value.length > 0) {
                $controlGroup.addClass("success");
              }
              $helpBlock.html($helpBlock.data("original-contents"));
            }

            if (e.type === "blur") {
              $controlGroup.removeClass("success");
            }
          });
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy: function () {

        return this.each(function () {

          var $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

          // remove our events
          $this.unbind('.validation'); // events are namespaced.
          // reset help text
          $helpBlock.html($helpBlock.data("original-contents"));
          // reset classes
          $controlGroup.attr("class", $controlGroup.data("original-classes"));
          // reset aria
          $this.attr("aria-invalid", $this.data("original-aria-invalid"));
          // reset role
          $helpBlock.attr("role", $this.data("original-role"));
          // remove all elements we created
          if (createdElements.indexOf($helpBlock[0]) > -1) {
            $helpBlock.remove();
          }
        });
      },
      collectErrors: function (includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {
            includeEmpty: true
          });
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;
      },
      hasErrors: function () {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat($(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {
            submitting: true
          }) : []);
        });

        return errorMessages.length > 0;
      },
      override: function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
    validatorTypes: {
      callback: {
        name: "callback",
        init: function ($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(validator.callback, window, $this, value, function (data) {
              if (rrjqbvValidator.lastValue === data.value) {
                rrjqbvValidator.lastValid = data.valid;
                if (data.message) {
                  rrjqbvValidator.message = data.message;
                }
                rrjqbvValidator.lastFinished = true;
                rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  rrjqbvThis.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if ("" + validator.lastValue === "" + value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if ("" + validator.lastValue === "" + data.value) {
                  validator.lastValid = !!data.valid;
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      regex: {
        name: "regex",
        init: function ($this, name) {
          return {
            regex: regexFromString($this.data("validation" + name + "Regex"))
          };
        },
        validate: function ($this, value, validator) {
          return !validator.regex.test(value) && !validator.negative || validator.regex.test(value) && validator.negative;
        }
      },
      required: {
        name: "required",
        init: function ($this, name) {
          return {};
        },
        validate: function ($this, value, validator) {
          return !!(value.length === 0 && !validator.negative) || !!(value.length > 0 && validator.negative);
        },
        blockSubmit: true
      },
      match: {
        name: "match",
        init: function ($this, name) {
          var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
          element.bind("validation.validation", function () {
            $this.trigger("change.validation", {
              submitting: true
            });
          });
          return {
            "element": element
          };
        },
        validate: function ($this, value, validator) {
          return value !== validator.element.val() && !validator.negative || value === validator.element.val() && validator.negative;
        },
        blockSubmit: true
      },
      max: {
        name: "max",
        init: function ($this, name) {
          return {
            max: $this.data("validation" + name + "Max")
          };
        },
        validate: function ($this, value, validator) {
          return parseFloat(value, 10) > parseFloat(validator.max, 10) && !validator.negative || parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative;
        }
      },
      min: {
        name: "min",
        init: function ($this, name) {
          return {
            min: $this.data("validation" + name + "Min")
          };
        },
        validate: function ($this, value, validator) {
          return parseFloat(value) < parseFloat(validator.min) && !validator.negative || parseFloat(value) >= parseFloat(validator.min) && validator.negative;
        }
      },
      maxlength: {
        name: "maxlength",
        init: function ($this, name) {
          return {
            maxlength: $this.data("validation" + name + "Maxlength")
          };
        },
        validate: function ($this, value, validator) {
          return value.length > validator.maxlength && !validator.negative || value.length <= validator.maxlength && validator.negative;
        }
      },
      minlength: {
        name: "minlength",
        init: function ($this, name) {
          return {
            minlength: $this.data("validation" + name + "Minlength")
          };
        },
        validate: function ($this, value, validator) {
          return value.length < validator.minlength && !validator.negative || value.length >= validator.minlength && validator.negative;
        }
      },
      maxchecked: {
        name: "maxchecked",
        init: function ($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            maxchecked: $this.data("validation" + name + "Maxchecked"),
            elements: elements
          };
        },
        validate: function ($this, value, validator) {
          return validator.elements.filter(":checked").length > validator.maxchecked && !validator.negative || validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative;
        },
        blockSubmit: true
      },
      minchecked: {
        name: "minchecked",
        init: function ($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            minchecked: $this.data("validation" + name + "Minchecked"),
            elements: elements
          };
        },
        validate: function ($this, value, validator) {
          return validator.elements.filter(":checked").length < validator.minchecked && !validator.negative || validator.elements.filter(":checked").length >= validator.minchecked && validator.negative;
        },
        blockSubmit: true
      }
    },
    builtInValidators: {
      email: {
        name: "Email",
        type: "shortcut",
        shortcut: "validemail"
      },
      validemail: {
        name: "Validemail",
        type: "regex",
        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
        message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
      },
      passwordagain: {
        name: "Passwordagain",
        type: "match",
        match: "password",
        message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
      },
      positive: {
        name: "Positive",
        type: "shortcut",
        shortcut: "number,positivenumber"
      },
      negative: {
        name: "Negative",
        type: "shortcut",
        shortcut: "number,negativenumber"
      },
      number: {
        name: "Number",
        type: "regex",
        regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
        message: "Must be a number<!-- data-validator-number-message to override -->"
      },
      integer: {
        name: "Integer",
        type: "regex",
        regex: "[+-]?\\\d+",
        message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
      },
      positivenumber: {
        name: "Positivenumber",
        type: "min",
        min: 0,
        message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
      },
      negativenumber: {
        name: "Negativenumber",
        type: "max",
        max: 0,
        message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
      },
      required: {
        name: "Required",
        type: "required",
        message: "This is required<!-- data-validator-required-message to override -->"
      },
      checkone: {
        name: "Checkone",
        type: "minchecked",
        minchecked: 1,
        message: "Check at least one option<!-- data-validation-checkone-message to override -->"
      }
    }
  };

  var formatValidatorName = function (name) {
    return name.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
      return p1 + p2.toUpperCase();
    });
  };

  var getValue = function ($this) {
    // Extract the value we're talking about
    var value = $this.val();
    var type = $this.attr("type");
    if (type === "checkbox") {
      value = $this.is(":checked") ? value : "";
    }
    if (type === "radio") {
      value = $('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "";
    }
    return value;
  };

  function regexFromString(inputstring) {
    return new RegExp("^" + inputstring + "$");
  }

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
   **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

  $.fn.jqBootstrapValidation = function (method) {

    if (defaults.methods[method]) {
      return defaults.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return defaults.methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.jqBootstrapValidation');
      return null;
    }
  };

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
  };
})(jQuery);

/***/ })
/******/ ]);
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * Start Bootstrap - Agency v4.1.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
!function (a) {
  var e = [],
      t = { options: { prependExistingHelpBlock: !1, sniffHtml: !0, preventSubmit: !0, submitError: !1, submitSuccess: !1, semanticallyStrict: !1, autoAdd: { helpBlocks: !0 }, filter: function () {
        return !0;
      } }, methods: { init: function (o) {
        var r = a.extend(!0, {}, t);r.options = a.extend(!0, r.options, o);var l = a.unique(this.map(function () {
          return a(this).parents("form")[0];
        }).toArray());return a(l).bind("submit", function (e) {
          var t = a(this),
              i = 0,
              n = t.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);n.trigger("submit.validation").trigger("validationLostFocus.validation"), n.each(function (e, t) {
            var n = a(t).parents(".form-group").first();n.hasClass("warning") && (n.removeClass("warning").addClass("error"), i++);
          }), n.trigger("validationLostFocus.validation"), i ? (r.options.preventSubmit && e.preventDefault(), t.addClass("error"), a.isFunction(r.options.submitError) && r.options.submitError(t, e, n.jqBootstrapValidation("collectErrors", !0))) : (t.removeClass("error"), a.isFunction(r.options.submitSuccess) && r.options.submitSuccess(t, e));
        }), this.each(function () {
          var t = a(this),
              o = t.parents(".form-group").first(),
              l = o.find(".help-block").first(),
              s = t.parents("form").first(),
              d = [];if (!l.length && r.options.autoAdd && r.options.autoAdd.helpBlocks && (l = a('<div class="help-block" />'), o.find(".controls").append(l), e.push(l[0])), r.options.sniffHtml) {
            var c = "";if (void 0 !== t.attr("pattern") && (c = "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e", t.data("validationPatternMessage") && (c = t.data("validationPatternMessage")), t.data("validationPatternMessage", c), t.data("validationPatternRegex", t.attr("pattern"))), void 0 !== t.attr("max") || void 0 !== t.attr("aria-valuemax")) {
              var v = void 0 !== t.attr("max") ? t.attr("max") : t.attr("aria-valuemax");c = "Too high: Maximum of '" + v + "'\x3c!-- data-validation-max-message to override --\x3e", t.data("validationMaxMessage") && (c = t.data("validationMaxMessage")), t.data("validationMaxMessage", c), t.data("validationMaxMax", v);
            }if (void 0 !== t.attr("min") || void 0 !== t.attr("aria-valuemin")) {
              var m = void 0 !== t.attr("min") ? t.attr("min") : t.attr("aria-valuemin");c = "Too low: Minimum of '" + m + "'\x3c!-- data-validation-min-message to override --\x3e", t.data("validationMinMessage") && (c = t.data("validationMinMessage")), t.data("validationMinMessage", c), t.data("validationMinMin", m);
            }void 0 !== t.attr("maxlength") && (c = "Too long: Maximum of '" + t.attr("maxlength") + "' characters\x3c!-- data-validation-maxlength-message to override --\x3e", t.data("validationMaxlengthMessage") && (c = t.data("validationMaxlengthMessage")), t.data("validationMaxlengthMessage", c), t.data("validationMaxlengthMaxlength", t.attr("maxlength"))), void 0 !== t.attr("minlength") && (c = "Too short: Minimum of '" + t.attr("minlength") + "' characters\x3c!-- data-validation-minlength-message to override --\x3e", t.data("validationMinlengthMessage") && (c = t.data("validationMinlengthMessage")), t.data("validationMinlengthMessage", c), t.data("validationMinlengthMinlength", t.attr("minlength"))), void 0 === t.attr("required") && void 0 === t.attr("aria-required") || (c = r.builtInValidators.required.message, t.data("validationRequiredMessage") && (c = t.data("validationRequiredMessage")), t.data("validationRequiredMessage", c)), void 0 !== t.attr("type") && "number" === t.attr("type").toLowerCase() && (c = r.builtInValidators.number.message, t.data("validationNumberMessage") && (c = t.data("validationNumberMessage")), t.data("validationNumberMessage", c)), void 0 !== t.attr("type") && "email" === t.attr("type").toLowerCase() && (c = "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e", t.data("validationValidemailMessage") ? c = t.data("validationValidemailMessage") : t.data("validationEmailMessage") && (c = t.data("validationEmailMessage")), t.data("validationValidemailMessage", c)), void 0 !== t.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' required\x3c!-- data-validation-minchecked-message to override --\x3e", t.data("validationMincheckedMessage") && (c = t.data("validationMincheckedMessage")), t.data("validationMincheckedMessage", c), t.data("validationMincheckedMinchecked", t.attr("minchecked"))), void 0 !== t.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' required\x3c!-- data-validation-maxchecked-message to override --\x3e", t.data("validationMaxcheckedMessage") && (c = t.data("validationMaxcheckedMessage")), t.data("validationMaxcheckedMessage", c), t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked")));
          }void 0 !== t.data("validation") && (d = t.data("validation").split(",")), a.each(t.data(), function (a, e) {
            var t = a.replace(/([A-Z])/g, ",$1").split(",");"validation" === t[0] && t[1] && d.push(t[1]);
          });var u = d,
              g = [];do {
            a.each(d, function (a, e) {
              d[a] = i(e);
            }), d = a.unique(d), g = [], a.each(u, function (e, n) {
              if (void 0 !== t.data("validation" + n + "Shortcut")) a.each(t.data("validation" + n + "Shortcut").split(","), function (a, e) {
                g.push(e);
              });else if (r.builtInValidators[n.toLowerCase()]) {
                var o = r.builtInValidators[n.toLowerCase()];"shortcut" === o.type.toLowerCase() && a.each(o.shortcut.split(","), function (a, e) {
                  e = i(e), g.push(e), d.push(e);
                });
              }
            }), u = g;
          } while (u.length > 0);var h = {};a.each(d, function (e, n) {
            var o = t.data("validation" + n + "Message"),
                l = void 0 !== o,
                s = !1;if (o = o || "'" + n + "' validation failed \x3c!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message --\x3e", a.each(r.validatorTypes, function (e, r) {
              void 0 === h[e] && (h[e] = []), s || void 0 === t.data("validation" + n + i(r.name)) || (h[e].push(a.extend(!0, { name: i(r.name), message: o }, r.init(t, n))), s = !0);
            }), !s && r.builtInValidators[n.toLowerCase()]) {
              var d = a.extend(!0, {}, r.builtInValidators[n.toLowerCase()]);l && (d.message = o);var c = d.type.toLowerCase();"shortcut" === c ? s = !0 : a.each(r.validatorTypes, function (e, o) {
                void 0 === h[e] && (h[e] = []), s || c !== e.toLowerCase() || (t.data("validation" + n + i(o.name), d[o.name.toLowerCase()]), h[c].push(a.extend(d, o.init(t, n))), s = !0);
              });
            }s || a.error("Cannot find validation info for '" + n + "'");
          }), l.data("original-contents", l.data("original-contents") ? l.data("original-contents") : l.html()), l.data("original-role", l.data("original-role") ? l.data("original-role") : l.attr("role")), o.data("original-classes", o.data("original-clases") ? o.data("original-classes") : o.attr("class")), t.data("original-aria-invalid", t.data("original-aria-invalid") ? t.data("original-aria-invalid") : t.attr("aria-invalid")), t.bind("validation.validation", function (e, i) {
            var o = n(t),
                l = [];return a.each(h, function (e, n) {
              (o || o.length || i && i.includeEmpty || r.validatorTypes[e].blockSubmit && i && i.submitting) && a.each(n, function (a, i) {
                r.validatorTypes[e].validate(t, o, i) && l.push(i.message);
              });
            }), l;
          }), t.bind("getValidators.validation", function () {
            return h;
          }), t.bind("submit.validation", function () {
            return t.triggerHandler("change.validation", { submitting: !0 });
          }), t.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (e, i) {
            var d = n(t),
                c = [];o.find("input,textarea,select").each(function (e, n) {
              var o = c.length;if (a.each(a(n).triggerHandler("validation.validation", i), function (a, e) {
                c.push(e);
              }), c.length > o) a(n).attr("aria-invalid", "true");else {
                var r = t.data("original-aria-invalid");a(n).attr("aria-invalid", void 0 !== r && r);
              }
            }), s.find("input,select,textarea").not(t).not('[name="' + t.attr("name") + '"]').trigger("validationLostFocus.validation"), (c = a.unique(c.sort())).length ? (o.removeClass("success error").addClass("warning"), r.options.semanticallyStrict && 1 === c.length ? l.html(c[0] + (r.options.prependExistingHelpBlock ? l.data("original-contents") : "")) : l.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (r.options.prependExistingHelpBlock ? l.data("original-contents") : ""))) : (o.removeClass("warning error success"), d.length > 0 && o.addClass("success"), l.html(l.data("original-contents"))), "blur" === e.type && o.removeClass("success");
          }), t.bind("validationLostFocus.validation", function () {
            o.removeClass("success");
          });
        });
      }, destroy: function () {
        return this.each(function () {
          var t = a(this),
              i = t.parents(".form-group").first(),
              n = i.find(".help-block").first();t.unbind(".validation"), n.html(n.data("original-contents")), i.attr("class", i.data("original-classes")), t.attr("aria-invalid", t.data("original-aria-invalid")), n.attr("role", t.data("original-role")), e.indexOf(n[0]) > -1 && n.remove();
        });
      }, collectErrors: function (e) {
        var t = {};return this.each(function (e, i) {
          var n = a(i),
              o = n.attr("name"),
              r = n.triggerHandler("validation.validation", { includeEmpty: !0 });t[o] = a.extend(!0, r, t[o]);
        }), a.each(t, function (a, e) {
          0 === e.length && delete t[a];
        }), t;
      }, hasErrors: function () {
        var e = [];return this.each(function (t, i) {
          e = e.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", { submitting: !0 }) : []);
        }), e.length > 0;
      }, override: function (e) {
        t = a.extend(!0, t, e);
      } }, validatorTypes: { callback: { name: "callback", init: function (a, e) {
          return { validatorName: e, callback: a.data("validation" + e + "Callback"), lastValue: a.val(), lastValid: !0, lastFinished: !0 };
        }, validate: function (a, e, t) {
          if (t.lastValue === e && t.lastFinished) return !t.lastValid;if (!0 === t.lastFinished) {
            t.lastValue = e, t.lastValid = !0, t.lastFinished = !1;var i = t,
                n = a;!function (a, e) {
              for (var t = Array.prototype.slice.call(arguments).splice(2), i = a.split("."), n = i.pop(), o = 0; o < i.length; o++) e = e[i[o]];e[n].apply(this, t);
            }(t.callback, window, a, e, function (a) {
              i.lastValue === a.value && (i.lastValid = a.valid, a.message && (i.message = a.message), i.lastFinished = !0, n.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                n.trigger("change.validation");
              }, 1));
            });
          }return !1;
        } }, ajax: { name: "ajax", init: function (a, e) {
          return { validatorName: e, url: a.data("validation" + e + "Ajax"), lastValue: a.val(), lastValid: !0, lastFinished: !0 };
        }, validate: function (e, t, i) {
          return "" + i.lastValue == "" + t && !0 === i.lastFinished ? !1 === i.lastValid : (!0 === i.lastFinished && (i.lastValue = t, i.lastValid = !0, i.lastFinished = !1, a.ajax({ url: i.url, data: "value=" + t + "&field=" + e.attr("name"), dataType: "json", success: function (a) {
              "" + i.lastValue == "" + a.value && (i.lastValid = !!a.valid, a.message && (i.message = a.message), i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                e.trigger("change.validation");
              }, 1));
            }, failure: function () {
              i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                e.trigger("change.validation");
              }, 1);
            } })), !1);
        } }, regex: { name: "regex", init: function (a, e) {
          return { regex: (t = a.data("validation" + e + "Regex"), new RegExp("^" + t + "$")) };var t;
        }, validate: function (a, e, t) {
          return !t.regex.test(e) && !t.negative || t.regex.test(e) && t.negative;
        } }, required: { name: "required", init: function (a, e) {
          return {};
        }, validate: function (a, e, t) {
          return !(0 !== e.length || t.negative) || !!(e.length > 0 && t.negative);
        }, blockSubmit: !0 }, match: { name: "match", init: function (a, e) {
          var t = a.parents("form").first().find('[name="' + a.data("validation" + e + "Match") + '"]').first();return t.bind("validation.validation", function () {
            a.trigger("change.validation", { submitting: !0 });
          }), { element: t };
        }, validate: function (a, e, t) {
          return e !== t.element.val() && !t.negative || e === t.element.val() && t.negative;
        }, blockSubmit: !0 }, max: { name: "max", init: function (a, e) {
          return { max: a.data("validation" + e + "Max") };
        }, validate: function (a, e, t) {
          return parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative || parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative;
        } }, min: { name: "min", init: function (a, e) {
          return { min: a.data("validation" + e + "Min") };
        }, validate: function (a, e, t) {
          return parseFloat(e) < parseFloat(t.min) && !t.negative || parseFloat(e) >= parseFloat(t.min) && t.negative;
        } }, maxlength: { name: "maxlength", init: function (a, e) {
          return { maxlength: a.data("validation" + e + "Maxlength") };
        }, validate: function (a, e, t) {
          return e.length > t.maxlength && !t.negative || e.length <= t.maxlength && t.negative;
        } }, minlength: { name: "minlength", init: function (a, e) {
          return { minlength: a.data("validation" + e + "Minlength") };
        }, validate: function (a, e, t) {
          return e.length < t.minlength && !t.negative || e.length >= t.minlength && t.negative;
        } }, maxchecked: { name: "maxchecked", init: function (a, e) {
          var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');return t.bind("click.validation", function () {
            a.trigger("change.validation", { includeEmpty: !0 });
          }), { maxchecked: a.data("validation" + e + "Maxchecked"), elements: t };
        }, validate: function (a, e, t) {
          return t.elements.filter(":checked").length > t.maxchecked && !t.negative || t.elements.filter(":checked").length <= t.maxchecked && t.negative;
        }, blockSubmit: !0 }, minchecked: { name: "minchecked", init: function (a, e) {
          var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');return t.bind("click.validation", function () {
            a.trigger("change.validation", { includeEmpty: !0 });
          }), { minchecked: a.data("validation" + e + "Minchecked"), elements: t };
        }, validate: function (a, e, t) {
          return t.elements.filter(":checked").length < t.minchecked && !t.negative || t.elements.filter(":checked").length >= t.minchecked && t.negative;
        }, blockSubmit: !0 } }, builtInValidators: { email: { name: "Email", type: "shortcut", shortcut: "validemail" }, validemail: { name: "Validemail", type: "regex", regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}", message: "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e" }, passwordagain: { name: "Passwordagain", type: "match", match: "password", message: "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e" }, positive: { name: "Positive", type: "shortcut", shortcut: "number,positivenumber" }, negative: { name: "Negative", type: "shortcut", shortcut: "number,negativenumber" }, number: { name: "Number", type: "regex", regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?", message: "Must be a number\x3c!-- data-validator-number-message to override --\x3e" }, integer: { name: "Integer", type: "regex", regex: "[+-]?\\d+", message: "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e" }, positivenumber: { name: "Positivenumber", type: "min", min: 0, message: "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e" }, negativenumber: { name: "Negativenumber", type: "max", max: 0, message: "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e" }, required: { name: "Required", type: "required", message: "This is required\x3c!-- data-validator-required-message to override --\x3e" }, checkone: { name: "Checkone", type: "minchecked", minchecked: 1, message: "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e" } } },
      i = function (a) {
    return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, e, t) {
      return e + t.toUpperCase();
    });
  },
      n = function (e) {
    var t = e.val(),
        i = e.attr("type");return "checkbox" === i && (t = e.is(":checked") ? t : ""), "radio" === i && (t = a('input[name="' + e.attr("name") + '"]:checked').length > 0 ? t : ""), t;
  };a.fn.jqBootstrapValidation = function (e) {
    return t.methods[e] ? t.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (a.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : t.methods.init.apply(this, arguments);
  }, a.jqBootstrapValidation = function (e) {
    a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
  };
}(jQuery);

/***/ })
/******/ ]);
});