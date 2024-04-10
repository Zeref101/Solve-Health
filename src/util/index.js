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
export function getToday() {
    const date = new Date();
    const day = date.getDay();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        date: date.toLocaleDateString(), // returns date in the format MM/DD/YYYY
        weekday: weekdays[day] // returns the day of the week
    };
}

// Usage:
const today = getToday();
console.log(today.date); // prints today's date
console.log(today.weekday); // prints the day of the week