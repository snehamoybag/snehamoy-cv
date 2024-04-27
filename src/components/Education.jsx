import education from "../data/education";

const Education = () => {
  const educationItems = education.map((item) => {
    const {
      degree,
      subject,
      college,
      university,
      location,
      startYear,
      endYear,
    } = item;

    return (
      <li key={degree}>
        <p>
          {degree} in {subject} from {college}, {university}, {location}
        </p>
        <p className="small-text">
          {startYear} - {endYear}
        </p>
      </li>
    );
  });

  return (
    <section className="education">
      <h2>Education</h2>
      <ul>{educationItems}</ul>
    </section>
  );
};

export default Education;
