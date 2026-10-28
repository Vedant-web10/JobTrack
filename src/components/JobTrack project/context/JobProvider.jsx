import useLocalStorage from "../hooks/useLocalStorage";
import JobContext from "./JobContext";

const defaultJobs = [
  {
    id: 1,
    company: "Google",
    role: "Frontend developer",
    location: "Pune",
    status: "Applied",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React developer",
    location: "Hyderabad",
    status: "Interview",
  },
  {
    id: 3,
    company: "Nvidia",
    role: "Java developer",
    location: "Mumbai",
    status: "Rejected",
  },
];

function JobProvider({ children }) {
  const [jobs, setJobs] = useLocalStorage("jobs", defaultJobs);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
}

export default JobProvider;
