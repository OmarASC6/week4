// fetch data from URL

const url = "https://randomuser.me/api";

function anyFunctionThatDoesALotOfStuff(obj) {
  const portrait = document.createElement("img");
  portrait.alt = "Face Image Large";
  portrait.src = obj.picture.large;
  document.querySelector("body").appendChild(portrait);
}

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const data = myJson.results[0];

    // ESCAPE FROM ALCATRAZ !
    anyFunctionThatDoesALotOfStuff(data);
  });



  // Upper Casing the sentences in the other project
  const initial = str =>{
  return str[0].toUpperCase() + str.substring(1);
  };

  // function capFst(str){
  //   return str.replace(str[0], str[0].toUpperCase())

  // };