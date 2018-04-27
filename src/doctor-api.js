import $ from 'jquery';

class doctorApi {

  doctorName(name, location) {
    return new Promise(function(resolve, reject) {
          let location = "or-portland";
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&q=${symptomSearch}&name=${nameSearch}&user_key=${process.env.exports.apiKey}`
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
      let request = new XMLHttpRequest();      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&q=${symptomSearch}&name=${nameSearch}&user_key=${process.env.exports.apiKey}`
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
