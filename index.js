// var express = require("express");
// var app = express();


// // app.get("/:search", function(req, res){
// //     var name = req.params.search;
// //     res.redirect('google.com/search?q=' + name);
// //     // res.send("<h1>Hello " + name +"</h1>");
// //  });
// // app.get("/", function(req, res){
// //    res.send("<h1>Hello world</h1>");
// // });



// // app.get("/google", function(req, res){
// //    res.redirect("http://google.com");
// // });

// // app.get("/:search", function(req, res){
// //     var name = req.params.search;
// //     res.redirect('https://www.google.com/search?q=' + name);
// //  });
// app.get("/404", function(req, res){
//     res.redirect("/*");
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();

var fs = require('fs');
var dummyText = "Apple yep";

function main() {
   fs.writeFileSync("dummytext.txt", dummyText);
   var text = fs.readFileSync("dummytext.txt").toString();
   console.log(dummyText == text);
   console.log(text);
   fs.writeFileSync("undummytext.txt",
       text.replace("Apple", "Microsoft")
   );
}
main();