function outputSkill(skillTitle, skillDescription){
    document.write("<div class ='skillsInfo'><h2>" + skillTitle + "</h2><p>" + skillDescription + "</p></div>");
}

function outputEmploymentExperience(jobTitle, startEndDate, employer, description){
    document.write("<div class ='jobNameAndDate'><h2>" + jobTitle + "</h2><h3>" + startEndDate + "</h3></div>");
    document.write("<div><h3>" + employer + "</h3>");
    outputJobDescription(description);
    document.write("</div>");
}

function outputJobDescription(description){
    document.write("<div class ='description'><ul>");
    for (let i = 0; i < description.length; i++){
        document.write("<li>" + description[i] + "</li>");
    }
    document.write("</ul></div>");
}


function outputEducation(eduName, eduDate, school){
    document.write("<div class ='eduInfo'><h2>" + eduName + "</h2><h3>" + school + "</h3><h3>" + eduDate + "</h3></div>");
}