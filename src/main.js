import { doctorApi } from './doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getResults(displayresults) {
  if (results.data.length > 0) {
    for (let i = 0; i < results.data.length; i++) {
      let name = results.data[i].profile.first_name + " " + results.data[i].profile.last_name + ", " + results.data[i].profile.title;
      let addressStreet = results.data[i].practices[0].visit_address.street;
      let addressCity = results.data[i].practice[0].visit_address.city;
      let addressState = results.data[i].practice[0].visit_address.state;
      let addressZip = results.data[i].practice[0].visit_address.zip;
      let phone = results.data[i].practices[0].phones[0].number;
      let website = results.data[i].practices[0].website || "no website";
      let available = results.data[i].practices[0].accepts_new_patients;
      $('#output').append(`<ol>
      <h2>Doctor Name:
      ${name}</h2>
      <h2>Address:</h2>
      <p>${addressStreet}
      <br>${addressCity}, ${addressState}
      <br>${addressZip}</p>
      <h2>Phone:</h2>
      <p>${phone}</p>
      <br><h2>Website:</h2>
      <p>${website}</p>
      <br><h2>Availability:</h2>
      <p>${available}</p>`);
  }
}

$(document).ready(function(){
  $("#doctorByName").submit(function(event){
    event.preventDefault();
    let nameSearch = $("#name").val();
    let findDoctor = new doctorApi();
    findDoctor.doctorByName(nameSearch).then(function(response){
      let results = JSON.parse(response)
      if (results.data.length === 0) {
        $('#nameError').append(`Error. No doctors with that name in this area.`)
      } else {
        return getResults(results);
      }
    })
  })
    $("#doctorBySymptom").submit(function(event){
      event.preventDefault();
      let symptomSearch = $("#symptom").val();
      let findSymptom = new doctorApi();
      findSymptom.doctorBySymptom(symptomSearch).then(function(response){
        let results = JSON.parse(response)
        if (results.data.length === 0) {
          $('#symptomError').append(`Error. No doctors specializing in these symptoms in your area.`)
        } else {
          return getResults(results);
        }
      })
    })
  });
