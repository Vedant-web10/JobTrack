import { useState, useContext, useMemo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddJobPage from "./pages/AddJobPage";

import "./App.css";
import Layout from "./components/Layout";
import JobDetails from "./pages/JobDetails";
import JobContext from "./context/JobContext";
function Day13App() {
  const { jobs, setJobs } = useContext(JobContext);

  const [editingJobId, setEditingJobId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const handleAddJob = useCallback(
    (newJob) => {
      setJobs((prevJobs) => {
        const nextId =
          prevJobs.length === 0
            ? 1
            : Math.max(...prevJobs.map((job) => job.id)) + 1;
        return [...prevJobs, { ...newJob, id: nextId }];
      });
    },
    [setJobs],
  );

  const handleDeleteJob = useCallback(
    (jobId) => {
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
    },
    [setJobs],
  );

  const handleSaveJob = useCallback(
    (updatedJob) => {
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)),
      );
      setEditingJobId(null);
    },
    [setJobs],
  );

  const handleEditJob = useCallback((jobId) => {
    setEditingJobId(jobId);
  },[]); 

  const handleCancelEdit = useCallback(()=>{
    setEditingJobId(null);
  },[]);
    
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "All" || filterStatus === job.status;

      return matchesSearch && matchesStatus;
    });
  }, [jobs, searchTerm, filterStatus]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/applications"
          element={
            <Applications
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filteredJobs={filteredJobs}
              handleDeleteJob={handleDeleteJob}
              handleSaveJob={handleSaveJob}
              handleEditJob={handleEditJob}
              editingJobId={editingJobId}
              handleCancelEdit={handleCancelEdit}
            />
          }
        />
        <Route
          path="/add-job"
          element={<AddJobPage onAddJob={handleAddJob} />}
        />
        <Route path="/applications/:id" element={<JobDetails />} />
      </Route>
    </Routes>
  );
}
export default Day13App;
