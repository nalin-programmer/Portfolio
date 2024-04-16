const experience = {
  experienceArray: [
      {
      _id: "0",
      title: "Flam",
      languages: "Full Stack Developer",
      startDate: "Aug 2023",
      logo: "https://blog.flamapp.com/wp-content/uploads/2021/07/logo-1.png",
      endDate: "Jan 2024",
      description: (
        <ul>
          <li>
            In{" "}
            <a href="https://flamapp.com/" target="_blank">
              Flam
            </a>
            , design and develop microservices in <b>Nest.js</b>, leveraging <b>Redis</b> for efficient cache management,<b> MongoDB</b> for data 
storage, and <b>Google Cloud</b> for blob storage and Python for <b>Google Cloud Functions</b>.
          </li>
          <li>
            Implement fast and robust queue solutions using <b>Bull MQ</b> for various use cases.
          </li>
          <li>
            Utilize the <b>Google Pub/Sub</b> model for efficient messaging patterns
          </li>
          <li>
            Helped in migration of data from AWS to Google Cloud and updating microservices accordingly
          </li>
         
        </ul>
      ),
    {
      _id: "1",
      title: "Flam",
      languages: "Backend Developer Intern",
      startDate: "Jan 2023",
      logo: "https://blog.flamapp.com/wp-content/uploads/2021/07/logo-1.png",
      endDate: "Aug 2023",
      description: (
        <ul>
          <li>
            In{" "}
            <a href="https://flamapp.com/" target="_blank">
              Flam
            </a>
            , designed and Maintained various micro-services written in{" "}
            <b>Nest.js</b>
            for creating server and used <b>MongoDB</b> for database.
          </li>
          <li>
            Used <b>Amazon S3</b> as a blob storage and integrated it with
            server for uploading, retrieving files from the bucket.
          </li>
          <li>
            Used <b>gRPC</b> for faster communication between micro-services and
            hence runs as much as 7 times faster than original.
          </li>
          <li>
            <b>GitHub</b> was used for project management and team
            collaboration.
          </li>
        </ul>
      ),
      hostedUrl: "",
    },
    {
      _id: "2",
      title: "Nuance Communication",
      languages: "Software Intern",
      startDate: "May 2022",
      logo: "data:image/png;base64,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",
      endDate: "July 2022",
      description: (
        <ul>
          <li>
            Worked in{" "}
            <a href="https://www.nuance.com/index.html" target="_blank">
              Nuance Communications
            </a>{" "}
            as a software developer intern using <b>React.js and MySQL</b>.
          </li>
          <li>
            Designed <b>web apps</b> which displays all necessary details about
            products and services provided by the company and used React{" "}
            <b>DataGrid</b> for smooth delivering of many complex tables with
            React.js.
          </li>
          <li>
            Experienced important skills like project life cycle management,
            work-time management, teamwork and effective communication.
          </li>
        </ul>
      ),
      hostedUrl: "",
    },
    {
      _id: "3",
      title: "IIITians Network",
      languages: "Backend Developer",
      startDate: "Dec 2020",
      logo: "https://pbs.twimg.com/profile_images/1409196293113581569/xq8usx2J_400x400.jpg",
      endDate: "April 2021",
      description: (
        <ul>
          <li>
            Worked at{" "}
            <b>
              <a href="https://iiitiansnetwork.com/" target="_blank">
                IIITians Network
              </a>
            </b>{" "}
            on{" "}
            <b>
              <a
                href="https://github.com/COMET-Labs/COMET-Backend-OS"
                target="_blank"
              >
                COMET-Backend-OS
              </a>
            </b>{" "}
            repository of{" "}
            <b>
              <a href="https://github.com/COMET-Labs" target="_blank">
                Project COMET
              </a>
            </b>{" "}
            with organised workflow on GitHub.
          </li>
          <li>
            Contributed as a member of <b>Delta Team</b> on a community platform
            which connect nearly 5000 IIITIAN students and clubs from 25
            colleges together.
          </li>
          <li>
            Designed <b>Club Schema</b> to add feature of creating clubs and,
            hence created <b>Club Controller and routes</b> to join frontend and
            database.
          </li>
          <li>
            Added <b>Validator</b> to validate the messages sent and received
            are in appropriate format.
          </li>
          <li>
            Made <b>chats more interactive</b> by adding features like{" "}
            <b>star</b> a comment or reply.
          </li>
          <li>
            Implemented <b>Mentor, Moderator and Member</b> hierarchy among all
            members of a club in club schema.
          </li>
        </ul>
      ),
      hostedUrl: "",
    },
  ],
};
export default experience;
