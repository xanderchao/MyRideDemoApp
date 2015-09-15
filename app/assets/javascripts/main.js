$(document).ready(function() {
  $.ajax({
    url: 'https://api.uber.com/v1/products',
    headers: {Authorization: "Token " + 'cuuAQ79Q2L3SKGm6xHVR85NXkkzvEht8aNL1tNRk'},
    data: {
      latitude: 40.7063634,
      longitude: 74.00909630000001
    }
  }).done(function(response) {
    console.log('it works');
  }).fail(function(response) {
    console.log('it failed');
  })
})



    // data: parameters = {
    // 'server_token': 'cuuAQ79Q2L3SKGm6xHVR85NXkkzvEht8aNL1tNRk',
    // 'latitude': 37.775818,
    // 'longitude': -122.418028,
    // }
