function trocardisplay(divs) {
  let nav = "#" + divs.html();
  $(nav).toggle("1s");
}

$("#outrosmenus").click(() => {
  $("#namemenu").toggle("3s");
  $("#restomenus").toggle("3s");
});

$("#inventario-btn").click(() => {
  trocardisplay($("#inventario-btn"));
});

$("#loja-btn").click(() => {
  trocardisplay($("#loja-btn"));
});

$("#avatar-btn").click(() => {
  trocardisplay($("#avatar-btn"));
});

$("#quests-btn").click(() => {
  trocardisplay($("#quests-btn"));
});

$("#creditos-btn").click(() => {
  trocardisplay($("#creditos-btn"));
});

$(".x").click(()=>{

$(".navs").hide("1s");
})
