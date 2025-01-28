function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nJQGSpv4Dl":
        Script1();
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
const target = object('5cjBhLSWTo4');
const duration = 5000;
const easing = 'ease-out';
const id = '6oB7NaWekeJ';
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
