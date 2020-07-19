const { HashedModuleIdsPlugin } = require ('webpack');

const presets = [
  [
    '@babel/env', {
      targets: {
        ie: '11',
        firefox: '50',
        chrome: '64'
      },
      useBuiltIns: 'entry'
    }
  ]
];

module.exports = {presets};
