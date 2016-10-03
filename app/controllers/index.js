exports.home = function(req, res){
  res.render('home', { 
    title: 'doT Bootstrap',
    metadesc: 'A bootstrap template to quickly develope sites in Node.js',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm',
    homeMessage: 'doT Template Example Site'
  });
};

exports.somepage = function(req, res){
    res.render('somepage', { 
    title: 'doT Bootstrap Some Page',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm',
    usefulData: [
      {
        color: "red",
        hexValue: "#f00"
      },
      {
        color: "green",
        hexValue: "#0f0"
      },
      {
        color: "blue",
        hexValue: "#00f"
      },
      {
        color: "cyan",
        hexValue: "#0ff"
      },
      {
        color: "magenta",
        hexValue: "#f0f"
      },
      {
        color: "yellow",
        hexValue: "#ff0"
      },
      {
        color: "black",
        hexValue: "#000"
      }
    ]

  });
};