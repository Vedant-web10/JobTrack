import { useContext } from "react";
import JobContext from "../context/JobContext";

function Dashboard(){
  const {jobs} = useContext(JobContext);
  return(
    <div className="app-container">
      <h2 className="page-title">Welcome to JobTrack Dashboard</h2>
      <p>Total Applications: {jobs.length}</p>
      <p>Applied: {jobs.filter((job)=>(
        job.status === "Applied"
      )).length}</p>
      
      <p>Interview: {jobs.filter((job)=>(
        job.status === "Interview"
      )).length}</p>

      <p>Rejected: {jobs.filter((job)=>(
        job.status === "Rejected"
      )).length}</p>
    </div>
  )
}
export default Dashboard;