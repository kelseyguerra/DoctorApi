import { doctorApi } from './doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#doctorByName").submit(function(event){
    event.preventDefault();
    let nameSearch = $("#name").val();

    promise.then(function(response){
      let doctorName = api.doctorName(response);
      let nameSearch = $("#name").val();
      let body = JSON.parse(doctorName);
      for(let i = 0; i < nameSearch.length; i++) {
   $("#output").append(`<p class='position${i} id='space${i}'></p>`);
 }

  //   let nameSearch = $("#name").val();
  //   let findDoctor = new doctorApi();
  //   findDoctor.doctorByName(nameSearch).then(function(response){
  //     let results = JSON.parse(response)
  //     if (results.data.length === 0) {
  //       $('#nameError').append(`Error. No doctors with that name in this area.`)
  //     } else {
  //       return getResults(results);
  //     }
  //   })
  // })
  //   $("#doctorBySymptom").submit(function(event){
  //     event.preventDefault();
  //     let symptomSearch = $("#symptom").val();
  //     let findSymptom = new doctorApi();
  //     findSymptom.doctorBySymptom(symptomSearch).then(function(response){
  //       let results = JSON.parse(response)
  //       if (results.data.length === 0) {
  //         $('#symptomError').append(`Error. No doctors specializing in these symptoms in your area.`)
  //       } else {
  //         return getResults(results);
  //       }
  //     })
  //   })
  // })
