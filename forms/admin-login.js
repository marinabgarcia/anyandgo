var forms = require('mongoose-forms');
var Admin  = require('../models/admins.js');

module.exports = function() {
  return forms.Form(Admin, {
    method: 'post',
    action: '/admin',
    maps: ['username', 'password'],
    fields: {
      password: {
        template: 'Password',
        validate: function(value, check) {
          check(value, 'Minimum 6 characters and maximum 10').len(6, 10);
        }
      },
      submit: {
        template: 'Submit'
      }
    }
  });
};