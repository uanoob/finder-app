class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    const template = `<div class="card card-body mb-3">
                        <div class="row">
                          <div class="col-md-3">
                            <img class="img-fluid mb-2" src="${
                              user.avatar_url
                            }">
                            <a href="${
                              user.html_url
                            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                          </div>
                        </div>
                        <div class="row">
                        <div class="col-md-9">
                            <span class="badge badge-primary">Public Repos: ${
                              user.public_repos
                            }</span>
                            <span class="badge badge-secondary">Public Gists: ${
                              user.public_gists
                            }</span>
                            <span class="badge badge-success">Followers: ${
                              user.followers
                            }</span>
                            <span class="badge badge-info">Followings: ${
                              user.following
                            }</span>
                            <br>
                            <ul class="list-group">
                              <li class="list-group-item">Company: ${
                                user.company
                              }</li>
                              <li class="list-group-item">Website/Blog: ${
                                user.blogy
                              }</li>
                              <li class="list-group-item">Location: ${
                                user.location
                              }</li>
                              <li class="list-group-item">Member Since: ${
                                user.created_at
                              }</li>
                            </ul>
                        </div>
                      </div>
                      </div>
                      <h3 class="page-heading mb-3">Latest Repos</h3>
                      <div id="repos"></div>
                      `;

    this.profile.innerHTML = template;
  }
  // Show alert message
  showAlert(message, className) {
    const template = `<div class="${className}">${message}</div>`;
    this.profile.innerHTML = template;
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
