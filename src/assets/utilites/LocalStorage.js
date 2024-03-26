const getIteam = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const setIteam = (key, value) => {
  const pre = getIteam(key);
  const isHave = pre.find((el) => el === value);
  if (!isHave) {
    pre.push(value);
    localStorage.setItem(key, JSON.stringify(pre));
    return true;
  } else {
    return false;
  }
};
const removeIteam = (key, value) => {
  const prevData = getIteam(key);
  const updateData = prevData.filter((el) => el !== value);
  localStorage.setItem(key, JSON.stringify(updateData));
};

export { getIteam, setIteam, removeIteam };
