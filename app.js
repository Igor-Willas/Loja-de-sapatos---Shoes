const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/indexRouter')
const loginRouter = require('./routes/loginRouter');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', indexRouter)

// app.use('/produtos')

app.use('/login', loginRouter)


app.use((req, res, next) => {
    res.status(404).render('error-404');
})

app.listen(3000, () => { console.log('Servidor rodando na porta 3000!')})