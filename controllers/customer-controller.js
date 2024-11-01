const { poolPromise } = require("../service/connection.js");

exports.getAllCustomerMetaData = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(
            `SELECT TOP (1000) [id]
            ,[kod]
            ,[ad]
            ,[tip]
            ,[vd]
            ,[vdno]
            ,[ADR_ULKE]
            ,[ADR_il]
            ,[ADR_ilce]
            ,[ADR_tam]
            ,[ADR_pcode]
            ,[ADR_IRS]
            ,[ADR_SEVK]
            ,[web_adr]
            ,[Tel1]
            ,[Tel2]
            ,[Tel3]
            ,[Fax1]
            ,[Fax2]
            ,[uyer]
            ,[Trsure]
            ,[Pkatsayi]
            ,[creuser]
            ,[cre_date]
            ,[upuser]
            ,[up_date]
            ,[MusteriKodu]
            ,[TscFirmaAdi]
            ,[FaturaTipi]
            ,[MuhasebeCarikod]
            FROM [MRPNODERED].[dbo].[TBL_FIR_TAN]`
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
