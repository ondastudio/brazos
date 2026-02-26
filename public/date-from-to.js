export function datefromto() {
  console.log("datefromto");


  const element = document.querySelector(".from-to-wrapper");
  if (!element) return;



  $(".from-to-wrapper").each(function () {
    let $wrapper = $(this);
    let $from = $wrapper.find("div[date-from]");
    let $to = $wrapper.find("div[date-to]");

    if ($from.length && $to.length) {
      let fromText = $from.text().trim();
      let toText = $to.text().trim();

      // Function to parse month, day, and year manually
      function parseDate(dateString) {
        let parts = dateString.match(/([A-Za-z]+) (\d+), (\d+)/);
        if (!parts) return null;

        let [, month, day, year] = parts;
        let dateObj = new Date(`${month} ${day}, ${year}`);
        return { month, day: parseInt(day), year: parseInt(year), dateObj };
      }

      let fromDate = parseDate(fromText);
      let toDate = parseDate(toText);

      if (fromDate && toDate) {
        if (fromDate.month === toDate.month && fromDate.year === toDate.year) {
          let formattedDate = `${fromDate.month} ${fromDate.day}-${toDate.day}, ${fromDate.year}`;

          // Replace contents with merged format
          $wrapper.html(`<div>${formattedDate}</div>`);
        }
      }
    }
  });
}
