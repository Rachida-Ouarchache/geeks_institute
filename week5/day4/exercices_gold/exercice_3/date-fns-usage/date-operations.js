const { addDays, format } = require("date-fns");

function showDateOperations() {
  const now = new Date();

  const futureDate = addDays(now, 5);

  const formattedDate = format(futureDate, "yyyy-MM-dd HH:mm:ss");

  console.log("Current date:", now);
  console.log("Date + 5 days:", formattedDate);
}

module.exports = showDateOperations;
