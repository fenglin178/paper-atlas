'use strict';
const slider = document.getElementById('gate-logit');
function updateGateDemo() {
  const t = Number(slider.value);
  const g = 1 / (1 + Math.exp(-t));
  const ns = 0.5 + 0.5 * g;
  document.getElementById('logit-value').textContent = t.toFixed(1);
  document.getElementById('gate-result').textContent = `普通 Gate：${g.toFixed(3)}，输出：${(2*g).toFixed(3)}；NS Gate：${ns.toFixed(3)}，输出：${(2*ns).toFixed(3)}。`;
}
slider.addEventListener('input', updateGateDemo);
updateGateDemo();
