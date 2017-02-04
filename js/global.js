(() => {
  const mySiema = new Siema({
    draggable: false,
    startIndex: 1,
  });
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
  document.querySelector('.next').addEventListener('click', () => mySiema.next());
})();