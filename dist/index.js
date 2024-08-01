/** @license Apache-2.0 */

'use strict';

/**
* Maximum safe nth factorial when stored in double-precision floating-point format.
*
* @module @stdlib/constants-float64-max-safe-nth-factorial
* @type {integer}
*
* @example
* var FLOAT64_MAX_SAFE_NTH_FACTORIAL = require( '@stdlib/constants-float64-max-safe-nth-factorial' );
* // returns 170
*/


// MAIN //

/**
* The maximum safe nth factorial when stored in double-precision floating-point format.
*
* @constant
* @type {integer}
* @default 170
* @see [factorial]{@link https://en.wikipedia.org/wiki/Factorial}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MAX_SAFE_NTH_FACTORIAL = 170|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MAX_SAFE_NTH_FACTORIAL;
