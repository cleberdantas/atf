#  [![Build Status](https://api.travis-ci.org/cleberdantas/atf.svg)](http://travis-ci.org/cleberdantas/atf)[![NPM Version](http://img.shields.io/npm/v/atf.svg?style=flat)](https://www.npmjs.org/package/atf)

atf (above-the-fold) prints out above-the-fold css for whatever site you want.

PS: Doesn't work yet for styles loaded under SSL ¯\_(ツ)_/¯. 

It uses the [CriticalCSS](https://gist.github.com/PaulKinlan/6284142) snippet from Paul Kinlan (Learn more about above-the-fold css [here](http://paul.kinlan.me/detecting-critical-above-the-fold-css/)) with some tiny modifications on top of PhantomJS.


## Install
First, make sure PhantomJS is installed. This module expects the phantomjs binary to be in PATH somewhere. In other words, type this:

```sh
$ phantomjs
```

If that works you are good to go.

```sh
$ npm install --global atf
```


## Usage

```sh
$ atf --help
```


## License

MIT © [Cleber Dantas](http://www.cleberdantas.com)


[npm-url]: https://npmjs.org/package/above-the-fold-phantomjs
[npm-image]: https://badge.fury.io/js/above-the-fold-phantomjs.svg
[travis-url]: https://travis-ci.org/cleberdantas/above-the-fold-phantomjs
[travis-image]: https://travis-ci.org/cleberdantas/above-the-fold-phantomjs.svg?branch=master
[daviddm-url]: https://david-dm.org/cleberdantas/above-the-fold-phantomjs.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/cleberdantas/above-the-fold-phantomjs
