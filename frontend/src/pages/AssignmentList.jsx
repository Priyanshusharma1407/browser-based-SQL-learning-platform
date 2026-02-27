import { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "../components/AssignmentCard";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/assignments")
      .then((res) => setAssignments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="assignment-list">
      <h1 className="assignment-list__title">SQL Assignments</h1>

      {assignments.map((assignment) => (
        <AssignmentCard key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
}

export default AssignmentList;
