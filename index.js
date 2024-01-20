const express=require('express'); // include an external library works for https
const app=express(); // make an express application
const port=3000; // port no. tells path of the page

const bodyParser=require('body-parser');

// use body-parser middleware to parse url-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public directory
app.use(express.static('public'));

// calculate the sum of two number 
function calcSum(a, b) {
  return parseFloat(a) + parseFloat(b);
}

// handles the http post request
app.post('/process-data', (req, res) => {
  const firstNum=req.body.firstNum;
  const secondNum=req.body.secondNum;
  res.send(`The sum of ${firstNum} and ${secondNum} is : ${calcSum(firstNum,secondNum)}`);
}); 

// handles the http get request 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})