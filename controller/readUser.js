import createUserModel from "../models/createUserModel.js";

const readUser = (req, res) => {

    createUserModel.find({ userId: req.body.userId })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: "user not found",
                    status: false,
                    code: 404
                })
            }
            if (user.length > 0) {

                return res.status(200).json({
                    User: user,
                    status: true,
                    code: 200
                })


            }
        })
        .catch(err => {
            return res.status(404).json({
                message: "server failed",
                status: false,
                code: 404
            })
        })


}
export default readUser;