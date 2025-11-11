"use client";
import { useEffect, useState } from "react";

interface Member {
  MemId: number;
  Name: string;
  Email: string;
  PasswordHash?: string;
}

export default function MemberPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [form, setForm] = useState({ 
    Name: "", 
    Email: "", 
    PasswordHash: "$2a$11$hBgB0ITMHKDGGqsBT2vtdeiybYMbJzmTf3aNb5RvvWiKIlDT7dXUa" 
});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const res = await fetch("/api/member");
    const data = await res.json();
    setMembers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.Name || !form.Email || !form.PasswordHash)
      return alert("請輸入 Name、Email、PasswordHash");

    const res = await fetch("/api/member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ Name: "", Email: "", PasswordHash: "" });
      await loadData();
    } else {
      alert("新增失敗");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("確定要刪除此會員嗎？")) return;
    await fetch(`/api/member?id=${id}`, { method: "DELETE" });
    await loadData();
  };

  if (loading) return <p>載入中...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">👥 Member 管理</h1>

      <form onSubmit={handleAdd} className="grid grid-cols-3 gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={form.Name}
          onChange={(e) => setForm({ ...form, Name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.Email}
          onChange={(e) => setForm({ ...form, Email: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="PasswordHash (貼上已編碼值)"
          value={form.PasswordHash}
          onChange={(e) => setForm({ ...form, PasswordHash: e.target.value })}
          className="border p-2 rounded col-span-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-3"
        >
          新增會員
        </button>
      </form>

      <table className="border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">PasswordHash</th>
            <th className="border border-gray-400 p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.MemId}>
              <td className="border p-2">{m.MemId}</td>
              <td className="border p-2">{m.Name}</td>
              <td className="border p-2">{m.Email}</td>
              <td className="border p-2 text-xs break-all">
                {m.PasswordHash || ""}
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleDelete(m.MemId)}
                  className="text-red-600 hover:underline"
                >
                  刪除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
