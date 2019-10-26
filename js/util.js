'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  window.ESC_KEYCODE = ESC_KEYCODE;
  window.ENTER_KEYCODE = ENTER_KEYCODE;
  window.WIZARD_NAMES = WIZARD_NAMES;
  window.WIZARD_SURNAMES = WIZARD_SURNAMES;
  window.WIZARD_COAT_COLORS = WIZARD_COAT_COLORS;
  window.WIZARD_EYES_COLORS = WIZARD_EYES_COLORS;


  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,

    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    generateWizard: function (wizard) {
      wizard = {
        name: (window.util.getRandomElement(WIZARD_NAMES) + ' ' + window.util.getRandomElement(WIZARD_SURNAMES)),
        coatColor: window.util.getRandomElement(WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomElement(WIZARD_EYES_COLORS)
      };
      return wizard;
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
