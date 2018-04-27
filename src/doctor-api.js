class ApiCall {
  getData(symptomSearch, nameSearch){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&q=${symptomSearch}&name=${nameSearch}&user_key=${process.env.exports.apiKey}`;
    request.onload = function(){
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true):
    request.send();
  });

  promise.then(function(results){
    displayData(results)
  }, function(error){
    return `something went wrong: ${error.message}`;
  });
    }

    }
    export { ApiCall };
