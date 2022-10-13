// solved using the moment.js package
const moment = require('moment');

const checkTime = (req, res, next) => {
     if ((moment().format('dddd') === 'Saturday' ||
          moment().format('dddd') === 'Sunday') ||
          (moment().format('h') < 9 ||
               moment().format('h') > 17)) {
          res.status(200);
          res.send(false);
          } else {
          next();
     }
}

module.exports = checkTime;
