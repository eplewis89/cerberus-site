import expressLayouts from 'express-ejs-layouts';

// EJS setup
app.use(expressLayouts);

// Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));

// Setting the view engine
app.set('view engine', 'ejs');