module.exports = class UserDto {
    email;
    name;
    id;
    isActived;
    role;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.email = model.email;
        this.isActived = model.isEmailVerified;
        this.role = model.role;
    }
};
