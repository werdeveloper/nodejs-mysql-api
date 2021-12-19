var DB = require('../services/db.service')

let getUsers = (req, res, next)=>{
    console.log("call get users api");    

    DB.executeQuery("select id, name, email, phone from users", [], (error,rows)=>{
        if(error){
            return res.status(400).send(
                {
                    status:0,            
                    response: error.message || 'some issue for get the data',
                    data: [] 
                }
            );
            res.end();
        }
        //res.render('pages/users/allusers', {result: rows});
        res.status(200).send(
            {
                status:1,            
                response:"call get user api",
                data:rows
            }
        );
        res.end();
    })

}

let getSingleUser = (req, res, next)=>{
    console.log("call get single user api");    

    DB.executeQuery("select id, name, email, password, phone from users where id = ?", [req.params.id], (error,rows)=>{
        if(error){
            return res.status(400).send(
                {
                    status:0,            
                    response: error.message || 'some issue for get single user data',
                    data: [] 
                }
            );
        }
        res.status(200).send(
            {
                status:1,            
                response:"call get single user api",
                data: rows  //rows[0]
            }
        );
    })

}


let deleteUser = (req, res, next)=>{
    console.log(req,"call delete user api");
    let response_msg = '';
    DB.executeQuery("delete from users where id = ?", [req.params.id], (error,rows)=>{
        if(error){
            return res.status(400).send(
                {
                    status:0,            
                    response: error.message || 'some issue for delete the data',
                    data:[] 
                }
            );
        }        

        if(rows.affectedRows > 0){
            response_msg = 'User deleted successfully';
        } else {
            response_msg = 'User not deleted successfully';
        }
        res.status(200).send(
            {
                status:1,            
                response: response_msg,
                data: [{'id' : req.params.id}]
            }
        );
    })
}


let createUser = (req, res, next)=>{
    console.log("call create user api");    
    DB.executeQuery("insert into users(name, email, password, phone) values(?,?,?,?)",
        [req.body.name, req.body.email, req.body.password, req.body.phone, req.params.id], (error,rows)=>{
        if(error){
            return res.status(400).send(
                {
                    status:0,            
                    response: error.message || 'some issue for insert the data',
                    data: rows
                }
            );
        }        

        if(rows.affectedRows > 0){
            response_msg = 'User inserted successfully';
        } else {
            response_msg = 'User not inserted successfully';
        }
        res.status(200).send(
            {
                status:1,            
                response: response_msg,
                data: [{'name' : req.body.name, 'email' : req.body.email, 'phone' : req.body.phone}]
            }
        );
    })    
}


let updateUser = (req, res, next)=>{
    console.log("call update user api");
    let response_msg = '';
    //console.log(req.body); console.log(req.params); return false;
    DB.executeQuery("update users SET name = ? , email = ? , password = ? , phone = ? where id = ?",
        [req.body.name, req.body.email, req.body.password, req.body.phone, req.params.id], (error,rows)=>{
        if(error){
            return res.status(400).send(
                {
                    status:0,            
                    response: error.message || 'some issue for update the data',
                    data: rows
                }
            );
        }        

        if(rows.affectedRows > 0){
            response_msg = 'User updated successfully';
        } else {
            response_msg = 'User not updated successfully';
        }
        res.status(200).send(
            {
                status:1,            
                response: response_msg,
                data: [{'id' : req.params.id, 'name' : req.body.name, 'email' : req.body.email, 'phone' : req.body.phone, 'password' : req.body.password}]
            }
        );
    })
}

module.exports = {
    getUsers:getUsers,
    getSingleUser:getSingleUser,
    deleteUser:deleteUser, 
    createUser:createUser,
    updateUser:updateUser
}