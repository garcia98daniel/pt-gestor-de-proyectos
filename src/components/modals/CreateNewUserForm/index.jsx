import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';
import { createUserRequesting } from '@/redux/users/slice';

export default function CreateNewUserForm({ open, setOpen }) {
  const dispatch = useDispatch();
  const rolesOptions = ['Developer', 'Manager', 'Tester'];
  const technologiesOptions = ['React', 'Node.js', 'Angular', 'Java'];
  const areasOptions = ['Desarrollo', 'Gestión', 'QA'];
  const projectsOptions = ['Proyecto A', 'Proyecto B', 'Proyecto C', 'Proyecto D'];

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    // Transform data to match the required structure
    const transformedData = {
      id: formJson.id,
      name: formJson.nombre,
      last_name: formJson.apellido,
      url_photo: '', // Assuming this is not part of the form
      rol: rolesOptions.indexOf(selectedRole) + 1, // Convert role to integer
      list: selectedTechnologies.join('|'), // Join technologies with '|'
      area: formJson.area,
    };

    dispatch(createUserRequesting(transformedData));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
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
            onChange={(event, newValue) => setSelectedRole(newValue)}
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
            value={selectedTechnologies}
            onChange={(event, newValue) => setSelectedTechnologies(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                
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
            value={selectedProjects}
            onChange={(event, newValue) => setSelectedProjects(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                
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
