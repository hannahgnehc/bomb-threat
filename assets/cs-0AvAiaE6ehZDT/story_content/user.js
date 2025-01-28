function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZqmEDpVQwn":
        Script1();
        break;
      case "6dP0P0TsOoE":
        Script2();
        break;
      case "6J3wlGGSdXB":
        Script3();
        break;
      case "5V53jHRDz86":
        Script4();
        break;
      case "6lyZeE3Svjf":
        Script5();
        break;
      case "6OOlU3oKxav":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5lmCR96Rw7Q');
const duration = 4000;
const easing = 'ease-out';
const id = '6GM6qZuJhpA';
const pulseAmount = 0.07;
const delay = 1500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5Z3OTodOtT6');
const duration = 4000;
const easing = 'ease-out';
const id = '5qRdmvoVTXI';
const pulseAmount = 0.07;
const delay = 1500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5w2zyCTGjWB');
const duration = 4000;
const easing = 'ease-out';
const id = '6ME3GHrR37P';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5qnWUfNZutb');
const duration = 4000;
const easing = 'ease-out';
const id = '6GM6qZuJhpA';
const pulseAmount = 0.07;
const delay = 1500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5ZybML6kwLz');
const duration = 4000;
const easing = 'ease-out';
const id = '5qRdmvoVTXI';
const pulseAmount = 0.07;
const delay = 1500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6fAVLGr4YQO');
const duration = 4000;
const easing = 'ease-out';
const id = '6ME3GHrR37P';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
