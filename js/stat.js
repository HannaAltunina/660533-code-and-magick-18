'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TITLE_X = 150;
var CLOUD_TITLE_Y = 40;
var FONT_SIZE = 20;
var FONT_GAP = 5;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var columnHeight = CLOUD_HEIGHT - CLOUD_TITLE_Y + GAP - 3 * FONT_SIZE - 5 * FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx. fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '20px PT Mono';
  ctx.fillStyle = '#111';
  ctx.fillText('Ура вы победили!', CLOUD_TITLE_X, CLOUD_TITLE_Y);
  ctx.fillText('Список результатов:', CLOUD_TITLE_X, CLOUD_TITLE_Y + FONT_SIZE + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - FONT_SIZE - FONT_GAP, COLUMN_WIDTH, -columnHeight * times[i] / maxTime);
    } else {
      ctx.fillStyle = 'hsl(245, ' + Math.random() * 100 + '%, 50%)';
      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - FONT_SIZE - FONT_GAP, COLUMN_WIDTH, -columnHeight * times[i] / maxTime);
    }

    ctx.fillStyle = '#111';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - FONT_SIZE - 2 * FONT_GAP - columnHeight * times[i] / maxTime);
  }
};
