const intervalManager = intervalManage();

const Renderer = () => {
  const renderPlayground = (frogs) => {
    $('#playground').empty();
    let width = $('#playground').width();
    let height = $('#playground').height();

    for (let frog of frogs) {
      let _randomWidthNum = Math.floor(Math.random() * (width - 200));
      let _randomHeightNum = Math.floor(Math.random() * (height - 200));
      let _frogSize = Math.floor(Math.random() * 7);
      let _colors = colors;

      let index = frogs.indexOf(frog);

      const frogDiv = `<div style = 'left: ${_randomWidthNum}px; top: ${_randomHeightNum}px; color:${_colors[index]}' 
                       id = '${frog}' class = 'frogClass' onclick = frogClicked(${frog})>
                       <i class="fas fa-frog fa-${_frogSize}x"></i></div>`;
      $('#playground').append(frogDiv);
    }
  };

  const frogsLeft = (frogLeftNum) => {
    $('#frogsLeft').empty();
    $('#frogsLeft').text(frogLeftNum);
  };

  const level = (levelNum) => {
    $('#levelNum').empty();
    $('#levelNum').text(levelNum);
  };

  const startText = () => {
    $('#startCatching').empty();
    $('#startCatching').text('Catch the Frogs!');
  };

  const setTimer = (time) => {
    $('#secondTimer').text(time);

    const secondsLeft = intervalManager.addInterval(() => {
      $('#secondTimer').text(`${time}`);
      time--;

      if (time <= -1) {
        alert(`You haven't catch all the Frogs 🐸`);
        clearInterval(secondsLeft);
        window.location.reload();
      }
    }, 1000);
  };

  const renderFrogsToBeRemoved = (frogs, frogLeftNum, levelNum, colors) => {
    renderPlayground(frogs, colors);
    frogsLeft(frogLeftNum);
    level(levelNum);
  };

  const renderFrogs = (frogs, time, frogLeftNum, levelNum) => {
    renderPlayground(frogs);
    startText();
    frogsLeft(frogLeftNum);
    level(levelNum);
    setTimer(time);
  };

  return { renderFrogs, renderFrogsToBeRemoved };
};
