import { join, resolve } from 'path';

export default function (options) {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: join(__dirname, '../src/components'),
      extensions: ['ts', 'js'],
      global: options.global || false,
    })
  });

  this.nuxt.hook('build:before', () => {
    this.addPlugin(join(__dirname, 'plugin.js'));
  })
}

module.exports.meta = require('../package.json');