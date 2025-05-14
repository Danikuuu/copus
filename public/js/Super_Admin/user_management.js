document.addEventListener("DOMContentLoaded", function () {
  const addUserBtn = document.querySelector(".create-account-icon");
  const userManagementView = document.getElementById("userManagementView");
  const addUserView = document.getElementById("addUserView");
  const cancelBtn = document.getElementById("cancelAddUser");

  if (addUserBtn) {
    addUserBtn.addEventListener("click", function () {
      userManagementView.style.display = "none";
      addUserView.style.display = "block";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      addUserView.style.display = "none";
      userManagementView.style.display = "block";
    });
  }
});
