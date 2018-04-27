import { ApiCall } from './doctor-api.js';
import { getDoctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getResults(displayresults) {
  let results = displayresults;
  for(let i = 0; i < results.data.length; i++) {
    let doctorFirstName = results.data[i].profile.first_name;
    let doctorLastName = results.data[i].profile.last_name;
    let addressStreet = results.data[i].practices[0].visit_address.street;
    let addressCity = results.data[i].practice[0].visit_address.city;
    let addressState = results.data[i].practice[0].visit_address.state;
    let addressZip = results.data[i].practice[0].visit_address.zip;
    let phone = results.data[i].practices[0].phones[0].number;
    let website = results.data[i].practices[0].website || "no website";
    let available = results.data[i].practices[0].accepts_new_patients;
    $('#output').append(`Doctor Name: ${doctorFirstName}, ${doctorLastName}<br> Address: ${addressStreet}, ${addressCity}, ${addressState},${addressZip}<br> Phone: ${phone}<br> Website: ${website}<br> Availability: ${available} `);
  }
}
