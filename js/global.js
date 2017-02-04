(() => {
  const progress = document.querySelector('.progress');
  const mySiema = new Siema({
    draggable: false,
    startIndex: 1,
  });

  const updateProgress = (currentIndex) => {
    progress.value = (currentIndex / 5) * 100;
  };
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev(updateProgress));
  document.querySelector('.next').addEventListener('click', () => mySiema.next(updateProgress));
})();