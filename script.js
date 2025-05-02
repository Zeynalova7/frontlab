const cvData = {
  contact: {
    phone: "+123-456-7890",
    email: "hello@reallygreatsite.com",
    address: "123 Anywhere St... Any City",
    website: "www.reallygreatsite.com"
  },
  education: [
    { year: "2029-2030", university: "WARDIERE UNIVERSITY", degree: "Master of Business Management" },
    { year: "2025-2029", university: "WARDIERE UNIVERSITY", degree: "Bachelor of Business", gpa: "GPA: 3.8/4.0" }
  ],
  skills: [
    "Project Management", "Public Relations", "Teamwork", 
    "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
  ],
  languages: [
    "English (fluent)", "French (fluent)", "German (basics)", "Spanish (intermediate)"
  ],
  experience: [
    {
      company: "Borcelle Studio",
      role: "Marketing Manager & Specialist",
      tasks: ["Task A", "Task B", "Task C"]
    }
  ]
};

window.onload = function () {
  loadContact();
  loadEducation();
  loadSkills();
  loadLanguages();
  loadExperience();
};

function loadContact() {
  const c = cvData.contact;
  document.getElementById("contactInfo").innerHTML = `
    <p><i class="fa fa-phone Icon"></i> ${c.phone}</p>
    <p><i class="fa fa-envelope Icon"></i> ${c.email}</p>
    <p><i class="fa fa-map-marker Icon"></i> ${c.address}</p>
    <p><i class="fa-solid fa-globe Icon"></i> ${c.website}</p>
  `;
}

function loadEducation() {
  const container = document.getElementById("educationList");
  container.innerHTML = "";
  cvData.education.forEach(edu => {
    container.innerHTML += `
      <p>
        <b>${edu.year}<br/>${edu.university}</b>
        <ul>
          <li>${edu.degree}</li>
          ${edu.gpa ? `<li>${edu.gpa}</li>` : ""}
        </ul>
      </p>
    `;
  });
}

function loadSkills() {
  const container = document.getElementById("skillsList");
  container.innerHTML = "";
  cvData.skills.forEach(skill => {
    container.innerHTML += `<li>${skill}</li>`;
  });
}

function loadLanguages() {
  const container = document.getElementById("languagesList");
  container.innerHTML = "";
  cvData.languages.forEach(lang => {
    container.innerHTML += `<li>${lang}</li>`;
  });
}

function loadExperience() {
  const container = document.querySelector(".workExperience");
  let html = `<h2>WORK EXPERIENCE<hr></h2>`;
  cvData.experience.forEach(exp => {
    html += `<p><b>${exp.company}</b><br>${exp.role}</p><ul>`;
    exp.tasks.forEach(task => {
      html += `<li>${task}</li>`;
    });
    html += `</ul>`;
  });
  container.innerHTML = html;
}

function addEducation() {
  const year = prompt("İlləri daxil edin:");
  const uni = prompt("Universitetin adını daxil edin:");
  const degree = prompt("Dərəcə və ya ixtisas:");
  const gpa = prompt("Orta bal (əgər varsa):");
  if (year && uni && degree) {
    cvData.education.push({ year, university: uni, degree, gpa: gpa || undefined });
    loadEducation();
  }
}

function addSkill() {
  const newSkill = prompt("Yeni bacarıq daxil et:");
  if (newSkill) {
    cvData.skills.push(newSkill);
    loadSkills();
  }
}

function addWorkExperience() {
  const company = prompt("Şirkət:");
  const role = prompt("Vəzifə:");
  const task1 = prompt("Tapşırıq 1:");
  const task2 = prompt("Tapşırıq 2:");
  const task3 = prompt("Tapşırıq 3:");
  if (company && role) {
    cvData.experience.push({ company, role, tasks: [task1, task2, task3].filter(Boolean) });
    loadExperience();
  }
}
  