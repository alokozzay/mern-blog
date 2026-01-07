module.exports = class UserDto {
    email;
    name;
    id;
    isActived;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.email = model.email;
        this.isActived = model.isEmailVerified;
    }
};
