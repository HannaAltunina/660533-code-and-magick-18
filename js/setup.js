'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
var coatColorInput = document.getElementsByName('coat-color');
var eyesColorInput = document.getElementsByName('eyes-color');
var fireballColorInput = document.getElementsByName('fireball-color');


var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizard = function (wizard) {
  wizard = {
    name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES)),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  };
  return wizard;
};

var getWizards = function (length) {
  var wizards = [];
  for (var i = 0; i < length; i++) {
    wizards[i] = generateWizard();
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var wizards = getWizards(WIZARDS_NUMBER);
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  return fragment;
};

renderWizards();

similarList.appendChild(renderWizards());

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('click', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupUserName.addEventListener('keydown', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = getRandomElement(WIZARD_COAT_COLORS);
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = getRandomElement(WIZARD_EYES_COLORS);
});

setupWizardFireball.addEventListener('click', function () {
  setupWizardFireball.style.background = getRandomElement(WIZARD_FIREBALL_COLORS);
});

coatColorInput.value = getRandomElement(WIZARD_COAT_COLORS);
