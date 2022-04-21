import {fetchUserActivities} from "./fetchUserActivities";

export const fetchTeamActivities = async (teamMembers) => {
    let errorMsg = null
    let showDanger = false
    const fetchedActivities = new Set()

    async function getActivitiesById(id) {
        const userActivitiesRes = await fetchUserActivities(id)

        if (userActivitiesRes["danger"]) {
            errorMsg = userActivitiesRes["error"]
            showDanger = userActivitiesRes["danger"]

            return
        }

        return userActivitiesRes["data"]
    }

    await Promise.all(teamMembers.map(async (member) => {
        const activities = await getActivitiesById(member.id)
        activities.forEach(activity => {
            if (!fetchedActivities.has(activity)) fetchedActivities.add(activity)
        })
    }))

    return {"data": fetchedActivities, "error": errorMsg, "danger": showDanger}
}