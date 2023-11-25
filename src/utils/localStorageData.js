export const localStorageData = () => {
  let data = localStorage.getItem("todos");
  return JSON.parse(data) || [];
};
