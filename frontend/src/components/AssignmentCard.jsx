import { useNavigate } from "react-router-dom";

function AssignmentCard({ assignment }) {
  const navigate = useNavigate();

  return (
    <div className="assignment-card">
      <h2 className="assignment-card__title">{assignment.title}</h2>

      <p className="assignment-card__description">{assignment.description}</p>

      <span className="assignment-card__difficulty">
        {assignment.difficulty}
      </span>

      <button
        className="assignment-card__btn"
        onClick={() => navigate(`/assignment/${assignment._id}`)}
      >
        Attempt
      </button>
    </div>
  );
}

export default AssignmentCard;
