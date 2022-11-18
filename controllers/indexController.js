const controller = {
    renderPage: (req, res) => {
        res.render('index')
    },
    renderCadastro: (req, res) => {
        res.render('cadastro')
    }
};


module.exports = controller;