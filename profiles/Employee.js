// employee parent constructor 
class Employee {
    constructor (preferredName, idNumber, emailAddress) {
        this.preferredName = preferredName;
        this.idNumber = idNumber;
        this.emailAddress = emailAddress;
    }
// get Preferred Name
getPreferredName() {
    return this.preferredName;
}
// get ID number
getIdNumber() {
    return this.idNumber;
}   
// get Email address
getEmailAddress() {
    return this.emailAddress;
}
// get Occupation = "Employee"
getOccupation () {
    return 'Employee'; 
}
};