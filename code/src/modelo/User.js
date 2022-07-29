const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.userId +1;
        }
        return 1;
    },

    findAll: function () {
        let parsedData = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
       
        return parsedData;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user[field] === text);
    
        
        return userFound;
    },

    findByPk: function(key) {
        let allUsers = this.findAll();
       let userFound = allUsers.find(user => user.userId == key);
        
       
        return userFound;

    },

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            userId: this.generateId(),
        
            ... userData
        }
        console.log(newUser);
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;

    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.userId !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}
console.log(User.findByPk(35));
module.exports = User;