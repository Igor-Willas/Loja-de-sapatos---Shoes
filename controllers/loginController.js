const controller = {
    loginPage: (req, res) => {
        
        res.render('login')
    },
    registerPage: (req, res) => {

        res.render('cadastro')
    }

}

module.exports = controller;