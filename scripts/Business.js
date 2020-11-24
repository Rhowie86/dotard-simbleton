export const business = (businessObject) => {
    return `
    <article class = "business-list">
        <h2 class = "business-name">${businessObject.companyName}</h2>
        <p class = "business-address">${businessObject.addressFullStreet}<br>
            ${businessObject.addressCity}", "${businessObject.addressStateCode}" "${businessObject.addressZipCode}</p>
    </article> 
    
    <article class="businessList--newYork">
    <h2 class = "business-name">${businessObject.companyName}</h2>
    <p class = "business-address">${businessObject.addressFullStreet}<br>
        ${businessObject.addressCity}", "${businessObject.addressStateCode}" "${businessObject.addressZipCode}</p>
     </article>
    `
}