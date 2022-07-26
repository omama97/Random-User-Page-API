const intervalManage = () => {
  let timeArr = [];

  const addInterval = (callback) => {
    timeArr.forEach((id) => clearInterval(id));
    timeArr = [];

    const intervalId = setInterval(callback, 1000);
    timeArr.push(intervalId);

    return intervalId;
  };
  return { addInterval };
};
