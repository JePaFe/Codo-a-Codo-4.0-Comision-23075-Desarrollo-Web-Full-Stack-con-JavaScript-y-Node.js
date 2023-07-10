const service = require("../services/profileService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.json(rows);
};

const show = async (req, res) => {
  const row = await service.findOne(req.params);
  res.json(row);
};

const store = async (req, res) => {
  const result = await service.store(req.body);
  res.send(result);
};

const update = async (req, res) => {
  const result = await service.update(req.body, req.params);
  res.send(result);
};

const destroy = async (req, res) => {
  const row = await service.destroy(req.params);
  res.json(row);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
