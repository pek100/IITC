import { Role } from "./Role.js";
import { User } from "./User.js";




async function initRole() {

    let count = await Role.estimatedDocumentCount();
    
    try{
    await new Role({userType: "user"}).save();
    console.log("added 'user' to roles collection");
    
    await new Role({userType: "moderator"}).save();
    console.log("added 'Moderator' to roles collection");
    
    const admin = await new Role({userType: "admin"});
    admin.save();
    console.log("added 'admin' to roles collection");

    }catch(err) {
        console.log(err);
    }
    
}

async function initUser() {
    try{
    let YaelArad = await User.findOne({email:'yarad@gmail.com'});
    console.log(`YaelArad=\n`,YaelArad)
    if (YaelArad) {
    console.log('The user Yael Arad already exist');
    return;
    }

    const admin = await Role.findOne({userType:"admin"})
    if(!admin){return};
    await new User({name: "Yael Arad", email:'yarad@gmail.com',password:'123', role:admin._id}).save();
        console.log("added 'Yael Arad' users collection");
    }catch(err){
    console.log(err);
    }
    }

    export async function init() {
        await initRole();
        await initUser();
    }

    init()