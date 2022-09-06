const initSQL = async function(){
    const SQL = await initSqlJs({
        locateFile: file => `/assets/js/sql-wasm.wasm`
    });
    DB = new SQL.Database();
    DB.run(`CREATE TABLE "currentUser"(
        "username" TEXT,
        "userid"    INTEGER,
        "password"    TEXT
        );
    `);
};
initSQL();