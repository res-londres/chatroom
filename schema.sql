create table messages (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sender_id text not null,
  sender text not null,
  content text not null,
  created_at timestamptz default now() not null
);
