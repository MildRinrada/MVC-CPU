const connection = require('../database.connect/connector')
class Plugin //เขียนคำสั่ง SQL
{ 
    createCpuPlugin = (cputable, res) => //สร้างแถวนึง โดยรับ time_cpu กับ core_cpu โดย id สร้างให้อัตโนมัติ
    { 
        let sql = `INSERT INTO cputable
        (
            id, 
            time_cpu,
            core_cpu
        )
        VALUES
        (
            ?, ?, ?
        )`
        connection.query
        (
            sql, 
            [
                cputable.id,
                cputable.time_cpu,
                cputable.core_cpu
            ],
            function(err) 
            {
                if (err) 
                {
                    console.log(err); 
                } 
                else 
                {
                    console.log("create cputable finish");
                    return res.status(201).send({ response: "create cputable finish" }) 
                }
            }
        )
    }

    deleteCpuPlugin = (cputable, res) => //ลบแถว
    {
        let sql = ` DELETE FROM cputable 
                    WHERE id = ? `
        connection.query(sql, [cputable.id],
            function(err) {
                if (err) 
                {
                    console.log(err);
                } 
                else 
                {
                    return res.status(201).send({ response: "delete cputable finish" }) 
                }
            })
    }

    getAllCpuPlugin = (res) => //ดึงข้อมูลทั้งหมด
    {
        let sql = ` SELECT id,time_cpu,core_cpu
                    FROM cputable 
                    `
        connection.query(sql, function(err, result) {
            if (err) 
            {
                console.log(err);
            } 
            else 
            {
                return res.status(200).send({ response: result });
            }
        })
    }

    getUserCpuPlugin = (cputable, res) => //ดึงข้อมูลบางตัว
    {
        let sql = ` SELECT id,time_cpu,core_cpu
                    FROM cputable 
                    WHERE id = ? `
        connection.query(sql, [cputable.id],
            function(err, result) 
            {
                if (err) 
                {
                    console.log(err);
                } 
                else 
                {
                    return res.status(200).send({ response: result });
                }
            })
    }


    updateCpuPlugin = (cputable, res) => //แก้ไขข้อมูล
    {
        let sql = `UPDATE cputable
        SET id = ?, time_cpu = ?, core_cpu = ?
        WHERE id = ?`

        connection.query(
            sql, 
            [
                cputable.id,
                cputable.time_cpu,
                cputable.core_cpu
            ],
            function(err) 
            {
                if (err) 
                {
                    console.log(err);
                } 
                else 
                {
                    console.log("update cputable finished");
                    return res.status(201).send({ response: "update cputable finished" });
                }
            }
        )
    }

  /*  getViralCpuPlugin = (res) => { //คำนวณยอด Engagement กำหนดเงื่อนไขไวรัล
        let sql = ` SELECT likes,shares,comments,reaches, ((likes+shares+comments)/reaches) as viralvalues,
                    case
                    when (likes+shares+comments)/reaches >= 0.1 then "viral"
                    when (likes+shares+comments)/reaches < 0.1 then "non-viral"
                    else "-"
                    end as Result
                    from usermeme;
                    `
        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).send({ response: result });
            }
        })
    }*/


}
module.exports = { Plugin }