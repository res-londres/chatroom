export function generateId(idList) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits  = "0123456789";

  const pick = (list) => list[Math.floor(Math.random() * list.length)];

  let id;
  let isUnique = false;

  while (!isUnique) {
    id = "#"
      + pick(letters) + pick(letters) + pick(letters)
      + pick(digits) + pick(digits) + pick(digits);

    if (!idList.includes(id)) {
      isUnique = true;
    }
  }

  return id;
}