import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/aleksandrlao', (req, res) => {
	const sum = (+req.query.a || 0) + (+req.query.b || 0);
	res.send(sum.toString());
});

app.get('/aleksandrlao2', (req, res) => {
	
		

	if( req.query.fullname ) {

		var re = /\s/g;
		var str = req.query.fullname;
		var newstr = str.split(" ");

		if( newstr.length > 3 ) {
			var itog = "Invalid fullname";
		} else if( newstr.length == 3 ) {
			var itog = newstr[newstr.length - 1];
			var otch = newstr[newstr.length - 2].slice(0,1);
			var imya = newstr[newstr.length - 3].slice(0,1);
			var itog = itog + " " + imya + ". " + otch + ".";
		} else if( newstr.length == 2 ) {
			var itog = newstr[newstr.length - 1];
			var otch = newstr[newstr.length - 2].slice(0,1);
			var itog = itog + " " + otch + ".";
		} else if( newstr.length == 1 ) {
			var itog = newstr[newstr.length - 1];
		}
		
		

		console.log(newstr);

	} else {

		var itog = "Invalid fullname";

	}

	
	
	
	res.send(itog);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
