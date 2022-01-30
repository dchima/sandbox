
/**
 * Class for api tools methods
 *
 * @class Toolbox
 */
export default class Toolbox {
  /**
   * Generates a JSON response for success scenarios.
   * @static
   * @param {Response} res - Response object.
   * @param {object} data - The payload.
   * @param {number} code -  HTTP Status code.
   * @memberof Toolbox
   * @returns {JSON} - A JSON success response.
   */
  static successResponse(res, data, code = 200) {
    return res.status(code).json({
      status: 'success',
      data
    });
  }

  /**
   * Generates a JSON response for failure scenarios.
   * @static
   * @param {Response} res - Response object.
   * @param {object} options - The payload.
   * @param {number} options.code -  HTTP Status code, default is 500.
   * @param {string} options.message -  Error message.
   * @param {object|array  } options.errors -  A collection of  error message.
   * @memberof Toolbox
   * @returns {JSON} - A JSON failure response.
   */
  static errorResponse(res, { code = 500, message = 'Some error occurred while processing your Request', errors }) {
    return res.status(code).json({
      status: 'fail',
      error: {
        message,
        errors
      }
    });
  }
}
