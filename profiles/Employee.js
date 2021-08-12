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