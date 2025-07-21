const achievementData = [
  {
    id: 1,
    category: "Internship",
    title: "Unified Mentor Internship",
    image: "/achievements/Unified.png",
    description: "Gained real-world experience in full-stack development.",
    fullDescription: `Interned from May 2025 to July 2025, during which I developed four full-stack applications:
    - Recipe Book: A dynamic platform for storing and sharing recipes.
    - Chat Application: A real-time messaging app with user authentication.
    - Pet Simulator: An interactive virtual pet management system.
    - EPLQ: A custom-built project management and learning platform.`,
    link: 'https://www.linkedin.com/posts/ankit-sangwan-0786b5293_internship-fullstackdevelopment-webdevelopment-activity-7352807557586993152-B34u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcd1RwB4FaZawiJZRbzOV1gXPCrV_41I3I'

  },
  {
    id: 2,
    category: "Sports",
    title: "Gold Medalist in Track Events",
    image: "/achievements/Race.jpg", // Replace with actual image path
    description: "Secured 1st place in 100m, 200m, and 400m races at the 2023 school competition.",
    fullDescription: `Achieved gold medals in the 100m, 200m, and 400m track events during the 2023 inter-school athletics competition. Demonstrated consistency, speed, and endurance across multiple sprint categories, earning the top position in each.`,
  },
  {
    id: 3,
    category: "Sports",
    title: "Silver Medalist – Inter-Hostel Badminton Tournament",
    image: "/achievements/Badminton.png", // Replace with actual path
    description: "Won silver in Boys’ Singles and Mixed Doubles at the 2025 inter-hostel tournament.",
    fullDescription: `Secured silver medals in both Boys’ Singles and Mixed Doubles during the 2025 Inter-Hostel Badminton Tournament at college.
    - Went undefeated in all Boys’ Singles group stage matches.
    - Showcased strong performance and consistency across both individual and team formats.`,
  },
  {
    id: 4,
    category: "Sports",
    title: "Inter-Hostel Volleyball Tournament – 3rd Place",
    image: "/achievements/Volleyball.png", // Replace actual image path
    description: "Secured 3rd place in the 2025 inter-hostel volleyball tournament.",
    fullDescription: `Represented the hostel team in the 2025 Inter-Hostel Volleyball Tournament and achieved a commendable 3rd place finish.
    - Competed in multiple high-intensity matches against strong teams.
    - Contributed actively to team coordination, defense, and set plays throughout the tournament.`,
  },
  {
    id: 5,
    category: "Sports",
    title: "District-Level Badminton – Boys’ Doubles Semi-Finalist",
    image: "/achievements/Badminton1.jpg", // Replace with actual image path
    description: "Reached the semi-finals in Boys’ Doubles at the 2019 district badminton tournament in Haridwar.",
    fullDescription: `Competed in the **2019 District-Level Badminton Championship** in Haridwar and reached the **semi-finals** in the **Boys’ Doubles** category.
    - The match was a qualifier for the **state-level competition**, with only finalists advancing.
    - Narrowly missed the finals after a close semi-final match against the eventual winners.
    - Demonstrated strong teamwork, strategy, and resilience throughout the tournament.`,
  },
  {
    id: 6,
    category: "Education",
    title: "Python 101 for Data Science – IBM",
    image: "/achievements/Python101.png", //  actual image path of the certificate
    description: "Completed Python 101 for Data Science, an IBM-certified course on foundational Python skills.",
    fullDescription: `Successfully completed the Python 101 for Data Science course (PY0101EN) offered by IBM through CognitiveClass and SRM University on the srmuh.skillsnetwork.site platform.
    - Gained hands-on experience in Python programming fundamentals, data structures, and data manipulation techniques.
    - Course powered by IBM Developer Skills Network and endorsed by SRM University.`,
    link: "https://courses.srmuh.skillsnetwork.site/certificates/03926df4116a419da650978a1ad753e2"
  },
  {
  id: 7,
    category: "Education",
    title: "Introduction to Python – IBM",
    image: "/achievements/Python.png", // actual image path certificate
    description: "Completed IBM-certified 'Introduction to Python' course covering core programming concepts.",
    fullDescription: `Successfully completed the Introduction to Python course (CEPYTIIN), provided by IBMCE, via srmuh.skillsnetwork.site, and powered by the IBM Developer Skills Network.
    - Covered the basics of Python including syntax, variables, control flow, functions, and data structures.
    - Certificate issued by SRM University in collaboration with IBM.
    - Completion Date: December 5, 2024.`,
    link: "https://courses.srmuh.skillsnetwork.site/certificates/78aab0d6a345489883cc3f62545bcaa6"
  },
  {
    id: 8,
    category: "Education",
    title: "Data Science Methodologies – IBM",
    image: "/achievements/Methodologies.png", // Replace with the actual image path of this certificate
    description: "Completed IBM’s course on Data Science Methodologies, focusing on analytical thinking and structured problem solving.",
    fullDescription: `Earned a certificate for successfully completing the Data Science Methodologies course, issued by IBM on April 21, 2025.
    - Gained insights into the various phases of the data science lifecycle.
    - Learned industry-standard approaches to framing data problems, forming hypotheses, and applying data-driven decision-making.
    - Course recognized under the IBM Skills Network – Foundational track.`,
    link: "https://www.credly.com/badges/a297e896-415c-4dda-964b-944dbe238df6" // Direct link to the Credly badge
  },
  {
    id: 9,
    category: "Education",
    title: "Credit-Linked Program in Data Science – IIT Guwahati (Daksh Gurukul)",
    image: "/achievements/Letter.png", //  image path of this certificate
    description: "Enrolled in the Credit-Linked Program in Data Science, a joint initiative by IIT Guwahati, NSDC, and Masai School.",
    fullDescription: `Selected for the Credit-Linked Program in Data Science offered by Daksh Gurukul, IIT Guwahati, in collaboration with NSDC and Masai School.
    - Course Start Date: January 20, 2025
    - This transformative program bridges academic excellence with real-world tech industry needs.
    - Focuses on hands-on learning, innovation, and professional development.
    - Aims to develop industry-ready data science professionals through structured mentorship and applied learning.`,
    link: "https://www.linkedin.com/posts/ankit-sangwan-0786b5293_datascience-learningjourney-masai-activity-7294360505039687680-wEuy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcd1RwB4FaZawiJZRbzOV1gXPCrV_41I3I"
  },
  {
    id: 10,
    category: "Education",
    title: "Data Visualisation: Empowering Business with Effective Insights – Tata (Forage)",
    image: "/achievements/Tata.png", // Replace with actual image path
    description: "Completed a virtual experience program on data visualization and business insights from Tata via Forage.",
    fullDescription: `Earned a certificate for completing Tata's virtual program on Data Visualisation, hosted by Forage, on February 8, 2025.
    - Covered core concepts in framing business scenarios and visual storytelling.
    - Practiced selecting appropriate visuals and effectively communicating insights.
    - Hands-on modules included:
    - Framing the Business Scenario
    - Choosing the Right Visuals
    - Creating Effective Visuals
    - Communicating Insights and Analysis.`,
    link: "https://www.linkedin.com/posts/ankit-sangwan-0786b5293_forage-certificate-activity-7293932131846660096-dhIX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcd1RwB4FaZawiJZRbzOV1gXPCrV_41I3I" 
  },
  {
    id: 11,
    category: "Education",
    title: "Introduction to Data Science Job Simulation – Commonwealth Bank (Forage)",
    image: "/achievements/Common.png", // Replace with actual image path
    description: "Completed job simulation on foundational data science skills with Commonwealth Bank via Forage.",
    fullDescription: `Completed the Introduction to Data Science Job Simulation by Commonwealth Bank through Forage on February 8, 2025.
    - Gained hands-on exposure to core data science processes including:
    - Data Aggregation and Analysis
    - Data Anonymisation
    - Designing Databases
    - Proposing Data Analysis Approaches`,
    link: "https://www.linkedin.com/posts/ankit-sangwan-0786b5293_forage-certificate-activity-7293864252510027776-4heq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcd1RwB4FaZawiJZRbzOV1gXPCrV_41I3I" // Add link if available
  },
  {
    id: 12,
    category: "Education",
    title: "Data Analytics Job Simulation – Deloitte (Forage)",
    image: "/achievements/Deloitte.png", // Replace with actual image path
    description: "Completed Deloitte’s job simulation focused on data analytics and forensic technology via Forage.",
    fullDescription: `Earned a Certificate of Completion for Deloitte's Data Analytics Job Simulation, completed through Forage on July 16, 2025.
    - Hands-on tasks involved:
    - Performing Data Analysis
    - Exploring Forensic Technology
    - Designed to simulate real-world tasks and responsibilities of a data analyst.`,
    link: "https://www.linkedin.com/posts/ankit-sangwan-0786b5293_forage-certificate-activity-7352775859960692737-4U5A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcd1RwB4FaZawiJZRbzOV1gXPCrV_41I3I" // Add Forage credential or portfolio link if applicable
  }





  // Add more as needed...
];

export default achievementData;
