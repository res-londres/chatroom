function ActiveUser({ id, username, isEditing, changeUsername, onDoneEditing }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const newUsername = event.target.value.trim();
      changeUsername(newUsername);
      onDoneEditing();
    }
  };

  return (
    <div className="flex items-baseline justify-between" id={id}>
      {isEditing ? (
        <input className="field-sizing-content outline rounded-lg px-1" autoFocus defaultValue={username} maxLength={10} onKeyDown={handleKeyDown}></input>
      ) : ( 
        <span>{username}</span>
      )
      }
      <span className="ml-2 text-[80%] text-[#65676B]">{id}</span>
    </div>
  );
}

export default ActiveUser;
