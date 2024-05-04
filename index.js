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

console.log("Address:" + personalInfo.address);

var projects = [
  {
    title: "Landing page",
    description:
      "This is a Landing page that includes a user interaction, created using HTML, CSS and JavaScript.",
    link: "https://github.com/LungiMarcia/Landing_page",
  },
  {
    title: "Weather App",
    description:
      "This a weather app thats allows the user to search current weather condition of their country of choice. It was created using HTML, CSS, JavaScript and API integration. ",
    link: "https://github.com/LungiMarcia/Weather-App",
  },
  {
    title: "Calculator",
    description:
      "This calculator was developed with basic mathematical functionalities using CSS, HTML, and JavaScript.   ",
    link: "https://github.com/LungiMarcia/Calculator",
  },
  {
    title: " To do Web App",
    description:
      "This is a basic to-do app developed using HTML, CSS and Javascript. It enables a user to add daily tasks. The to-do list is a union of the Pending Tasks list and the Completed Taskslist. A user can mark a task complete upon its successful completion, and these completed tasks appear on a separate list, say Completed Tasks. There is also a separate section titled Pending Tasks for all the tasks that require completion. Irrespective of the list, a user is able to delete or edit tasks from it.  ",
    link: "https://github.com/LungiMarcia/To-do-Web-App",
  },
  {
    title: "Login authentication System",
    description:
      "This is a login authentication system created using HTML, CSS and JavaScript It allows users to register, login, and access a secured page. ",
    link: "https://github.com/LungiMarcia/Login-authentication",
  },
];

console.log("Projects:");
projects.forEach(function (project) {
  console.log("Project:" + project.title);
  console.log("Description:" + project.description);
  console.log("Link:" + project.link);
});
