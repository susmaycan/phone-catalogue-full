module.exports = (app) => {
  const phoneList = require('../controllers/phone.controller');
  app.get('/phones', phoneList.findAll);

}