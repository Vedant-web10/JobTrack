import { useEffect, useRef, useState } from "react";

function AddJob({ onAddJob }) {
  const [validate, setValidate] = useState("");
  const companyInputRef = useRef(null);

  useEffect(()=>{
    companyInputRef.current.focus();
  },[])

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newJob = {
      company: formData.get("company"),
      role: formData.get("role"),
      location: formData.get("location"),
      status: formData.get("status"),
    };

    newJob.company = newJob.company.trim();
    newJob.role = newJob.role.trim();
    newJob.location = newJob.location.trim();
    newJob.status = newJob.status.trim();

    if (newJob.company === "" || newJob.role === "" || newJob.location === "") {
      setValidate("Please fill in all required fields");
      return;
    }

    onAddJob(newJob);

    setValidate("");

    event.target.reset();
  }
  return (
    <form id="add-job" className="add-job-form" onSubmit={handleSubmit}>
      <label htmlFor="company">Company: </label>
      <input
        ref={companyInputRef}
        className="form-input"
        type="text"
        id="company"
        name="company"
      />
      <label htmlFor="role">Role: </label>
      <input className="form-input" type="text" id="role" name="role" />
      <label htmlFor="location">Location: </label>
      <input className="form-input" type="text" id="location" name="location" />

      <select className="form-status" name="status" id="status">
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
      </select>
      {validate && <p className="error-message">{validate}</p>}
      <button className="add-job-button">Add Job</button>
    </form>
  );
}
export default AddJob;
