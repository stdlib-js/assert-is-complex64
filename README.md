<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isComplex64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a [64-bit complex number][@stdlib/complex/float32].

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-complex64
```

</section>

<section class="usage">

## Usage

```javascript
var isComplex64 = require( '@stdlib/assert-is-complex64' );
```

#### isComplex64( value )

Tests if a value is a [64-bit complex number][@stdlib/complex/float32].

```javascript
var Complex64 = require( '@stdlib/complex-float32' );

var x = new Complex64( 1.0, 3.0 );

var bool = isComplex64( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var Complex128 = require( '@stdlib/complex-float64' );
var isComplex64 = require( '@stdlib/assert-is-complex64' );

var out = isComplex64( new Complex64( 2.0, 2.0 ) );
// returns true

out = isComplex64( new Complex128( 3.0, 1.0 ) );
// returns false

out = isComplex64( {} );
// returns false

out = isComplex64( null );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex64.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex64

[test-image]: https://github.com/stdlib-js/assert-is-complex64/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-complex64/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex64/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex64?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex64
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex64/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex64/main/LICENSE

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32

</section>

<!-- /.links -->
