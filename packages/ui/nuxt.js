import { join } from 'path'

export default function () {
  this.nuxt.hook('components:dirs', (dirs) => {
    console.log(dirs);
    dirs.push({
      path: join(__dirname, 'src/components'),
      prefix: 'aq'
    })
  })
}