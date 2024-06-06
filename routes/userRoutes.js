const express = require('express');

const userRouter = express.Router();

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
  restrictTo,
} = require('../controllers/authController');

const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = require('../controllers/userController');

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.post('/forgotPassword', forgotPassword);
userRouter.patch('/resetPassword/:token', resetPassword);

// Protect all routes after this middleware
userRouter.use(protect);

userRouter.patch('/updateMyPassword', updatePassword);
userRouter.get('/me', getMe, getUser);
userRouter.patch('/updateMe', updateMe);
userRouter.delete('/deleteMe', deleteMe);

// Restrict all routes after this middleware to admin only
userRouter.use(restrictTo('admin'));

userRouter.route('/').get(getAllUsers).delete(deleteUser).patch(updateUser);

userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
