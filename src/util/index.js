export function getFieldFromDetails(field) {
    // Get the details string from localStorage
    const detailsString = localStorage.getItem("details");

    // Parse the details string into a JavaScript object
    const detailsObject = JSON.parse(detailsString);

    // Check if the field exists in the detailsObject
    if (detailsObject && Object.prototype.hasOwnProperty.call(detailsObject, field)) {
        // Return the value of the field
        return detailsObject[field];
    } else {
        // Return null if the field doesn't exist
        return null;
    }
}