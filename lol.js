//Verify token

// function verifyJWT (req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send({ message: "Unauthorized Access" });
//   }
//   const token = authHeader.split(" ")[1];
//   // console.log(token);
//   jwt.verify(token, process.env.ACCESS_KEY, (err, decoded) => {
//     if (err) {
//       res.status(403).send({ message: "Forbidded access" });
//     }
//     // console.log("decoded", decoded);
//     req.decoded = decoded;
//     next();
//   });
// }


   //auth JWT
//    app.post("/login", async (req, res) => {
//      const user = req.body;
//      const accessToken = jwt.sign(user, process.env.ACCESS_KEY, {
//        expiresIn: "1d",
//      });
//      res.send({accessToken});
//    });