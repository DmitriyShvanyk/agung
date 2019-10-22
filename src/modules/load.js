export { LoadData };

// класс Предзагрузка данных (UX)
class LoadData {
  load(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  }
}