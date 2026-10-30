const pick = (list) => list[Math.floor(Math.random() * list.length)];

export function generateId(existingIds) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits  = "0123456789";

  let id;
  let isUnique = false;

  while (!isUnique) {
    id = "#"
      + pick(letters) + pick(letters) + pick(letters)
      + pick(digits) + pick(digits) + pick(digits);

    if (!existingIds.includes(id)) {
      isUnique = true;
    }
  }

  return id;
}

export function createUser(existingIds, defaultUsernames) {
  return {
    id: generateId(existingIds),
    username: pick(defaultUsernames),
  }
}

export function createMessage(id, user, msg) {
  const now = new Date();
  return {
    id: id,
    sender: user.username,
    senderId: user.id,
    message: msg,
    timestamp: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    date: now.toLocaleDateString([], { day: "2-digit", month: "short", year: "2-digit" }),
  };
}