import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';

export default function CreateNewUserForm({ open, setOpen }) {
  const rolesOptions = ['Developer', 'Manager', 'Tester'];
  const technologiesOptions = ['React', 'Node.js', 'Angular', 'Java'];
  const areasOptions = ['Desarrollo', 'Gestión', 'QA'];
  const projectsOptions = ['Proyecto A', 'Proyecto B', 'Proyecto C', 'Proyecto D'];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);
          handleClose();
        },
      }}
    >
      <DialogTitle style={{ borderBottom: '1px solid lightgray' }}>Crear Nuevo Usuario</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <TextField
            required
            id="nombre"
            name="nombre"
            type="text"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="apellido">Apellido</FormLabel>
          <TextField
            required
            id="apellido"
            name="apellido"
            type="text"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="rol">Rol</FormLabel>
          <Autocomplete
            options={rolesOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Seleccione el rol"
                id="rol"
                name="rol"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="tecnologias">Tecnologías</FormLabel>
          <Autocomplete
            multiple
            options={technologiesOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Seleccione tecnologías"
                placeholder="Tecnologías"
                id="tecnologias"
                name="tecnologias"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="area">Área</FormLabel>
          <Autocomplete
            options={areasOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Seleccione el área"
                id="area"
                name="area"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="proyectos">Proyectos</FormLabel>
          <Autocomplete
            multiple
            options={projectsOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Seleccione proyectos"
                placeholder="Proyectos"
                id="proyectos"
                name="proyectos"
                variant="outlined"
              />
            )}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained">Guardar cambios</Button>
        <Button style={{ background: "gray", color: "white" }} onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
