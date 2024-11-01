const sql = require("mssql");

const config = {
  user: "NODETEST", //Kullanıcı adı
  password: "Node**2023*", //Şifre
  server: "10.0.0.3", //Sunucu adı veya IP adresi
  database: "MRPNODERED", //Database
  options: {
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("MSSQL veritabanına başarıyla bağlanıldı.");
    return pool;
  })
  .catch((err) => {
    console.error("MSSQL veritabanına bağlanırken bir hata oluştu:", err);
    process.exit(1);
  });

module.exports = {
  sql,
  poolPromise,
};