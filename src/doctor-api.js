import $ from 'jquery';

class doctorApi {

  doctorName(name, location) {
    return new Promise(function(resolve, reject) {
          let location = "or-portland";
          let request = new XMLHttpRequest();
          let url = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`)
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
              $('#nameError').text(`Error alert, try again! ${error.message}`);
            }
          }
          request.open("GET", url, true);
          request.send();
        });
      }

  doctorSpecialty(symptom) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();      let url = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          $('#symptomError').text(`Error alert, try again! ${request.statusText}`);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export { doctorApi }
