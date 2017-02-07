(() => {
  // Siema slider
  const progress = document.querySelector('.progress');
  const lastSlideIndex = 4;

  const updateReview = () => {
    // This function is just to demonstration pourpose only
    // In a real word app you probably should use something like
    // React or Vue to build your interface
    document.querySelector('.review-name').querySelector('.value').innerHTML = document.querySelector('#projectName').value;
    document.querySelector('.review-type').querySelector('.value').innerHTML = document.querySelector('#projectType').value;
    document.querySelector('.review-sourceControlUrl').querySelector('.value').innerHTML = document.querySelector('#svcUrl').value;
    document.querySelector('.review-taskManagementUrl').querySelector('.value').innerHTML = document.querySelector('#taskManagementUrl').value;
    document.querySelector('.review-domainUrl').querySelector('.value').innerHTML = document.querySelector('#domainUrl').value;
    document.querySelector('.review-description').querySelector('.value').innerHTML = document.querySelector('#description').value;
    document.querySelector('.review-startDate').querySelector('.value').innerHTML = document.querySelector('#startDate').value;
    document.querySelector('.review-endDate').querySelector('.value').innerHTML = document.querySelector('#endDate').value;

    const colaboratorList = Array.prototype.map.call(document.querySelectorAll('.colaborators-list .colaborator'), (colaborator) => {
      return `<div class="vertical-center"><i class="fa fa-user" aria-hidden="true"></i>&nbsp; ${colaborator.querySelector('.colaborator-email').textContent}</div>`;
    }).join('<br>');
    document.querySelector('.review-colaboratorList').querySelector('.value').innerHTML = colaboratorList;
    const milestonesList = Array.prototype.map.call(document.querySelectorAll('.milestone-list .milestone'), (milestone) => {
      return `<div class="vertical-center">
        <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;${milestone.querySelector('.milestone-title').textContent}&nbsp;-&nbsp;
        <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;${milestone.querySelector('.milestone-due').textContent}
      </div>`;
    }).join('<br>');
    document.querySelector('.review-milestoneList').querySelector('.value').innerHTML = milestonesList;
    const checklistContent = Array.prototype.map.call(document.querySelectorAll('.checklist-question'), (questionWrapper) => {
      return `<strong>${questionWrapper.querySelector('label').textContent}</strong> ${questionWrapper.querySelector('select').value}`;
    }).join('<br>');
    document.querySelector('.review-checklist').querySelector('.value').innerHTML = checklistContent;
  }

  const updateProgress = (currentIndex) => {
    progress.value = (currentIndex / lastSlideIndex) * 100;
    document.querySelectorAll('.step').forEach((s) => s.classList.remove('is-active'));
    const activeMenuItem = document.querySelector(`.step-${currentIndex}`).classList.add('is-active');

    if (currentIndex === lastSlideIndex) {
      updateReview()
      document.querySelector('.finish').style.display = 'inline-flex';
      document.querySelector('.next').style.display = 'none';
    } else if (currentIndex === 0) {
      document.querySelector('.prev').style.display = 'none';
      document.querySelector('.finish').style.display = 'none';
      document.querySelector('.next').style.display = 'inline-flex';
    } else {
      document.querySelector('.finish').style.display = 'none';
      document.querySelector('.next').style.display = 'inline-flex';
      document.querySelector('.prev').style.display = 'inline-flex';
    }
  };

  const mySiema = new Siema({
    draggable: false,
    startIndex: 0,
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
    <p class="vertical-center colaborator">
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp;
      <span class="colaborator-email">${colaboratorEmail.value}</span> - ${colaboratorNotify.checked ? 'Will': 'Will not'} notify
      &nbsp;<a class="delete is-small"></a>
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
      <p class="vertical-center milestone">
        <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;<span class="milestone-title">${milestoneName.value}</span>&nbsp;-&nbsp;
        <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;<span class="milestone-due">${milestoneDueDate.value}</span>
        &nbsp;<a class="delete is-small"></a>
      </p></div>`;
    milestoneName.value = '';
    milestoneDueDate.value = '';
    milestoneDescription.value = '';
  });
})();