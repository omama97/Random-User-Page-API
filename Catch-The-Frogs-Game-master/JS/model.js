const catchTheFrogs = () => {
  let _frogs = [1];
  let _frogsRemovedFromScreen = [1];
  let _frogsUserClickedOnIt = [];
  let _frogsNumber = 2;
  let _timer = 3;
  let _level = 1;

  const getFrogs = () => _frogs;
  const getFrogsRemovedFromScreen = () => _frogsRemovedFromScreen;
  const getFrogsUserClickedOnIt = () => _frogsUserClickedOnIt;
  const getFrogLeftNum = () => _frogsRemovedFromScreen.length;
  const getTimer = () => _timer;
  const getLevel = () => _level;

  const addFrog = () => {
    _frogs.push(_frogsNumber);
    _frogsRemovedFromScreen.push(_frogsNumber);
    _frogsNumber++;
  };

  const removeFrog = (frogsNum) => {
    let index = _frogsRemovedFromScreen.indexOf(frogsNum);
    _frogsRemovedFromScreen.splice(index, 1);
  };

  const catchedFrogs = (id) => {
    _frogsUserClickedOnIt.push(id);
    removeFrog(id);
  };

  const nextSequence = (callback) => {
    if (_frogs.length === _frogsUserClickedOnIt.length) {
      _frogsUserClickedOnIt = [];
      addFrog();
      _timer++;
      _level++;
      _frogsRemovedFromScreen = [..._frogs];
      callback(getFrogs(), getTimer(), getFrogLeftNum(), getLevel());
    }
  };

  return {
    getFrogs,
    getFrogsToBeRemoved: getFrogsRemovedFromScreen,
    getClickedFrogs: getFrogsUserClickedOnIt,
    getFrogLeftNum,
    getTimer,
    getLevel,
    addFrog,
    removeFrog,
    catchedFrogs,
    nextSequence,
  };
};
