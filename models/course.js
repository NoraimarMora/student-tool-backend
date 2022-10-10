'use strict'

class Course {
    constructor(id, code, name, uc, tax, semester, career, pre_req) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.uc = uc;
        this.tax = tax;
        this.semester = semester;
        this.career = career;
        this.pre_req = pre_req;
    }
}

module.exports = Course;