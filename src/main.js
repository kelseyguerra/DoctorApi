import { doctorApi } from './doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#doctorByName").submit(function(event){
    event.preventDefault();
    let nameSearch = $("#name").val();
    let findDoctor = new doctorApi;
    let firstPromise = nameSearch.doctorByName(nameSearch);
    promise.then(function(response){
      let results = JSON.parse(response);
      if (results.data.length === 0) {
        $('#error').append(`Error`)
      }else {
        return getResults(results);
      }
    })
  })
    $("#doctorBySymptom").submit(function(event){
      event.preventDefault();
      let symptomSearch = $("#symptom").val();
      let findSymptom = new doctorApi;
      let secondPromise = symptomSearch.doctorBySymptom(sypmtomSearch);
      promise.then(function(response){
        let results = JSON.parse(response);
        if (results.data.length === 0) {
          $('#error').append(`Error`)
        }else {
          return getResults(results);
        }
      })
    })
  });
