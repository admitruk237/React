import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import courses from '../data/courses';
import DropDownSort from './DropDownSort';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

function Courses() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort || '');
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  /* useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]); */

  useEffect(() => {
    // Перевірка, чи `sortKey` дійсний і присутній у `SORT_KEYS`
    if (sortKey && SORT_KEYS.includes(sortKey)) {
      // Оновлення відсортованих курсів при зміні `sortKey`
      setSortedCourses(sortCourses(courses, sortKey));
    } else {
      // Якщо `sortKey` недійсний, повернутись до початкового стану
      navigate('.', { replace: true });
      setSortKey('');
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  const handleSortChange = (key) => {
    setSortKey(key);
    navigate(`?sort=${key}`, { replace: true });
  };
  return (
    <>
      <DropDownSort onSortChange={handleSortChange} />
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Courses;
