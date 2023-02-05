// get user page

function getUsers(req, res, next) {
  res.render("users", {
    title: "Users - ChatUp",
  });
}

module.exports = {
  getUsers,
};
