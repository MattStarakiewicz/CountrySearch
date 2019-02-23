"use strict";

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');
var capitalsList = document.getElementById('capitals');
var currenciesList = document.getElementById('currencies');
var languagesList = document.getElementById('languages');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);  
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });

    capitalsList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.capital;      
        capitalsList.appendChild(liEl);
    });

    currenciesList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.currencies[0].name;
        currenciesList.appendChild(liEl);
    });

    languagesList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.languages[0].name;
        languagesList.appendChild(liEl);
    });
}


