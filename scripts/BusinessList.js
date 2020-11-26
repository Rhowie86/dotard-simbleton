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


export const newYorkList = () => { 
        const contentElement = document.querySelector(".newYork")
        const allBusinesses = useBusiness()
        
        const nyBusinesses = allBusinesses.filter(business => business.addressStateCode === "NY")
        // console.log("testing testing", nyBusinesses)
        nyBusinesses.forEach(
            (nyObject) => {
                contentElement.innerHTML += business(nyObject)
            }
        )
}