// ERROR
const Error = (res, errors) => {
  return res.status(400).json({
    success: false,
    statusCode: 400,
    errors: errors,
  });
};

const GetError = (res, errors) => {
  return Error(res, errors);
};

const SaveError = (res, errors) => {
  return Error(res, errors);
};

const DeleteError = (res, errors) => {
  return Error(res, errors);
};

// SUCCESS
const Success = (res, data) => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    data: data,
  });
};

const GetSuccess = (res, data) => {
  return Success(res, data);
};

const SaveSuccess = (res, data) => {
  return Success(res, data);
};

const DeleteSuccess = (res, data) => {
  return Success(res, data);
};

const NotFoundError = (res) => {
  return res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not found Error",
  });
};

const UnauthorizedError = (res) => {
  return res.status(401).json({
    success: false,
    statusCode: 401,
    message: "Unauthorized Error",
  });
};

const ForbiddenError = (res) => {
  return res.status(403).json({
    success: false,
    statusCode: 403,
    message: "Forbidden Error",
  });
};

const NotAllowedError = (res) => {
  return res.status(405).json({
    success: false,
    statusCode: 405,
    message: "Not Allowed error",
  });
};

module.exports = {
  GetError,
  SaveError,
  GetSuccess,
  SaveSuccess,
  DeleteError,
  DeleteSuccess,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  NotAllowedError,
};
