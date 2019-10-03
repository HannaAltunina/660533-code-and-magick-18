'use strict';

(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_NUMBER = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');
  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var getWizards = function (length) {
    var wizards = [];
    for (var i = 0; i < length; i++) {
      wizards[i] = window.util.generateWizard();
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

  var changingWizardColor = function (element, arr, input) {
    var color = window.util.getRandomElement(arr);
    element.style.fill = color;
    element.style.background = color;
    input.value = color;
  };

  setupWizardCoat.addEventListener('click', function () {
    changingWizardColor(setupWizardCoat, window.WIZARD_COAT_COLORS, coatColorInput);
  });

  setupWizardEyes.addEventListener('click', function () {
    changingWizardColor(setupWizardEyes, window.WIZARD_EYES_COLORS, eyesColorInput);
  });

  setupWizardFireball.addEventListener('click', function () {
    changingWizardColor(setupWizardFireball, WIZARD_FIREBALL_COLORS, fireballColorInput);
  });
})();
