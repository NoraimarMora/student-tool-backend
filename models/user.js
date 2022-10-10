'use strict'

class User {
    constructor(id, name, lastname, dni, email, password, career, uc, courses) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.dni = dni;
        this.email = email;
        this.password = password;
        this.career = career;
        this.uc = uc;
        this.courses = courses;
    }
}

module.exports = User;