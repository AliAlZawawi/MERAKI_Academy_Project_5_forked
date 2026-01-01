import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Search.css"
const courses = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "UI / UX Design" },
  { id: 3, title: "Backend Development" },
  { id: 4, title: "Mobile App Development" },
  { id: 5, title: "Data Structures & Algorithms" },
];

const Search = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [searchCourses, setSearchCourses] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setSearchCourses([]);
      return;
    }

    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchCourses(filteredCourses);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchValue}
        onChange={handleChange}
      />

      {searchCourses.length > 0 && (
        <ul className="search-results">
          {searchCourses.map(course => (
            <li
              key={course.id}
              onClick={() => navigate(`/courseDetails/${course.id}`)}
            >
              {course.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search