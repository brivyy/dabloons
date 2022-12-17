function abrir(divs) {
  let nav = "#" + divs.html();
  $(nav).toggle("1s");
}

$("#outrosmenus").click(() => {
  $("#namemenu").toggle("3s");
  $("#restomenus").toggle("3s");
});

$("#inventario-btn").click(() => {
  abrir($("#inventario-btn"));
});

$("#loja-btn").click(() => {
  abrir($("#loja-btn"));
});

$("#avatar-btn").click(() => {
  abrir($("#avatar-btn"));
});

$("quests-btn").click(() => {
  abrir($("#quests-btn"));
});

$("#creditos-btn").click(() => {
  abrir($("#creditos-btn"));
});
