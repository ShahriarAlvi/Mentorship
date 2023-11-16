// user_detail.js
/*import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getSkills = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const userid = userInfo.id;

        console.log("wowww"+ userid);
    
        const q = `SELECT ss.*, u.id AS userId, name FROM skill_set AS ss JOIN users AS u ON (u.id = ss.id) WHERE u.id = ?`;

        db.query(q, [userid], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });

    });
}
*/
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getSkills = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userid = userInfo.id;

    const q = `SELECT ss.*, u.id AS userId, name FROM skill_set AS ss JOIN users AS u WHERE u.id = ?`;

    db.query(q, [userid], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched skills data:", data);
      // Ensure you send the result with the correct property name
      return res.status(200).json({ skilldata: data });
    });
  });
};