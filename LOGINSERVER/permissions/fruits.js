const { ROLE, projects } = require("../data/rolesdata"); 

function viewproject(user, project){
    return {
        // user.role === ROLE.ADMIN || project.userid === user.id;     
    }
}


// scope of which project the uer can view , if ADMIN THEN ALL , ELSE ONLY HIS
function canviewproject(user, project){
    return (
        user.role === ROLE.ADMIN || 
        project.userid === user.id 
    )
}

// scope of which projects he has access , if ADMIN send all projects , else send particular his user id project
function scopedProject(user, project){
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userid === user.id)
}



module.exports = {
    viewproject
}


// WE MAKE PROJECT FUNCTION WHO CAN VIEW THE PROJECT , SETTING ROLES AND PERMISSIONS..