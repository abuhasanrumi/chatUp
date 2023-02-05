// get inbox page

function getInbox(req, res, next) {
  res.render("inbox", {
    title: "Inbox - ChatUp",
  });
}

module.exports = {
  getInbox,
};
