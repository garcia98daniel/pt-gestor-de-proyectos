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
import CreateNewUserForm from "../../components/modals/CreateNewUserForm";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { usersGetRequesting } from "@/redux/users/slice";

function Users() {
  const [createNewUser_isOpen, setCreateNewUser_isOpen] = useState(false);
  const dispatch = useDispatch();
  const { users, requesting } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(usersGetRequesting());
  }, []);

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
                <TableCell>Foto</TableCell>
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
            {requesting && "cargando..."}

              {users?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <i>
                      <Image
                        src={user.url_photo || "/imgs/userprofile.png"}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </i>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.rol === 1 ? "Developer" : "Otro"}</TableCell>
                  <TableCell>{user.list}</TableCell>
                  <TableCell>{user.area}</TableCell>
                  <TableCell>Proyectos</TableCell> {/* Placeholder para proyectos */}
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
