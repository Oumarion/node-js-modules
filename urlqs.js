const url = require("url");
const querystring = require("querystring");

// url.parse()
const myUrl = url.parse("https://example.com/listing?id=1000&premium=true");
console.log(myUrl);

//url.format();
const myUrl2 = url.format({
  protocol: "http",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});
console.log(myUrl2);

// querystring.parse()
const myQueryString = "year=2023&month=december&day=2";
const q = querystring.parse(myQueryString);
console.log(q);

// querystring.stringify()
const myQueryString2 = querystring.stringify({
  year: 2023,
  months: "december",
  day: 2,
});
console.log(myQueryString2);
