const chalk = require('chalk')
const semver = require('semver')
const childprocess = require('child_process')

const packageConfig = require('../package.json')

const exec = (cmd) =>
  childprocess.execSync(cmd).toString().trim()

const versionRequirements = [
  {
    name: 'node',
    current: semver.clean(process.version),
    requirement: packageConfig.engines.node,
  },
  {
    name: 'npm',
    current: exec('npm --version'),
    requirement: packageConfig.engines.npm,
  },
]

module.exports = () => {
  const warnings = versionRequirements.reduce((warnings, mod) => (
    semver.satisfies(mod.current, mod.requirement)
      ? warnings
      : warnings.concat([
        `${mod.name}: ${chalk.red(mod.current)} should be ${chalk.green(mod.requirement)}`
      ])
  ), [])

  if (warnings.length > 0) {
    console.log('')
    console.log(chalk.yellow('to use this template, you must update following to modules:'))
    console.log()
    warnings.forEach((warning) => {
      console.log('  ' + warning)
    })
    console.log()
    process.exit(1)
  }
}
