const connection = require("../database.connect/connector");
class Plugin {
  //เขียนคำสั่ง SQL
  createCpuPlugin = (
    cputable,
    res //สร้างแถวนึง โดยรับ time_cpu กับ core_cpu โดย id สร้างให้อัตโนมัติ
  ) => {
    let sql = `INSERT INTO cputable
        (
            id, 
            time_cpu,
            core_cpu
        )
        VALUES
        (
            ?, ?, ?
        )`;
    connection.query(
      sql,
      [cputable.id, cputable.time_cpu, cputable.core_cpu],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("create cputable finish");
          return res.render("/", { title: "" });
        }
      }
    );
  };

  deleteCpuPlugin = (
    cputable,
    res //ลบแถว
  ) => {
    let sql = ` DELETE FROM cputable 
                    WHERE id = ? `;
    connection.query(sql, [cputable.id], function (err) {
      if (err) {
        console.log(err);
      } else {
        return res.status(201).send({ response: "delete cputable finish" });
      }
    });
  };

  getAllCpuPlugin = (res) => {
    // console.log("I come in at plugin");
    let sql = ` SELECT id,time_cpu,core_cpu FROM cputable `;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log("error 1");
        console.log(err);
      } else {
        console.log("error 2");
        // return res.status(201).send({ data: result });
        return res.render("cpu/list", { data: result, title: "CPUListPage" });
      }
    });
  };

  // app.get("/connect", (req, res) => {
  //   const success = {
  //     title: "Success connect to database",
  //     status: "555",
  //     // etc: "โหล เทสๆ ภาษาไทย",
  //   };
  //   console.log("I'm at checkconnectiontodatabase");
  //   req.getConnection((err, db) => {
  //     if (err) {
  //       console.log("refuse to connection AT : " + error);
  //       return res.status(501).send({ response: "error" });
  //     } else {
  //       console.log("connection to DATABASE SUCCESS!");
  //     }
  //     console.log(success);
  //     return res.status(201).send({ response: success });
  //   });
  // });

  getUserCpuPlugin = (
    cputable,
    res //ดึงข้อมูลบางตัว
  ) => {
    let sql = ` SELECT id,time_cpu,core_cpu
                    FROM cputable 
                    WHERE id = ?`;
    connection.query(sql, [cputable.id], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).send({ response: result });
      }
    });
  };

  updateCpuPlugin = (
    cputable,
    res //แก้ไขข้อมูล
  ) => {
    let sql = `UPDATE cputable
        SET id = ?, time_cpu = ?, core_cpu = ?
        WHERE id = ?`;

    connection.query(
      sql,
      [cputable.id, cputable.time_cpu, cputable.core_cpu],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("update cputable finished");
          return res.status(201).send({ response: "update cputable finished" });
        }
      }
    );
  };

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
module.exports = { Plugin };
