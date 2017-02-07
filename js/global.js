(() => {
  // Siema slider
  const progress = document.querySelector('.progress');
  const updateProgress = (currentIndex) => {
    progress.value = (currentIndex / 4) * 100;
    document.querySelectorAll('.step').forEach((s) => s.classList.remove('is-active'));
    const activeMenuItem = document.querySelector(`.step-${currentIndex}`).classList.add('is-active');
  };
  const mySiema = new Siema({
    draggable: false,
    startIndex: 2,
    initCallback: updateProgress,
    dragCallback: updateProgress,
  });
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev(updateProgress));
  document.querySelector('.next').addEventListener('click', () => mySiema.next(updateProgress));
  
  // Menu click
  document.querySelectorAll('.step').forEach((s) => s.addEventListener('click', () => mySiema.goTo(s.dataset.step, updateProgress)));

  // Add colaborator button
  const addColabButton = document.querySelector('.addColaborator');
  const colaboratorsList = document.querySelector('.colaborators-list');
  addColabButton.addEventListener('click', (e) => {
    e.preventDefault();
    const colaboratorEmail = document.querySelector('#newColaboratorEmail');
    const colaboratorNotify = document.querySelector('#shouldNotifyNewColaborator');
    if (colaboratorEmail.value === '') { return alert('Cannot be blank'); }
    colaboratorsList.innerHTML += `<div>
    <p class="vertical-center">
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp;
      ${colaboratorEmail.value} - ${colaboratorNotify.checked ? 'Will': 'Will not'} notify
    </p></div>`;
    colaboratorEmail.value = '';
    colaboratorNotify.checked = false;
  });

  // Add milestone button
  const addMilestoneButton = document.querySelector('.addMilestone');
  const milestonesList = document.querySelector('.milestone-list');
  addMilestoneButton.addEventListener('click', (e) => {
    e.preventDefault();
    const milestoneName = document.querySelector('#milestoneName');
    const milestoneDueDate = document.querySelector('#milestoneDueDate');
    const milestoneDescription = document.querySelector('#milestoneDescription');
    if (milestoneName.value === ''
        || milestoneDueDate.value === ''
        || milestoneDescription.value === '') { return alert('Cannot be blank'); }
    milestonesList.innerHTML +=`<div>
      <p class="vertical-center"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;${milestoneName.value}&nbsp;-&nbsp;
      <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;${milestoneDueDate.value}</p>
    </div>`;
    milestoneName.value = '';
    milestoneDueDate.value = '';
    milestoneDescription.value = '';
  });
})();