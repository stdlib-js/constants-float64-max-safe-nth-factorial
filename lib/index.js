/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Maximum safe nth factorial when stored in double-precision floating-point format.
*
* @module @stdlib/constants-float64-max-safe-nth-factorial
* @type {integer}
*
* @example
* var FLOAT64_MAX_SAFE_NTH_FACTORIAL = require( '@stdlib/constants-float64-max-safe-nth-factorial' );
* // returns 18
*/


// MAIN //

/**
* The maximum safe nth factorial when stored in double-precision floating-point format.
*
* @constant
* @type {integer}
* @default 18
* @see [factorial]{@link https://en.wikipedia.org/wiki/Factorial}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MAX_SAFE_NTH_FACTORIAL = 18|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MAX_SAFE_NTH_FACTORIAL;
