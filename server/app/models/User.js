const mongoose = require('mongoose');

const {
	ContactSchema
} = absoluteRequire('models/contact');

const {
  Schema,
  model: Model,
} = mongoose;

const UserSchema = new Schema({
  nickname: {
    type: String,
    default: '',
    trim: true,
    uniquez: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  profileColor: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  contacts: [
    {
      type: ContactSchema
    }
  ]
});

const UserModal = new Modal('User', UserSchema);

exports.UserModal = UserModal;
exports.UserSchema = UserSchema;