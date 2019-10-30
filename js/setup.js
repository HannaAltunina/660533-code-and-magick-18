'use strict';

(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');
  var form = document.querySelector('.setup-wizard-form');
  var coatColor;
  var eyesColor;

  var wizard = {
    onEyesChange: function (color) {
      eyesColor = color;
      window.similar.updateWizards();
    },
    onCoatChange: function (color) {
      coatColor = color;
      window.similar.updateWizards();
    }
  };

  var changingWizardColor = function (element, arr, input) {
    var color = window.util.getRandomElement(arr);
    element.style.fill = color;
    element.style.background = color;
    input.value = color;
  };

  setupWizardCoat.addEventListener('click', function () {
    changingWizardColor(setupWizardCoat, window.WIZARD_COAT_COLORS, coatColorInput);
    var newColor = coatColorInput.value;
    wizard.onCoatChange(newColor);
  });

  setupWizardEyes.addEventListener('click', function () {
    changingWizardColor(setupWizardEyes, window.WIZARD_EYES_COLORS, eyesColorInput);
    var newColor = eyesColorInput.value;
    wizard.onEyesChange(newColor);
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

  window.setup = {
    wizard: wizard,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
})();
