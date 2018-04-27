import { Doctor } from "./doctor.js";
import $ from 'jquery';

class doctorApi {

  doctorName(name, location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = (`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&q=${name}&name=${nameSearch}&user_key=${process.env.exports.apiKey}`)
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  doctorSpecialty(symptom) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url =(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`);
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true); request.send();
    });

    function getResults(allresults) {
      let results = allresults;
      if (results.data.length > 0) {
        for (let i = 0; i < results.data.length; i++) {
          let name = results.data[i].profile.first_name + " " + results.data[i].profile.last_name + ", " + results.data[i].profile.title;
          let street = results.data[i].practices[0].visit_address.street;
          let city = results.data[i].practice[0].visit_address.city;
          let state = results.data[i].practice[0].visit_address.state;
          let zip = results.data[i].practice[0].visit_address.zip;
          let phone = results.data[i].practices[0].phones[0].number;
          let website = results.data[i].practices[0].website || "no website";
          let available = results.data[i].practices[0].accepts_new_patients;
          ('$#output').append(`${name}<br>${city}<br>${state}<br>${zip}<br>${phone}<br>${website},${available}`)
      }
    }
}

export { doctorApi }
