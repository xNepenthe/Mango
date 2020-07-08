class UsersController {

    static getUser(req, res) {
        console.log("req: ", req.url);
        res.json({
            name: "dummy name",
            age: "42"
        })
    }
    
    static getUserById(req, res) {
        console.log("req: ", req.params);
        res.json({
            id: req.params.id,
            last_name: req.query.last_name
        })
    }

    static postUser(req, res) {
        console.log("req: ", req.body);

        const id = req.body.id;
        const category = req.body.category;

        req.res("Usuario creado exitosamente.");
    }
}

module.exports = UsersController;