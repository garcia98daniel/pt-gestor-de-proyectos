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
import CreateNewUserForm from "../../components/modals/CreateNewUserForm";
import Image from "next/image";

function createData(
  nombre,
  apellido,
  rol,
  tecnologias,
  area,
  proyectos
) {
  return {
    nombre,
    apellido,
    rol,
    tecnologias,
    area,
    proyectos
  };
}

const rows = [
  createData(
    "Juan",
    "Perez",
    "Developer",
    "React, Node.js",
    "Desarrollo",
    "Proyecto A, Proyecto B"
  ),
  createData(
    "Ana",
    "Gomez",
    "Manager",
    "Angular, Java",
    "Gestión",
    "Proyecto C, Proyecto D"
  ),
  // Añade más filas según sea necesario
];

function Users() {
  const [createNewUser_isOpen, setCreateNewUser_isOpen] = useState(false);

  return (
    <Layout>
      <div className={styles.users_page_container}>
        <h4>Lista De Usuarios Registrados</h4>
        <div className={styles.btn_wrapper}>
          <button className={styles.users_add_new_project_btn} onClick={() => setCreateNewUser_isOpen(true)}>
            Nuevo Usuario
          </button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                    
                </TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Tecnologías</TableCell>
                <TableCell>Área</TableCell>
                <TableCell>Proyectos</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.nombre}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <i>
                        <Image src="/imgs/userprofile.png" 
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </i>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell>{row.apellido}</TableCell>
                  <TableCell>{row.rol}</TableCell>
                  <TableCell>{row.tecnologias}</TableCell>
                  <TableCell>{row.area}</TableCell>
                  <TableCell>{row.proyectos}</TableCell>
                  <TableCell style={{ display: 'flex', alignItems: "center", height: "50px" }}>
                    <BsPencilSquare /><BsFillTrashFill />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CreateNewUserForm 
        open={createNewUser_isOpen} 
        setOpen={setCreateNewUser_isOpen}
      />
    </Layout>
  );
}

export default Users;
