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


// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector("#foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) { 
            
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const allBusinesses = useBusiness()
            const foundBusiness = allBusinesses.find(agent => agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) 
            || agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value) 
            || agent.companyName.includes(keyPressEvent.target.value))
           
           
            // implement .find() method here
                companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst}, ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <h3>
                ${foundBusiness.companyName}
                </h3>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
