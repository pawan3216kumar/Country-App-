let container = document.querySelector("#cont");
let select = document.querySelector("select")

let arr = []
function getData(URL) {
  fetch(URL)
    .then(function (res) {
      return res.json();
    })
    .then(res => {
      arr.push(...res.data)
      displayData(arr)
    });
  }
  
getData(
"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
);


function displayData(arr) {
    container.innerHTML = "";
  arr.forEach((ele, i) => {
    let div = document.createElement("div");

    let rank = document.createElement("h5");
    rank.innerHTML = `Rank : ${ele.Rank}`;

    let country = document.createElement("h4");
    country.innerHTML = `Country : ${ele.country}`;

    let id = document.createElement("h5");
    id.innerHTML = `id : ${i + 1}`;

    let pop = document.createElement("h5");
    pop.innerHTML = ele.population;

    div.append(rank, country, id, pop);
    container.append(div);
  });
}
function sortData(event){
  let value = event.target.value   
  let narr; 

  if(value == 'asc'){
        narr = arr.sort((a , b)=>{
       return a.population-b.population
    })
  }else{
    narr = arr.sort((a , b)=>{
      return b.population-a.population
  }) 
  }

  displayData(narr)
}
select.addEventListener("change" , event => sortData(event)  )





