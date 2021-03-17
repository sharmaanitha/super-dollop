var dragondamage = 0;
function dragon(damage, attack) {
  if (attack == "Fire") {
    // Note if statements because of 3 different buttons.
    dragondamage = dragondamage + damage - 1;
    document.body.querySelector(".dragon").innerHTML =
      "Dragon Damage from Fire: " + dragondamage;
  }
  if (attack == "Ice") {
    dragondamage = dragondamage + damage + 1;
    document.body.querySelector(".dragon").innerHTML =
      "Dragon Damage from Ice: " + dragondamage;
  }
  if (attack == "Poison") {
    dragondamage = dragondamage + damage;
    document.body.querySelector(".dragon").innerHTML =
      "Dragon Damage from Poison: " + dragondamage;
  }
  if (dragondamage >= 10) {
    document.body.querySelector(".dragon").innerHTML =
      "Dragon Damage: " + dragondamage + ". You win!";
  }
}
document.body.querySelector(".button1").addEventListener("click", function () {
  dragon(3, "Fire");
});
document.body.querySelector(".button2").addEventListener("click", function () {
  dragon(1, "Ice");
});
document.body.querySelector(".button3").addEventListener("click", function () {
  dragon(4, "Poison");
});