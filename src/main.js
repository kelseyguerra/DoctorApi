import { ApiCall } from './doctor-api.js';
import { getDoctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function clearData(){
  $('#symptom').val('');
  $('#name').val('');
  $('#output').empty();
}

function getResults(response) {
  let body = JSON.parse(response);
  if (body.doctor === null) {
    $('#output').text("Doctor not found. Please try again.");
  } else {
    $('#symptom').append(body.doctor)

  }
  }
}
