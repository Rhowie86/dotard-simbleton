import { useBusiness } from "./BusinessProvider.js"
import { agent } from "./agent.js"


export const agentList = () => {
    const contentElement = document.querySelector(".agents")
    const businessData = useBusiness();
    businessData.map(agentObject => {
    const agents = 
    {
        fullName : `${agentObject.purchasingAgent.nameFirst}, ${agentObject.purchasingAgent.nameLast}`,
        company : `${agentObject.companyName}`,
        phoneNumber : `${agentObject.phoneWork}` 
    }


    
    contentElement.innerHTML += agent(agents)
    
})
        }
    
      
    