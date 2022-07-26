const startPlay = catchTheFrogs();
const renderer = Renderer();

const frogClicked = (id) => {
  startPlay.catchedFrogs(id);
  renderer.renderFrogsToBeRemoved(
    startPlay.getFrogsToBeRemoved(),
    startPlay.getFrogLeftNum(),
    startPlay.getLevel()
  );
  startPlay.nextSequence(renderer.renderFrogs);
};

const startCatching = () => {
  renderer.renderFrogs(
    startPlay.getFrogs(),
    startPlay.getTimer(),
    startPlay.getFrogLeftNum(),
    startPlay.getLevel()
  );
};
