const Box = require("../models/Box");
const File = require("../models/File");

class FileController {
  async store(req, res) {
    try {
      const box = await Box.findById(req.params.id);

      const file = await File.create({
        title: req.file.originalname,
        path: req.file.key
      });

      box.files.push(file);

      await box.save();

      req.io.sockets.in(box._id).emit("file", file);

      return res.json(file);
    } catch ({ message: error }) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new FileController();
