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
    'use strict';

    jQuery(document).ready(function () {
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
        var account1 = document.getElementById("address").value;
        playerContract = new PlayerContract(account1);
        if (EmbarkJS.isNewWeb3()) {}
        $('#PlayBut').on('click', function (e) {
            document.getElementById("AboutModal4").style.display = "block";
            var account1 = document.getElementById("address1").value;
            var account2 = document.getElementById("address2").value;
            Morabaraba.methods.NewGame(account1, account2).call({ from: account1, gas: 3000000 }, function (err, value) {
                alert(value);
                if (!err) {
                    var section = $(this).attr("PlaySection");
                    $("html, body").animate({
                        scrollTop: $(section).offset().top
                    });
                    document.getElementById("AboutModal4").style.display = "none";
                    initializeGame();
                }
                // Setup the game board etc..   
            });

            return false;
        });
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
});
$(window).load(function () {
    document.getElementById("AboutModal4").style.display = "none";
});

/***/ })
/******/ ]);
});