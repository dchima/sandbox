/**
 * Api Error class
 * @extends Error
 */
export default class ApiError extends Error {
  /**
   * Create an ApiError instance
   *
   * @param {number} status - status code of error
   * @param {string} message - error message
   */
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}
