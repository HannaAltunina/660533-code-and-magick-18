'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (data) {
    var wizardsNumber = data.length > WIZARDS_COUNT ? WIZARDS_COUNT : data.length;
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizardsNumber; j++) {
      fragment.appendChild(renderWizard(data[j]));
    }
    similarList.innerHTML = '';
    similarList.appendChild(fragment);
  };

  window.render = {
    renderWizards: renderWizards
  };

})();
