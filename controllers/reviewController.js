const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./factoryController');

const reviewResponse = (res, statusCode, reviews) => {
  res.status(statusCode).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
};

exports.createReview = catchAsync(async (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);

  reviewResponse(res, 201, newReview);
});

exports.getAllReviews = factory.getAll(Review);

exports.getReview = factory.getOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.deleteReview = factory.deleteOne(Review);
