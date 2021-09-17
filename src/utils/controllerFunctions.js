function removePassword(obj) {
  const nopwObj = obj;
  if ('password' in nopwObj) {
    delete nopwObj.password;
  }
  return nopwObj;
}

function createItem(req, res, model) {
  const data = req.body;
  model
    .create(data)
    .then((obj) => res.status(201).json(removePassword(obj.dataValues)))
    .catch((error) => {
      const [err] = error.errors;
      res.status(500).send(err);
    });
}

function readItems(req, res, model) {
  model.findAll({}).then((items) => {
    res.status(200).json(items);
  });
}

function readItem(req, res, model) {
  model
    .findByPk(req.params.id, { })
    .then((obj) => {
      if (!obj) {
        res
        .status(404)
        .json({ error: `The ${model.name.toLowerCase()} could not be found.` })
      } else {
        res.status(200).json(obj.dataValues);
      }
    })
    .catch((error) =>
      res
        .status(500)
        .json(error)
    );
}

function updateItem(req, res, model) {
  model
    .update(req.body, { where: { id: req.params.id } })
    .then((updatedRows) => {
      if (updatedRows == 0) {
        throw Error;
      } else {
        res.status(200).json(`Number of updated rows: ${updatedRows}`);
      }
    })
    .catch(() =>
      res
        .status(404)
        .json({ error: `The ${model.name.toLowerCase()} could not be found.` })
    );
}

function deleteItem(req, res, model) {
  model
    .destroy({ where: { id: req.params.id } })
    .then((deletedRows) => {
      if (!deletedRows) {
        throw Error;
      } else {
        res.status(204).json(`Number of deleted rows: ${deletedRows}`);
      }
    })
    .catch(() =>
      res
        .status(404)
        .json({ error: `The ${model.name.toLowerCase()} could not be found.` })
    );
}

module.exports = { createItem, readItems, readItem, updateItem, deleteItem };
