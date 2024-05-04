var personalInfo = {
  name: "Lungile",
  surname: "Simelane",
  bio: "I am a dynamic professional with a Bachelor of Arts in Industrial Sociology, embarking on an exciting journey to transition into the tech industry. With a strong foundation in understanding human behavior within organizational structures, I bring a unique perspective to the rapidly evolving tech landscape. Outside of my professional pursuits, I enjoy travelling, reading, and exploring emerging technologies. I am committed to continuous growth and development, eagerly embracing new challenges and experiences to expand my knowledge and expertise in the ever-evolving tech landscape.",
  summary:
    "Enthusiastic and self-motivated individual with a strong foundation in coding acquired through SheCodes foundation and various coding bootcamps. Skilled in HTML, CSS and JavaScript. Eager to leverage my coding skills and passion for technology to contribute effectively as a Software Developer in the tech industry. Proven ability to quickly learn new technologies and work collaboratively in fast-paced environments.",
  education: {
    degree: "Bachelor of Arts in Industrial Sociology",
    institution: "University of Zululand",
    graduationYear: 2011,
  },
  contact: {
    phone: "+27 69 990 6943" + "+27 76 824 2190",
    email: "lungile.simelane4@gmail.com",
  },
  address: "2695 EFM Mainane Street, Mahube Valley, Pretoria",
};

console.log("Name: " + personalInfo.name);
console.log("Surname: " + personalInfo.surname);
console.log("Bio: " + personalInfo.bio);
console.log("Summary:" + personalInfo.summary);
console.log("Education: " + personalInfo.education);
console.log("Contact: " + personalInfo.contact);
console.log(
  "Education:" +
    personalInfo.education.degree +
    "-" +
    personalInfo.education.institution +
    "(" +
    personalInfo.education.graduationYear +
    ")"
);

console.log(
  "Contact: Phone:" +
    personalInfo.contact.phone +
    ";" +
    "Email:" +
    personalInfo.contact.email
);

console.log("Address:" + address);

var projects = [
  {
    title: "Landing page",
    description:
      "It is a landing page about Coffee. It includes the link for more infrormation regarding the benefits of startig your day with coffee. It also have a button for user interaction.",
    languages: "HTML, CSS and JavaScript",
    link: "https://www.shecodes.io/cohorts/1719/projects/2144404?_gl=1*1pz3bq6*_gcl_au*NjU4NjcxMzguMTcxMzQ4NDY4NS4xMjk0OTc5MDEzLjE3MTM1MjAzNzQuMTcxMzUyMDM3NA..",
  },
  {
    title: "My weather App",
    description:
      "In this project, when a user searches for a city, it display the name of the city on the result page and the current temperature ot that city.",
    languages: "HTML, CSS and JavaScript",
    link: "https://yj2zwm.csb.app/",
  },
];

console.log("Projects:");
projects.forEach(function (project) {
  console.log("Project:" + project.title);
  console.log("Description:" + project.description);
  console.log("Languages:" + project.languages);
  console.log("Link:" + project.link);
});
