function trocardisplay(divs) {
  let nav = "#" + divs.html();
  $(nav).toggle("1s");
}
function fechar(){

  $(".navs").hide("1s");
  }

$("#outrosmenus").click(() => {
  $("#namemenu").toggle("3s");
  $("#restomenus").toggle("3s");
});

$("#inventario-btn").click(() => {
  fechar();
  trocardisplay($("#inventario-btn"));
});

$("#loja-btn").click(() => {
  fechar();
  trocardisplay($("#loja-btn"));
});

$("#avatar-btn").click(() => {
  fechar();
  trocardisplay($("#avatar-btn"));
});

$("#quests-btn").click(() => {
  fechar();
  trocardisplay($("#quests-btn"));
});

$("#creditos-btn").click(() => {
  fechar();
  trocardisplay($("#creditos-btn"));
});

$(".x").click(()=>{
  fechar();
})
