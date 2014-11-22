program = require "commander"
pkg = require "../package.json"

program
  .version(pkg.version)
  .option('-f, --foo [value]', 'Foo stuff')
  .option('-b, --bar [value]', 'Foo stuff')

program.on "--help", ()->
  console.log "  Examples:"
  console.log ""
  console.log "    $ " + pkg.name + " --message hello"
  return

program.parse process.argv

buffer = "";

process.stdin.resume()
process.stdin.setEncoding 'utf8'
process.stdin.on 'data', (data)->
  buffer += data

process.stdin.on 'end', ->
  value = JSON.parse buffer
  process.stdout.write(JSON.stringify(value, null, '\t'))
  process.exit(0)
