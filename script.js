// Sample data (replace with your own)
const projects = [
  { title: "This is in .js file", description: "It's an array, you see."},
  { title: "It is using *section*.", description: "and *id*."}
]

const skills = ["Just", "add", "text", "in quotes", "and", "bullet list", "will be formed"]



// Populate projects
const projectsList = document.getElementById("projectsList")
projects.forEach((project) => {
  const projectCard = document.createElement("div")
  projectCard.className = "col-md-6 mb-4"
  projectCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        </div>
    `
  projectsList.appendChild(projectCard)
})

// Populate skills
const skillsList = document.getElementById("skillsList")
skills.forEach((skill) => {
  const skillItem = document.createElement("li")
  skillItem.textContent = skill
  skillsList.appendChild(skillItem)
})

// Populate work experience
const workExperienceSection = document.getElementById("workExperience")
workExperience.forEach((job) => {
  const jobElement = document.createElement("div")
  jobElement.className = "mb-4"
  jobElement.innerHTML = `
        <h4>${job.title}</h4>
        <h5>${job.company}</h5>
        <p>${job.duration}</p>
        <ul>
            ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
        </ul>
    `
  workExperienceSection.appendChild(jobElement)
})

