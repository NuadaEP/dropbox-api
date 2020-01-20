const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    try {
      const box = await Box.create(req.body);

      return res.json(box);
    } catch ({ message: error }) {
      return res.status(500).json({ error });
    }
  }

  async show(req, res) {
    try {
      const box = await Box.findById(req.params.id).populate({
        path: "files",
        options: { sort: { createdAt: -1 } }
      });

      if (!box)
        return res.status(400).json({ error: "This box does not exist." });

      return res.json(box);
    } catch ({ message: error }) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new BoxController();
