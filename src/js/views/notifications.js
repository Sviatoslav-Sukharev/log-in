function getContainer() {
  return document.querySelector(".notify-container");
}

function getAlertIndex() {
  return document.querySelectorAll(".notify-container .alert").length;
}

function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" data-index="${index}">
      ${msg}
    </div>
  `
}

function createNotifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 10px; right: 10px;"></div>
  `
}

function createNotifyContainer() {
  const template = createNotifyContainerTemplate();
  document.body.insertAdjacentHTML("afterbegin", template);
}

export function notify({msg = "message", className = "alert-info", timeout = 2000} = {}) {
  if(!getContainer()) {
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container  = getContainer();

  container.insertAdjacentHTML("beforeend", template);

  setTimeout(() => {
    closeNotify(index);
  }, timeout);
}

export function closeNotify(index) {
  let alert;
  if(index === undefined) {
    alert = document.querySelector(".notify-container .alert");
  } else {
    alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
  }

  if(!alert) {
    console.warn("Alert is not found!");
    return;
  }

  const container = getContainer();
  container.removeChild(alert);  
}