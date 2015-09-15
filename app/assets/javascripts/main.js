$(document).ready(function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.uber.com/v1/products?latitude=40.7063634&longitude=-74.009096');
  xhr.setRequestHeader("Authorization", "Token cuuAQ79Q2L3SKGm6xHVR85NXkkzvEht8aNL1tNRk");

  // $.ajax({
  //   url: 'https://api.uber.com/v1/products',
  //   // headers: {Authorization: "Token " + 'cuuAQ79Q2L3SKGm6xHVR85NXkkzvEht8aNL1tNRk'},
  //   data: {
  //     server_token: 'cuuAQ79Q2L3SKGm6xHVR85NXkkzvEht8aNL1tNRk',
  //     latitude: 40.7063634,
  //     longitude: -74.00909630000001
  //   }
  // }).done(function(response) {
  //   console.log('it works');
  // }).fail(function(response) {
  //   console.log(arguments);
  //   console.log('it failed');
  // })
})
