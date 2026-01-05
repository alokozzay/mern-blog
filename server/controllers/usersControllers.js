class UsersControllers {
    // post api/users/register - register users
    async registerUser(req, res, next) {
        console.log(res.headersSent);
        res.json("register user!");
    }

    // post api/users/login - login user
    async loginUser(req, res, next) {
        res.json("login user!");
    }
    // post api/users/change-avatar - change avatar
    async changeAvatar(req, res, next) {
        res.json("register user!");
    }
    // get api/users/:id - user profile
    async getUser(req, res, next) {
        res.json("User profile!");
    }

    // patch api/users/edit-user -  edit user profile
    async editUser(req, res, next) {
        res.json("Edit profile!");
    }

    // get api/users/authors -  get all users
    async getAuthors(req, res, next) {
        res.json("all authors!");
    }
}

module.exports = new UsersControllers();
