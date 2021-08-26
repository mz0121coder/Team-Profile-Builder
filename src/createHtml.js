// create manager information
const createManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="info-header">
                <h3>${manager.preferredName}</h3>
                <h4>Manager</h4><i class="material-icons">pending_actions</i>
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
                <h4>Engineer</h4><i class="material-icons">engineering</i>
            </div>

            <div class="info-card">
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
                <h4>Intern</h4><i class="material-icons">person_add</i>
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

   // join created profiles (strings)
   const employeeProfiles = pageList.join('')
   // return created profiles
   const createTeam = createTeamPage(employeeProfiles); 
   return createTeam;
}

// generate html page 
const createTeamPage = function(employeeProfiles) {   
    return`
    <!-- responsive base layout -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <!-- add google font, link bootstrap -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <!-- link material icons & stylesheet -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>  
            <!-- navbar and container -->
            <nav class="navbar" idnumber="navbar">
                <span class="navbar-text mb-0 h1 w-100 text-center" idnumber="navbar-text">My Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" idnumber="profile-card">
                    <!--Employee Profiles-->
                    ${employeeProfiles}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }

// export createHTML
module.exports = createHTML; 
