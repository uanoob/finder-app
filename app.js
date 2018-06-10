// Init Github
const github = new Github();

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
          console.log('User Not Found');
        } else {
          // Show profile
          console.log(data.profile);
        }
      })
      .catch(err => console.log(err));
  } else {
    // Clear profile
  }
});
