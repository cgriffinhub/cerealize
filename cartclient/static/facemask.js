$('.base_item').each(function () {

      if ($(this).val() == '7') {
            $(this).attr("id", "#EAEAEA");
      }
      if ($(this).val() == '8') {
            $(this).attr("id", "#FBFBF1");
      }
      if ($(this).val() == '9') {
            $(this).attr("id", "#E8F2D8");
      }
      if ($(this).val() == '10') {
            $(this).attr("id", "#D09B7E");
      }
});

$('.addon_item').each(function () {
      if ($(this).val() == '11') {

                  $(this).attr("id", "#e3b291");
            }
            if ($(this).val() == '12') {
                  $(this).attr("id", "#f6dc3d");
            }
            if ($(this).val() == '13') {
                  $(this).attr("id", "#a9bf7a");
      }
      if ($(this).val() == '14') {
            $(this).attr("id", "#c8e5c3");
}
if ($(this).val() == '15') {
      $(this).attr("id", "#e1f0b6");
}
if ($(this).val() == '16') {
      $(this).attr("id", "#cc7319");
}
if ($(this).val() == '17') {
      $(this).attr("id", "#f2ba50");
}
if ($(this).val() == '18') {
      $(this).attr("id", "#000000");
}
});

var imageObj = new Image();


var canvas = document.getElementById('layer1');
var context = canvas.getContext('2d');
imageObj.onload = function () {
      context.drawImage(imageObj, 0, 0);
};
imageObj.src = "/face.png";
var c = document.getElementById("layer2");
var base = c.getContext("2d");
//draw_short function is defined:
function baseDraw(color) {

      base.save();
      base.clearRect(0, 0, c.width, c.height);

      base.beginPath();
      base.moveTo(0, 0);
      base.lineTo(500, 0);
      base.lineTo(500, 500);
      base.lineTo(0, 500);
      base.closePath();
      base.clip();
      base.translate(0, 0);
      base.translate(0, 0);
      base.scale(1, 1);
      base.translate(0, 0);
      base.strokeStyle = 'rgba(0,0,0,0)';
      base.lineCap = 'butt';
      base.lineJoin = 'miter';
      base.miterLimit = 4;
      base.save();
      base.restore();
      base.save();
      base.fillStyle = color;
      base.globalAlpha = 0.8;
      base.strokeStyle = "rgba(0, 0, 0, 0)";
      base.translate(0, 400);
      base.scale(0.1, -0.1);
      base.save();
      base.beginPath();
      base.moveTo(1900, 3348);
      base.bezierCurveTo(1710, 3308, 1642, 3281, 1572, 3216);
      base.bezierCurveTo(1467, 3120, 1380, 2939, 1364, 2789);
      base.bezierCurveTo(1357, 2720, 1376, 2550, 1390, 2550);
      base.bezierCurveTo(1395, 2550, 1401, 2565, 1405, 2583);
      base.bezierCurveTo(1418, 2649, 1421, 2655, 1432, 2637);
      base.bezierCurveTo(1447, 2610, 1443, 2517, 1426, 2476);
      base.bezierCurveTo(1410, 2438, 1413, 2370, 1430, 2370);
      base.bezierCurveTo(1434, 2370, 1450, 2399, 1465, 2435);
      base.bezierCurveTo(1481, 2471, 1497, 2500, 1502, 2500);
      base.bezierCurveTo(1522, 2500, 1500, 2335, 1473, 2289);
      base.bezierCurveTo(1458, 2264, 1459, 2259, 1489, 2198);
      base.bezierCurveTo(1515, 2146, 1547, 2108, 1644, 2014);
      base.bezierCurveTo(1869, 1795, 1985, 1756, 2147, 1845);
      base.bezierCurveTo(2226, 1888, 2290, 1941, 2396, 2050);
      base.bezierCurveTo(2505, 2162, 2542, 2232, 2590, 2421);
      base.bezierCurveTo(2670, 2732, 2652, 2906, 2523, 3100);
      base.bezierCurveTo(2422, 3251, 2351, 3295, 2145, 3339);
      base.bezierCurveTo(2040, 3361, 1974, 3364, 1900, 3348);
      base.closePath();
      base.moveTo(1763, 2740);
      base.bezierCurveTo(1793, 2729, 1826, 2710, 1837, 2697);
      base.bezierCurveTo(1881, 2649, 1894, 2554, 1861, 2521);
      base.bezierCurveTo(1838, 2498, 1688, 2484, 1591, 2495);
      base.bezierCurveTo(1525, 2503, 1475, 2533, 1472, 2567);
      base.bezierCurveTo(1464, 2647, 1494, 2705, 1562, 2739);
      base.bezierCurveTo(1617, 2766, 1692, 2766, 1763, 2740);
      base.closePath();
      base.moveTo(2440, 2741);
      base.bezierCurveTo(2493, 2714, 2533, 2651, 2532, 2598);
      base.bezierCurveTo(2531, 2510, 2451, 2480, 2253, 2495);
      base.bezierCurveTo(2147, 2503, 2120, 2518, 2120, 2568);
      base.bezierCurveTo(2120, 2609, 2148, 2685, 2171, 2706);
      base.bezierCurveTo(2226, 2755, 2376, 2775, 2440, 2741);
      base.closePath();
      base.moveTo(1952, 2185);
      base.bezierCurveTo(1998, 2181, 2062, 2183, 2094, 2188);
      base.bezierCurveTo(2186, 2203, 2250, 2177, 2250, 2126);
      base.bezierCurveTo(2250, 2096, 2208, 2058, 2130, 2019);
      base.bezierCurveTo(2039, 1973, 1972, 1972, 1875, 2018);
      base.bezierCurveTo(1761, 2072, 1724, 2123, 1769, 2164);
      base.bezierCurveTo(1790, 2183, 1839, 2200, 1857, 2195);
      base.bezierCurveTo(1863, 2193, 1906, 2188, 1952, 2185);
      base.closePath();
      base.fill();
      base.stroke();
      base.restore();
      base.restore();
      base.restore();
};

var d = document.getElementById("layer3");
var addon = d.getContext("2d");
//draw_short function is defined:
function addonDraw(addon_color) {

      addon.save();
      addon.beginPath();
      addon.moveTo(0, 0);
      addon.lineTo(500, 0);
      addon.lineTo(500, 500);
      addon.lineTo(0, 500);
      addon.closePath();
      addon.clip();
      addon.translate(0, 0);
      addon.translate(0, 0);
      addon.scale(1, 1);
      addon.translate(0, 0);
      addon.strokeStyle = 'rgba(0,0,0,0)';
      addon.lineCap = 'butt';
      addon.lineJoin = 'miter';
      addon.miterLimit = 4;
      addon.save();
      addon.restore();
      addon.save();

      addon.fillStyle = addon_color;
      addon.globalAlpha = 0.5;
      addon.strokeStyle = "rgba(0, 0, 0, 0)";
      addon.translate(0, 400);
      addon.scale(0.1, -0.1);
      addon.save();
      addon.beginPath();
      addon.moveTo(1900, 3348);
      addon.bezierCurveTo(1710, 3308, 1642, 3281, 1572, 3216);
      addon.bezierCurveTo(1467, 3120, 1380, 2939, 1364, 2789);
      addon.bezierCurveTo(1357, 2720, 1376, 2550, 1390, 2550);
      addon.bezierCurveTo(1395, 2550, 1401, 2565, 1405, 2583);
      addon.bezierCurveTo(1418, 2649, 1421, 2655, 1432, 2637);
      addon.bezierCurveTo(1447, 2610, 1443, 2517, 1426, 2476);
      addon.bezierCurveTo(1410, 2438, 1413, 2370, 1430, 2370);
      addon.bezierCurveTo(1434, 2370, 1450, 2399, 1465, 2435);
      addon.bezierCurveTo(1481, 2471, 1497, 2500, 1502, 2500);
      addon.bezierCurveTo(1522, 2500, 1500, 2335, 1473, 2289);
      addon.bezierCurveTo(1458, 2264, 1459, 2259, 1489, 2198);
      addon.bezierCurveTo(1515, 2146, 1547, 2108, 1644, 2014);
      addon.bezierCurveTo(1869, 1795, 1985, 1756, 2147, 1845);
      addon.bezierCurveTo(2226, 1888, 2290, 1941, 2396, 2050);
      addon.bezierCurveTo(2505, 2162, 2542, 2232, 2590, 2421);
      addon.bezierCurveTo(2670, 2732, 2652, 2906, 2523, 3100);
      addon.bezierCurveTo(2422, 3251, 2351, 3295, 2145, 3339);
      addon.bezierCurveTo(2040, 3361, 1974, 3364, 1900, 3348);
      addon.closePath();
      addon.moveTo(1763, 2740);
      addon.bezierCurveTo(1793, 2729, 1826, 2710, 1837, 2697);
      addon.bezierCurveTo(1881, 2649, 1894, 2554, 1861, 2521);
      addon.bezierCurveTo(1838, 2498, 1688, 2484, 1591, 2495);
      addon.bezierCurveTo(1525, 2503, 1475, 2533, 1472, 2567);
      addon.bezierCurveTo(1464, 2647, 1494, 2705, 1562, 2739);
      addon.bezierCurveTo(1617, 2766, 1692, 2766, 1763, 2740);
      addon.closePath();
      addon.moveTo(2440, 2741);
      addon.bezierCurveTo(2493, 2714, 2533, 2651, 2532, 2598);
      addon.bezierCurveTo(2531, 2510, 2451, 2480, 2253, 2495);
      addon.bezierCurveTo(2147, 2503, 2120, 2518, 2120, 2568);
      addon.bezierCurveTo(2120, 2609, 2148, 2685, 2171, 2706);
      addon.bezierCurveTo(2226, 2755, 2376, 2775, 2440, 2741);
      addon.closePath();
      addon.moveTo(1952, 2185);
      addon.bezierCurveTo(1998, 2181, 2062, 2183, 2094, 2188);
      addon.bezierCurveTo(2186, 2203, 2250, 2177, 2250, 2126);
      addon.bezierCurveTo(2250, 2096, 2208, 2058, 2130, 2019);
      addon.bezierCurveTo(2039, 1973, 1972, 1972, 1875, 2018);
      addon.bezierCurveTo(1761, 2072, 1724, 2123, 1769, 2164);
      addon.bezierCurveTo(1790, 2183, 1839, 2200, 1857, 2195);
      addon.bezierCurveTo(1863, 2193, 1906, 2188, 1952, 2185);
      addon.closePath();
      addon.fill();
      addon.stroke();
      addon.restore();
      addon.restore();
      addon.restore();
};

$(".base_item").click(function () {
      baseDraw($(this).attr("id"));
});




$(".addon_item").click(function () {
      $('.addon_item').each(function () {
            if (this.checked === true) {
                  addonDraw($(this).attr("id"));
            }
            else if ($('.addon_item:checked').length === 0) {
                  addon.clearRect(0, 0, d.width, d.height);
            }
      })
});