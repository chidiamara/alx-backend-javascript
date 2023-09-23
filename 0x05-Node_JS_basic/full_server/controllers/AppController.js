/**
 * Contains the miscellaneous route handlers.
 * @author Chidiamara <https://github.com/chidiamara>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;