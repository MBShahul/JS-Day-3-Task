function reqListener() {
    let countryArr = JSON.parse(this.responseText);
    console.log(countryArr);
    for (let country of countryArr) {
        console.log(`Country: ${country.name.common}`);
        console.log(`Flag: ${country.flags.png}`);
        console.log(`\n`);
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
