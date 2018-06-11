// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get user text
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github
      .getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
      .catch(err => console.log(err));
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
