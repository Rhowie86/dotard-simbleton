export const agent = (agentObj) => {
    return `
    <article class = "agent-list">
        <h2 class = "agent-list__name">${agentObj.fullName}</h2>
        <p class = "agent-list__company">${agentObj.company}<br>
            ${agentObj.phoneNumber}</p>
    </article> `
}