'use strict';

var $ = require('jquery');
require('angular');

if (typeof $ === 'undefined') {
    throw new Error('This application\'s JavaScript requires jQuery');
}

var app = angular.module('app', []);