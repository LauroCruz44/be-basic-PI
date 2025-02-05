const MainController = {
  homePage: (req, res) => {
    return res.render('index');
  },

  loginPage: (req, res) => {
      return res.render('login')
  },

  cadastroPage: (req, res) => {
      return res.render('cadastro')
  },

  carrinhoPage: (req, res) => {
      return res.render('carrinhoDeCompras')
  },

  productsPage: (req, res) => {
      return res.render('listaDeProdutos')
  }
};

module.exports = MainController;
