import { useParams } from "react-router-dom";
import { useContext } from "react";
import JobContext from "../context/JobContext";

function JobDetails() {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);

  const job = jobs.find((job) => {
    return job.id === Number(id);
  });
  if (!job) {
    return (
      <div className="job-not-found">
        <h2>Job Not Found</h2>
        <p>The application you're looking for doesn't exist</p>
      </div>
    )
  }
  return (
    <div className="job-details">
      <h2>{job.company}</h2>
      <p>Job Details</p>
      <hr />
      <h4>Role: {job.role}</h4>
      <h4>Location: {job.location}</h4>
      <h4>Status: {job.status}</h4>
    </div>
  );
}

export default JobDetails;
