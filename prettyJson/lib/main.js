(function() {
  var buffer, pkg, program;

  program = require("commander");

  pkg = require("../package.json");

  program.version(pkg.version).option('-f, --foo [value]', 'Foo stuff').option('-b, --bar [value]', 'Foo stuff');

  program.on("--help", function() {
    console.log("  Examples:");
    console.log("");
    console.log("    $ " + pkg.name + " --message hello");
  });

  program.parse(process.argv);

  buffer = "";

  process.stdin.resume();

  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function(data) {
    return buffer += data;
  });

  process.stdin.on('end', function() {
    var value;
    value = JSON.parse(buffer);
    process.stdout.write(JSON.stringify(value, null, '\t'));
    return process.exit(0);
  });

}).call(this);
