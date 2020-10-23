import { join } from 'path'

export default function (options) {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: join(__dirname, 'src/components'),
      extensions: ['ts', 'js'],
      global: options.global || false,
    })
  })
}