const authRoute = require('../routes/auth');
const contactRoute = require('../routes/contact');
const messageRoute = require('../routes/auth');
const defaultRoute = require('../routes/default');
const conversationRoute = require('../routes/conversation');
const jwtMiddleware = require('../middlewares/jwt');

module.exports = (app) => {
  app.use('/');
  app.use('/secured', jwtMiddleware);
  app.use(authRoute);
  app.use(contactRoute);
  app.use(messageRoute);
  app.use(conversationRoute);
  app.use(defaultRoute);
};
