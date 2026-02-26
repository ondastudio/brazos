
export function contryStates() {
  console.log("contryStates");


  const element = document.querySelector("#countries");
  if (!element) return;






  const COUNTRY_DATA_URL =
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json";

  $.getJSON(COUNTRY_DATA_URL, function (data) {
    populateCountries(data);

    $("#countries").on("change", function () {
      const countryName = $(this).val();
      if (countryName) {
        const selectedCountry = data.find((c) => c.name === countryName);
        populateStates(selectedCountry?.states || []);
      } else {
        resetStates();
      }
    });
  });

  function populateCountries(countries) {
    const $countrySelect = $("#countries");
    $countrySelect.empty().append('<option value="">Country*</option>');
    countries.forEach((country) => {
      $countrySelect.append(
        `<option value="${country.name}">${country.name}</option>`
      );
    });
    resetStates();
  }

  function populateStates(states = []) {
    const $stateSelect = $("#states");
    $stateSelect.empty();
    if (states.length) {
      appendDefaultOption($stateSelect, "State*");
      states.forEach((state) => {
        $stateSelect.append(
          `<option value="${state.name}">${state.name}</option>`
        );
      });
    } else {
      appendDefaultOption($stateSelect, "No states found");
    }
  }

  function appendDefaultOption($select, text) {
    $select.append(`<option value="">${text}</option>`);
  }

  function resetStates() {
    appendDefaultOption($("#states").empty(), "State*");
  }
}
