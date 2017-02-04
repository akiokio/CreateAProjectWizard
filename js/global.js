(() => {
  const progress = document.querySelector('.progress');
  const updateProgress = (currentIndex) => {
    progress.value = (currentIndex / 4) * 100;
    document.querySelectorAll('.step').forEach((s) => s.classList.remove('is-active'));
    const activeMenuItem = document.querySelector(`.step-${currentIndex}`).classList.add('is-active');
  };
  const mySiema = new Siema({
    draggable: false,
    startIndex: 1,
    initCallback: updateProgress,
    dragCallback: updateProgress,
  });
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev(updateProgress));
  document.querySelector('.next').addEventListener('click', () => mySiema.next(updateProgress));

  const addColabButton = document.querySelector('.addColaborator');
  const colaboratorsList = document.querySelector('.colaborators-list');
  addColabButton.addEventListener('click', () => {
    const colaboratorEmail = document.querySelector('#newColaboratorEmail');
    const colaboratorNotify = document.querySelector('#shouldNotifyNewColaborator');
    if (colaboratorEmail.value === '') { return alert('Cannot be blank'); }
    colaboratorsList.innerHTML += `<div><p>${colaboratorEmail.value} - ${colaboratorNotify.checked ? 'Will': 'Will not'} notify</p></div>`;
    colaboratorEmail.value = '';
    colaboratorNotify.checked = false;
  });
})();