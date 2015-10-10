'use strict'

var test = require('tape')
var assertEqual = require('./')

test(function (t) {
  t.throws(assertEqual.bind(null, 1, 2), 'expected `1` to equal `2`')
  t.doesNotThrow(assertEqual.bind(null, 1, 1))
  t.end()
})
