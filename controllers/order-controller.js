const { poolPromise } = require("../service/connection.js");

exports.getAllOrderList = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(
            `SELECT TOP (1000) [id] AS [ID]
                ,[Aciklama] AS [Description]
                ,[Firmkod] AS [CompanyCode]
                ,[ad] AS [Name]
                ,[SipNo] AS [OrderNo]
                ,[SipTarih] AS [OrderDate]
                ,[Kod] AS [FactoryCode]
            FROM [MRPNODERED].[dbo].[vW_Sip_list]
            WHERE [Tipi] = 1
            ORDER BY OrderDate DESC;`
        );
        if (result.recordset.length === 0) {
          return res.status(404).json({ error: "Customer not found." });
        }
        return res.json(result.recordset);
      } catch (error) {
        console.error('Customer could not be retrieved:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};