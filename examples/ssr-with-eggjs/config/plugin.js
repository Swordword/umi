'use strict';

// had enabled by egg
// exports.static = true;

exports.assets = {
  enable: true,
  package: 'egg-view-assets',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.i18n = {
  enable: true,
  package: 'egg-i18n',
};