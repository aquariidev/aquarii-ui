const { execSync } = require('child_process')
const { cd } = require('shelljs')

cd('./packages/ui')

execSync('yarn dev', {stdio: 'inherit'})