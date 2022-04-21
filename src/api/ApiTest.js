import {register, login} from './service/authService'
import {getAllUsers, getUserById, getUserByUsername, updateUser, updateUserRole, deleteUser} from "./service/userService"
import {getAllActivities, getAllActivitiesByUser, createActivity,
    addChildActivity, addActivityToUser, updateActivityStatus, deleteActivity} from "./service/activityService"
import {getAllTeams, getTeamById, addTeam, addUserToTeam, updateTeam, deleteTeam} from "./service/teamService"

function ApiTest() {
    const adminRegister = {
        "name": "AdminName",
        "lastname": "AdminLastname",
        "username": "admin",
        "email": "admin@admin.mint.ru",
        "password": "0000",
        "enabled": "true"
    }

    const userRegister = {
        "name": "UserName",
        "lastname": "UserLastname",
        "username": "user",
        "email": "user@mint.ru",
        "password": "0000",
        "enabled": "true"
    }

    const loginUser = {
        "username": "admin",
        "password": "0000"
    }

    const updatedUser = {
        "id": 1,
        "name": "AdminNameName",
        "lastname": "AdminLastname",
        "username": "admin",
        "email": "admin@admin.mint.ru",
        "password": "0000",
        "enabled": "true"
    }

    const changeRoleForm = {
        "requestType": "ADD",
        "roleName": "LEAD"
    }

    const parentActivity = {
        "name": "activity",
        "description": "activity description"
    }

    const childActivity = {
        "name": "child",
        "description": "child desc"
    }

    const updateActivityStatusForm = {
        "activityId": 1,
        "status": "APPROVED"
    }

    const team = {
        "name": "team",
        "description": "team description"
    }

    const userToTeamForm = {
        "userId": 1,
        "teamId": 1
    }

    const updatedTeam = {
        "id": 1,
        "name": "upd team",
        "description": "upd team description"
    }

    return (
        <div>
            <div>
                <h1>Auth</h1>
                <button onClick={() => register(adminRegister)}>Register admin</button>
                <button onClick={() => register(userRegister)}>Register user</button>
                <button onClick={() => login(loginUser, true)}>Login</button>
            </div>
            <div>
                <h1>User</h1>
                <button onClick={() => getAllUsers()}>Get all users</button>
                <button onClick={() => getUserById(1)}>Get user by id</button>
                <button onClick={() => getUserByUsername("admin")}>Get user by username</button>
                <button onClick={() => updateUser(updatedUser)}>Update user</button>
                <button onClick={() => updateUserRole(changeRoleForm, 1)}>Update user role</button>
                <button onClick={() => deleteUser(2)}>Delete user</button>
            </div>
            <div>
                <h1>Activity</h1>
                <button onClick={() => getAllActivities()}>Get all activities</button>
                <button onClick={() => getAllActivitiesByUser(1)}>Get all activities by user</button>
                <button onClick={() => createActivity(parentActivity)}>Create activity</button>
                <button onClick={() => addChildActivity(childActivity, 1)}>Add child activity</button>
                <button onClick={() => addActivityToUser(1, 1)}>Add activity to user</button>
                <button onClick={() => updateActivityStatus(updateActivityStatusForm)}>Update activity status</button>
                <button onClick={() => deleteActivity(2)}>Delete activity</button>
            </div>
            <div>
                <h1>Team</h1>
                <button onClick={() => getAllTeams()}>Get all teams</button>
                <button onClick={() => getTeamById(1)}>Get team by id</button>
                <button onClick={() => addTeam(team)}>Add team</button>
                <button onClick={() => addUserToTeam(userToTeamForm)}>Add user to team</button>
                <button onClick={() => updateTeam(updatedTeam)}>Update team</button>
                <button onClick={() => deleteTeam(1)}>Delete team</button>
            </div>
        </div>
    )
}

export default ApiTest