export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || "Invalid input";
  const template = inputErrorTemplate(msg);
  el.classList.add("is-invalid");
  parent.insertAdjacentHTML("beforeend", template);
}

function inputErrorTemplate(msg) {
  return `
  <div class="invalid-feedback">${msg}</div>
  `
}

export function removeInputError(el) {
  const parent = el.parentElement;
  const error = parent.querySelector(".invalid-feedback");
  if(!error) return;
  error.remove();
  el.classList.remove("is-invalid");
}