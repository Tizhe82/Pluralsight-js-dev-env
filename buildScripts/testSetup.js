// This file is isn't transpiled, so must use Common JS AND ES5

// Register babel to transpile before our test run
require('babel.register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () {};
};