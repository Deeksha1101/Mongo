const express = require("express");
const router = express.Router();

const authorModel = require("../models/authorModels");

router.post("/", async (req, res) => {
  console.log(req);

  const { authorData } = req.body;

  try {
    const author = await authorModel.create(authorData);
    res.json({
      data: author,
      message: "Successfull",
    });
  } catch (error) {
    res.json({
      data: [],
      message: error,
    });
  }
});
// router.get("/", async (req, res) => {
//   const { author_id } = req.params;
//   try {
//     const authors = await authorModel.find(
//       {
//         id: author_id,
//       },
//       "-_id"
//     );
//     res.json({
//       data: author,
//       message: "Successfull",
//     });
//   } catch (error) {
//     res.json({
//       data: [],
//       message: error,
//     });
//   }
// });

module.exports = router;
