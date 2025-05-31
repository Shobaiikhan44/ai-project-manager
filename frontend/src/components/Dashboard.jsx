import { Button, Container, Stack, Heading } from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";

const Dashboard = () => {
  // const [projects, setProjects] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken");
  //       const response = await axios.get(
  //         "http://localhost:8000/api/projects/",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setProjects(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to fetch projects. Please login again.");
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
