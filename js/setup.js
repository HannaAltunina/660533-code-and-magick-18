'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomArray = function (length, index) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = index;
  }
  return arr;
};

var wizard = {
  name: (getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES)) || (getRandomElement(WIZARD_SURNAMES) + ' ' + getRandomElement(WIZARD_NAMES)),
  coatColor: getRandomElement(WIZARD_COAT_COLOR),
  eyesColor: getRandomElement(WIZARD_EYES_COLOR)
};

var wizards = getRandomArray(4, wizard);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
