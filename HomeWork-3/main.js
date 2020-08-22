const $btnCharacter = document.getElementById('btn-kick');
const $btnEnemy = document.getElementById('bth-kick-enemy');


const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
}

// Buttons
$btnCharacter.addEventListener('click', function () {
  console.log('Kick character');
  changeHP(random(20), character);
});

$btnEnemy.addEventListener('click', function functionName() {
  console.log('Kick enemy');
  changeHP(random(20), enemy);
});

// functions

function init() {
  console.log('Start Game!');
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {

  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;

}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP - count <= 0) {
    person.damageHP = 0;
    renderHP(person);

    alert(person.name + ' проиграл бой!');
    $btnEnemy.disabled = true;
    $btnCharacter.disabled = true;

    let choice = confirm('Restart?');
    if (choice === true) {

      $btnEnemy.disabled = false;
      $btnCharacter.disabled = false;
      enemy.damageHP = 100;
      character.damageHP = 100;

      renderHP(enemy);
      renderHP(character);
    }

  }else {
    person.damageHP -= count;
    renderHP(person);
  }
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
