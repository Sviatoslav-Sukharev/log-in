const regExpDic = {
  email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
  password: /^[0-9a-zA-Z]{4,}$/,
}

export function validate(input) {
  const regExpName = input.dataset.required;
  if(!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(input.value);
}