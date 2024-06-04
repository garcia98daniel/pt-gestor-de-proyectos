"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import CreateNewProjectForm from "../../components/modals/CreateNewProjectForm";
import { projectsGetRequesting } from "@/redux/projects/slice";
import { useDispatch, useSelector } from "react-redux";

function Projects() {
  const dispatch = useDispatch();
  const [createNewProject_isOpen, setCreateNewProject_isOpen] = useState(false);
  const { projects, requesting } = useSelector(state => state.projects);
  const {user:{user}} = useSelector(state => state.user);
  
  useEffect(() => {
    dispatch(projectsGetRequesting());
  }, []);

  return (
    <Layout>
      <div className={styles.Projects_page_container}>
        <h4>Lista De Proyectos Registrados</h4>
        <div className={styles.btn_wrapper}>
          <button
            className={styles.projects_add_new_project_btn}
            onClick={() => setCreateNewProject_isOpen(true)}
          >
            Nuevo Proyecto
          </button>
        </div>
        {requesting && "cargando..."}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Proyecto</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Repositorio</TableCell>
                <TableCell>Desarrolladores</TableCell>
                <TableCell>CI</TableCell>
                <TableCell>CD</TableCell>
                <TableCell>Frontend</TableCell>
                <TableCell>Backend</TableCell>
                <TableCell>DB</TableCell>
                <TableCell>Alerts</TableCell>
                <TableCell>Errores</TableCell>
                <TableCell>Cant. Despliegues</TableCell>
                <TableCell>Avance</TableCell>
                <TableCell>Reporte NC's</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects?.map((project) => (
                <TableRow
                  key={project.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {project.project_name}
                  </TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.repo_url}</TableCell>
                  <TableCell>{project.developers}</TableCell>
                  <TableCell>{project.ci ? "Yes" : "No"}</TableCell>
                  <TableCell>{project.cd ? "Yes" : "No"}</TableCell>
                  <TableCell>{project.frontend_tecnology}</TableCell>
                  <TableCell>{project.backend_tecnology}</TableCell>
                  <TableCell>{project.databases}</TableCell>
                  <TableCell>{project.warning_count}</TableCell>
                  <TableCell>{project.errors_count}</TableCell>
                  <TableCell>{project.deploy_count}</TableCell>
                  <TableCell>{project.percentage_completion}%</TableCell>
                  <TableCell>{project.report_nc}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell style={{ display: 'flex', alignItems: "center", height: "50px" }}>
                    {user === "admin" &&
                    <><BsPencilSquare /><BsFillTrashFill /></>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CreateNewProjectForm 
        open={createNewProject_isOpen} 
        setOpen={setCreateNewProject_isOpen}
      />
    </Layout>
  );
}

export default Projects;
