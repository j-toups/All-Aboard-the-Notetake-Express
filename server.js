const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//Express for data parcing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes
app.use('./routes/apiRoutes')(app);
app.use('./routes/htmlRoutes')(app);

app.listen(PORT, function(){
    console.log(`Listening on PORT: ${PORT}`);
});