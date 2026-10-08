"use client";

export default function Client({ user }) {
  return (
    <div>
      <h1>Client Header</h1>

      <button>Click me</button>

      {/* SERVER CONTENT YAHAN */}
      <div>
        {user}
      </div>

      <h2>Client Footer</h2>
    </div>
  );
}