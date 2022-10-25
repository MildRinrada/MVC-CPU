const { Plugin } = require("../controller/plugin");
class Logic {
  //Userสมัครข้อมูลมา มีusername password อาจมี if(รหัสผ่านจำนวนมากกว่า 8 ถ้าไม่ตรงเงื่อนไข return errorมา)

  //เพิ่มลงใน database
  createCpuLogic = (cputable, res) => {
    //validate empthy

    new Plugin().createCpuPlugin(cputable, res);
  };

  //ลบแถวใน Database
  deleteCpuLogic = (cputable, res) => {
    new Plugin().deleteCpuPlugin(cputable, res);
  };

  //รับข้อมูลทุกอันใน Database
  getCpuLogic = (res) => {
    new Plugin().getAllCpuPlugin(res);
  };

  //รับข้อมูลบางอันใน Database
  getUserCpuLogic = (cputable, res) => {
    new Plugin().getUserCpuPlugin(cputable, res);
  };

  //แก้ไขข้อมูลใน Database
  updateCpuLogic = (cputable, res) => {
    new Plugin().updateCpuPlugin(cputable, res);
  };

  //get Viral Meme
  //getViralMemeLogic = (res) => {
  //     new Plugin().getViralMemePlugin(res);
  // }

  getAllCpuLogic = (req, res) => {
    new Plugin().getAllCpuPlugin(req, res);
  };

  // ล้มเหลว
  // deleteLogic = (req, res) => {
  //   new Plugin().deletePlugin(req, res);
  // }
}
module.exports = { Logic };
