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

// create intern information
const createIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="info-header">
                <h3>${intern.preferredName}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="info-card">
                <p class="idnumber">ID: ${intern.idNumber}</p>
                <p class="emailaddress">Email:<a href="mailto:${intern.emailAddress}">${intern.emailAddress}</a></p>
                <p class="schoolname">School: ${intern.schoolName}</p>
            </div>
    </div>
</div>
    `
};

// push profiles to html page
createHTML = (data) => {
 
    pageList = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getOccupation(); 

        // create manager profile & push to page
        if (role === 'Manager') {
            const managerProfile = createManager(employee);
            pageList.push(managerProfile);
        }

       // create engineer profile & push to page
       if (role === 'Engineer') {
        const engineerProfile = createEngineer(employee);
        pageList.push(engineerProfile);
    }

        // create intern profile & push to page
        if (role === 'Intern') {
            const internProfile = createIntern(employee);
            pageList.push(internProfile);
        }       
    }
    
