const http = require('http');
const port = process.env.PORT || 3000;
var colors = require('ansicolors');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
 
// foreground colors
var redHerring = colors.red('herring');
var blueMoon = colors.blue('moon');
 
console.log(redHerring);      // this will print 'herring' in red
console.log(blueMoon);        // this 'moon' in blue
 
// background colors
console.log(colors.bgYellow('printed on yellow background'));
  
// mixing background and foreground colors
// below two lines have same result (order in which bg and fg are combined doesn't matter)
console.log(colors.bgYellow(colors.blue('printed on yellow background in blue')));
console.log(colors.blue(colors.bgYellow('printed on yellow background in blue')));

  console.log(`Server running on http://localhost:${port}/`);
});
