import { useBusiness } from "./BusinessProvider.js"
import { business } from "./Business.js"

export const businessList = () => {
    const contentElement = document.querySelector(".container")
    const allBusinesses = useBusiness()

    allBusinesses.forEach(
        (businessObject) => {
            contentElement.innerHTML += business(businessObject)
        }
    )
        
    }
