let sketch = require('sketch');
let Text = sketch.Text;
let url = "https://api.duckduckgo.com/?q=random+person+name+generator&ia=answer&format=json&pretty=1";

let request = NSMutableURLRequest.alloc().init();
request.setHTTPMethod_("GET");
request.setURL_(NSURL.URLWithString_(url));
let responseData = NSURLConnection.sendSynchronousRequest_returningResponse_error_(request,nil,nil);
let stringResponse = NSString.alloc().initWithData_encoding_(responseData,NSUTF8StringEncoding]);
let string = JSON.parse(stringResponse);
let answer = string.Answer;

let selectedDocument = sketch.getSelectedDocument();
let selectedPage = selectedDocument.selectedPage;
let myArtboard = selectedPage.layers[0];

let myTextLayer = new Text({
  text: answer,
  parent: myArtboard
});
