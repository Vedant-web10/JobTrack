import JobCard from "../components/JobCard";

function Applications({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  filteredJobs,
  handleDeleteJob,
  handleSaveJob,
  handleEditJob,
  editingJobId,
  handleCancelEdit,
}) {
  return (
    <div className="app-container">
      <h2 className="page-title">Your Job Applications</h2>

      <div className="filter-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          className="status-filter"
          value={filterStatus}
          onChange={(event) => setFilterStatus(event.target.value)}
        >
          <option value="All">All statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div>
        {filteredJobs.length === 0 ?
        (<p>No jobs found. Try changing search or filter</p>) : (
          filteredJobs.map((job)=>
            (
              <JobCard
                key={job.id}
                id={job.id}
                company={job.company}
                role={job.role}
                location={job.location}
                status={job.status}
                onDeleteJob={handleDeleteJob}
                onSaveJob={handleSaveJob}
                onEditJob={handleEditJob}
                isEditing={editingJobId === job.id}
                onCancelEdit={handleCancelEdit}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
export default Applications;
