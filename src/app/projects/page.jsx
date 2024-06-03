"use client";
import React, { useState } from "react";
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
function createData(
  proyecto,
  cliente,
  repositorio,
  desarrolladores,
  ci,
  cd,
  frontend,
  backend,
  db,
  alerts,
  errores,
  despliegues,
  avance,
  reporte,
  status
) {
  return {
    proyecto,
    cliente,
    repositorio,
    desarrolladores,
    ci,
    cd,
    frontend,
    backend,
    db,
    alerts,
    errores,
    despliegues,
    avance,
    reporte,
    status,
  };
}

const rows = [
  createData(
    "Proyecto A",
    "Cliente A",
    "Repo A",
    5,
    "Yes",
    "Yes",
    "React",
    "Node.js",
    "PostgreSQL",
    3,
    1,
    20,
    "80%",
    "Reporte A",
    "Activo"
  ),
  createData(
    "Proyecto B",
    "Cliente B",
    "Repo B",
    3,
    "No",
    "Yes",
    "Angular",
    "Java",
    "MySQL",
    2,
    2,
    15,
    "60%",
    "Reporte B",
    "En Progreso"
  ),
  // Añade más filas según sea necesario
];


function Projects() {
    const [createNewProject_isOpen, setCreateNewProject_isOpen] = useState(false);

  return (
    <Layout>
      <div className={styles.Projects_page_container}>
      <h4>Lista De Proyectos Registrados</h4>
      <div className={styles.btn_wrapper}>
        <button className={styles.projects_add_new_project_btn} onClick={() => setCreateNewProject_isOpen(true)}>
          Nuevo Proyecto
        </button>
      </div>
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
            {rows.map((row) => (
              <TableRow
                key={row.proyecto}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.proyecto}
                </TableCell>
                <TableCell>{row.cliente}</TableCell>
                <TableCell>{row.repositorio}</TableCell>
                <TableCell>{row.desarrolladores}</TableCell>
                <TableCell>{row.ci}</TableCell>
                <TableCell>{row.cd}</TableCell>
                <TableCell>{row.frontend}</TableCell>
                <TableCell>{row.backend}</TableCell>
                <TableCell>{row.db}</TableCell>
                <TableCell>{row.alerts}</TableCell>
                <TableCell>{row.errores}</TableCell>
                <TableCell>{row.despliegues}</TableCell>
                <TableCell>{row.avance}</TableCell>
                <TableCell>{row.reporte}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell style={{display: 'flex', alignItems:"center", height:"50px"}}>
                    <BsPencilSquare /><BsFillTrashFill />
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
