// create manager information
const createManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="info-header">
                <h3>${manager.preferredName}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="info-card">
                <p class="idnumber">ID: ${manager.idNumber}</p>
                <p class="emailaddress">Email: <a href="mailto:${manager.emailAddress}">${manager.emailAddress}</a></p>
                <p class="officenumber">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

// create engineer information
const createEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="info-header">
                <h3>${engineer.preferredName}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="info">
                <p class="idnumber">ID: ${engineer.idNumber}</p>
                <p class="emailaddress">Email: <a href="mailto:${engineer.emailAddress}">${engineer.emailAddress}</a></p>
                <p class="githubname">Github: <a href="https://github.com/${engineer.gitHubName}">${engineer.gitHubName}</a></p>
            </div>

        </div>
    </div>
    `
}
