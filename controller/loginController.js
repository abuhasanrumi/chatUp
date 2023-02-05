// get login page

function getLogin(req, res, next) {
  res.render("index", {
    title: "Login - ChatUp",
  });
}

module.exports = {
  getLogin,
};
