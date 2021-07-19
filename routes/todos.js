//import dependencies
import express from 'express'
import jwt from 'jsonwebtoken'
import validator from 'express-validator'

//intialize router
const router = express.Router();
const {check, validationResult} = validator;

//import models
import User from '../models/User.js'

//import middleware
import auth from '../middleware/auth.js'

//@GET - /api/todos - get all todos from database - Private

//@POST - /api/todos - create new todo - Private

//@PUT - /api/todos/:id - update todo by ID - Private

//@DELETE - /api/todos/:id - delete todo by ID - Private


export default router;