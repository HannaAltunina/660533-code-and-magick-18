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
  var form = document.querySelector('.setup-wizard-form');
  var setupFooter = document.querySelector('.setup-footer');


  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < WIZARDS_NUMBER; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarList.appendChild(fragment);
  }, function () {
    setupFooter.insertAdjacentHTML('afterbegin', '<h1>Произошла ошибка соединения</h1>');
  }
  );

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

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
