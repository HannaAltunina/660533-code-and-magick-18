'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


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

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});
