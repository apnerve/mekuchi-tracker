
/*
 * Helpers
 */

 exports.fetch = function(url) {
  var MetaInspector = require('node-metainspector');
  var client = new MetaInspector(url, {});

  client.on("fetch", function(){
      console.log(url);
      console.log("image: " + client.image());
  });

  client.on("error", function(err){
      console.log(error);
  });

  client.fetch();
};