async function loadEvent() {
    
     const rootElement = document.getElementById('root');

    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    console.log(countries);

    for (const country of countries) {
          
        const countryHTML = `
            <section class="independent">
                <img src="${country.flags.png}" alt="flag">
                <h1>${country.name.official}</h1>
                <h2>${country.capital}</h2>
            </section>
            `;
        rootElement.insertAdjacentHTML('beforeend', countryHTML);
    }

   /*    
    // console.log(`peru's length: `,peru.length);
    // console.log(typeof peru);
    // console.log(peru[0].name.official);

    const country = peru[0];

    //ITERATING OVER LANGUAGES
    let firstLang = `first language`;
    for (let language in peru[0].languages) {
        firstLang = peru[0].languages[language];
        break;
      }

    //LANDLOCKED OR NOT
    if (country.landlocked === true) {
        isLandlockedText = `Peru is a landlocked country`;
    } else {
        isLandlockedText = `Peru is not a landlocked country`;
    }

    const peruHTML = `
        <section class="independent">
            <img src="${country.flags.png}" alt="flag">
            <h1>${country.name.official}</h1>
            <h2>${country.capital}</h2>
            <ul>
                <li>First language: ${firstLang}</li>
            </ul>
            <h5>${isLandlockedText}</h5>
        </section>
    `;

    console.log(rootElement);

    rootElement.insertAdjacentHTML('beforeend', peruH TML); */
}

window.addEventListener("load", loadEvent);