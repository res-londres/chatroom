function ActiveUser({ username, id }) {
  return (
    <div className="flex items-baseline justify-between">
      <span>{username}</span>
      <span className="ml-2 text-[80%] text-[#65676B]">{id}</span>
    </div>
  );
}

export default ActiveUser;