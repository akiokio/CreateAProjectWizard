/* global FormValidator, alert */

(() => {
  const projectForm = document.querySelector('#projectForm')

  window.globalValidator = new FormValidator('projectForm', [
    {
      name: 'projectName',
      display: 'Project Name',
      rules: 'required'
    },
    {
      name: 'projectType',
      display: 'Project Type',
      rules: 'required'
    },
    {
      name: 'svcUrl',
      display: 'Source Control Url',
      rules: 'required|valid_url'
    },
    {
      name: 'taskManagementUrl',
      display: 'Task Management Url',
      rules: 'required|valid_url'
    },
    {
      name: 'domainUrl',
      display: 'Domain Url',
      rules: 'required|valid_url'
    },
    {
      name: 'startDate',
      display: 'Start Date',
      rules: 'required'
    },
    {
      name: 'endDate',
      display: 'End Date',
      rules: 'required'
    },
    {
      name: 'designReady',
      display: 'Design Ready answer',
      rules: 'required'
    },
    {
      name: 'domainBought',
      display: 'Domain Bought answer',
      rules: 'required'
    },
    {
      name: 'hostingReady',
      display: 'Hosting Ready answer',
      rules: 'required'
    },
    {
      name: 'landingPage',
      display: 'Landing Page answer',
      rules: 'required'
    },
    {
      name: 'socialMediaChannels',
      display: 'Social Media Channels answer',
      rules: 'required'
    },
    {
      name: 'teamEmails',
      display: 'Team Emails answer',
      rules: 'required'
    },
    {
      name: 'websiteTested',
      display: 'Website Tested answer',
      rules: 'required'
    },
    {
      name: 'backupRoutines',
      display: 'Backup Routines answer',
      rules: 'required'
    }
  ], function (errors, event) {
    if (errors.length > 0) {
      let errorString = ''

      for (let i = 0, errorLength = errors.length; i < errorLength; i++) {
        errorString += `<p>${errors[i].message}</p>`
      }

      document.querySelector('.error-list').innerHTML = `<article class="message is-danger">
        <div class="message-header">
          <p><strong>Found ${errors.length} Errors</strong>! </p>
        </div>
        <div class="message-body">${errorString}</div>
      </article>`
    }
  })

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (window.globalValidator.errors.length === 0) {
      console.log('valid')
      alert('form valid should send you form to the backend now')
      // projectForm.submit()
    }
  })
})()
