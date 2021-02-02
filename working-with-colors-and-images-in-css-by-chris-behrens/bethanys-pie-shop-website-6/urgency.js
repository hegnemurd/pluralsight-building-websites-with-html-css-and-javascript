function getUrgencyLevel(value) {
  if (value < 4) {
    return 1;
  }

  if (value < 9) {
    return 2;
  }

  return 3;
}

function colorUrgencies() {
  var lateOrders = document.querySelectorAll("#lateOrders tr.late");

  for (var i = 0; i < lateOrders.length; i++) {
    var id = lateOrders[i].attributes["id"].value;

    var daysLateId = "#" + id + " td.daysLate";

    var daysLate = parseInt(document.querySelector(daysLateId).innerText);
    var urgencyLevel = getUrgencyLevel(daysLate);

    var lateCell = document.querySelector(daysLateId);
    lateCell.classList.add("urgency" + urgencyLevel);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  colorUrgencies();
});
