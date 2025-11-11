import sql from "mssql";

const config = {
  user: "itonesa",
  password: "1qaz2wsx",
  //Node.js 的 mssql 模組底層（tedious driver）
  // 預設不會透過 SQL Browser 自動解析命名實例的 port。
  //   server: "DESKTOP-ELCN788\\SQLEXPRESS",
  
  server: "127.0.0.1",    
  port: 1433, 
  database: "iToneSocial",
  options: {
    trustServerCertificate: true,
  },
};

// 🧠 共用查詢函式
async function withDB<T>(action: (pool: sql.ConnectionPool) => Promise<T>) {
  const pool = await sql.connect(config);
  try {
    return await action(pool);
  } finally {
    await pool.close();
  }
}

// 1️⃣ 取得所有 Member
export async function GET() {
  try {
    const data = await withDB(async (pool) => {
      const result = await pool.request().query("SELECT * FROM Member");
      return result.recordset;
    });
    return Response.json(data);
  } catch (err: any) {
    console.error("❌ GET 錯誤:", err);
    return new Response(err.message, { status: 500 });
  }
}

// 2️⃣ POST: 新增 Member，包含 PasswordHash
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Name, Email, PasswordHash } = body;    

    if (!Name || !Email || !PasswordHash)
      return new Response("缺少 Name / Email / PasswordHash", { status: 400 });

    await withDB(async (pool) => {
      const query = `
                    INSERT INTO Member (NickName, Email, PasswordHash)
                    VALUES (@NickName, @Email, @PasswordHash)
                    `;
    await pool
    .request()
    .input("NickName", sql.NVarChar(100), Name) // 👈 改成 NickName
    .input("Email", sql.NVarChar(255), Email)
    .input("PasswordHash", sql.NVarChar(sql.MAX), PasswordHash)
    .query(query);
    });

    return new Response("✅ 已新增", { status: 201 });
  } catch (err: any) {
    console.error("❌ POST 錯誤:", err);
    return new Response(err.message, { status: 500 });
  }
}

// 3️⃣ 刪除 Member
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) return new Response("缺少 id", { status: 400 });

    await withDB(async (pool) => {
      await pool
        .request()
        .input("id", sql.Int, Number(id))
        .query("DELETE FROM Member WHERE MemId = @id");
    });

    return new Response("✅ 已刪除", { status: 200 });
  } catch (err: any) {
    console.error("❌ DELETE 錯誤:", err);
    return new Response(err.message, { status: 500 });
  }
}
