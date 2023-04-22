import { body, validationResult } from "express-validator";
import { studentRepository, userRepository } from "../repositories/index.js";
import {EventEmitter} from 'node:events'
const myEvent = new EventEmitter()
// Listen
myEvent.on('event.register.user', (params) => {
  console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  // Call repository
  await userRepository.login({ email, password });

  res.status(200).json({
    message: "Login user successfully",
    // data: "details user here..."
  });
};

const register = async (req, res) => {
  // deconstructuring
  const {
    name, email, password, phoneNumber, address
  } = req.body
  await userRepository.register({
    name,
    email,
    password,
    phoneNumber,
    address,
  });

  // EventEmitter
  myEvent.emit('event.register.user', {email, address, phoneNumber})

  res.status(201).json({
    message: "Register user successfully",
  });
};

const getDetailUser = async (req, res) => {};

// many other functions

export default {
  login,
  register,
  getDetailUser,
};
