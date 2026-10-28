import { useState, memo } from "react";
import { Link } from "react-router-dom";

function JobCard({
  id,
  company,
  role,
  location,
  status,
  onDeleteJob,
  onEditJob,
  isEditing,
  onSaveJob,
  onCancelEdit,
}) {
  const [editData, setEditData] = useState({
    company: company,
    role: role,
    location: location,
    status: status,
  });
  
  const statusClass =
    status === "Applied"
      ? "applied"
      : status === "Interview"
        ? "interview"
        : "rejected";

  function handleChange(event) {
    const { name, value } = event.target;

    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSave(){
    const validatedData = {
      company : editData.company.trim(),
      role : editData.role.trim(),
      location : editData.location.trim(),
    }

    if(validatedData.company === "" || validatedData.role === "" || validatedData.location === ""){
      alert("Please fill in all required fields");
      return;
    }

    const updatedJob = {
      id: id,
      ...validatedData,
      status: editData.status,
    };

    onSaveJob(updatedJob);
  }

  function handleCancel(){
    setEditData({
      company,
      role,
      location,
      status,
    });
    onCancelEdit();
  }
  return (
    <div className="job-card">
      <h2>Id: {id}</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="company"
            value={editData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            value={editData.role}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            value={editData.location}
            onChange={handleChange}
          />

          <select
            name="status"
            id="status"
            value={editData.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Company: {company}</h2>
          <h3>Role: {role}</h3>
          <h3>Location: {location}</h3>
          <h3 className={statusClass}>Status: {status}</h3>
          <Link to={`/applications/${id}`}>View details</Link>
        </div>
      )}

      <button onClick={() => onDeleteJob(id)}>Delete</button>
      <button onClick={() => onEditJob(id)}>Edit</button>
      
    </div>
  );
}
export default memo(JobCard);
