
module.exports = function errorHandler(res,error){
  const [err] = error.errors;
      if (err.validatorKey == 'isEmail') {
        res.status(400).json({
          message: 'please provide a valid email address',
          error: err,
        });
      }
      if (err.validatorKey == 'len') {
        res.status(400).json({
          message: 'please make your password is at least 8 characters',
          error: err,
        });
      }
      if (err.validatorKey == 'is_null') {
        res.status(400).json({
          message: 'please make sure key values are provided',
          error: err,
        });
      }
      if (err.validatorKey == 'notEmpty') {
        res.status(400).json({
          message: 'empty key values are not permitted',
          error: err,
        });
      }
}