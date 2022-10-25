const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataCpu = models.dataCpuModel;
  }

  createCpuEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    this.dataCpu.time_cpu = req.body.time_cpu;
    this.dataCpu.core_cpu = req.body.core_cpu;
    new Logic().createCpuLogic(this.dataCpu, res);
  };

  deleteCpuEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    new Logic().deleteCpuLogic(this.dataCpu, res);
  };

  getCpuEndpoint = (req, res) => {
    new Logic().getCpuLogic(res);
  };

  getUserCpuEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    new Logic().getUserCpuLogic(this.dataCpu, res);
  };

  updateMemeEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    this.dataCpu.time_cpu = req.body.time_cpu;
    this.dataCpu.core_cpu = req.body.core_cpu;
    new Logic().updateMemeLogic(this.dataCpu, res);
  };

  getAllCpuEndpoint = (req, res) => {
    new Logic().getAllCpuLogic(req, res);
  };

  // ล้มเหลว
  deleteEndpoint = (req, res) => {
    console.log("click parm delete");
    new Logic().deleteLogic(req, res);
  };

  // ViralMemeEndpoint = (req, res) => {
  //    new Logic().getViralMemeLogic(res);
  // }
}
module.exports = {
  Endpoint,
};
