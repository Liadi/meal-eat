var modalMain = document.getElementById('modal-main');
var signupForm = document.getElementById('signup-form');
var signinForm = document.getElementById('signin-form');
var formToggleState = "";

function clickModal(event) {
  event.stopPropagation();
  if (event.target.id === 'modal-main') {
    modalMain.hidden = true;
    toggleForm("");
  }
}

function openModal(event) {
  event.stopPropagation();
  if (!modalMain.hidden) {
    return;
  }
  modalMain.hidden = false;
  if (event.target.id === 'signup-btn') {
    toggleForm('signup');
  } else if (event.target.id === 'signin-btn') {
    toggleForm('signin');
  }

}

function toggleForm(state) {
  formToggleState = state
  if (!formToggleState) {
    signupForm.hidden = true;
    signinForm.hidden = true;
  } else if (formToggleState === 'signin') {
    signupForm.hidden = true;
    signinForm.hidden = false;
  } else if (formToggleState === 'signup') {
    signupForm.hidden = false;
    signinForm.hidden = true;
  }

}
