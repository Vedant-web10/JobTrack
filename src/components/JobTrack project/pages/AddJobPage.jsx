import AddJob from "../components/AddJob";

function AddJobPage({onAddJob}){
  return(
    <div className="app-container">
      <h2 className="page-title">Add a New Job</h2>
      <AddJob onAddJob={onAddJob} />
    </div>
  );
}
export default AddJobPage;