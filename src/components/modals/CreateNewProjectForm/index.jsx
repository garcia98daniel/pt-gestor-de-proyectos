import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox, FormControlLabel } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { usersGetRequesting } from '@/redux/users/slice';
import { createProjectRequesting } from '@/redux/projects/slice';

export default function CreateNewProjectForm({ open, setOpen }) {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);

  const [selectedDevelopers, setSelectedDevelopers] = useState([]);
  const [selectedFrontTechnologies, setSelectedFrontTechnologies] = useState([]);
  const [selectedBackTechnologies, setSelectedBackTechnologies] = useState([]);

  useEffect(() => {
    dispatch(usersGetRequesting());
  }, [dispatch]);

  const developersOptions = users.map(user => `${user.name} ${user.last_name}`);
  const frontTechnologiesOptions = ['React', 'React-native', 'VueJS', 'Angular'];
  const backTechnologiesOptions = ['.Net', 'Java', 'Python', 'NodeJS'];

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const transformedData = {
      project_name: formJson.proyecto,
      client: formJson.cliente,
      repo_url: formJson.repositorio,
      ci: formJson.ci === 'true',
      cd: formJson.cd === 'true',
      developers: selectedDevelopers.join('|'),
      frontend_tecnology: selectedFrontTechnologies.join('|'),
      backend_tecnology: selectedBackTechnologies.join('|'),
      databases: formJson.baseDeDatos,
      errors_count: 0,
      warning_count: 0,
      deploy_count: 0,
      percentage_completion: 0,
      report_nc: 0,
      status: 'En Desarrollo'
    };

    dispatch(createProjectRequesting(transformedData)); // Dispatch de la acción para crear proyectos
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
      <DialogTitle style={{ borderBottom: '1px solid lightgray' }}>Creemos un Nuevo Proyecto</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="proyecto">Proyecto</FormLabel>
          <TextField
            required
            id="proyecto"
            name="proyecto"
            type="text"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="cliente">Cliente</FormLabel>
          <TextField
            required
            id="cliente"
            name="cliente"
            type="text"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="repositorio">Repositorio</FormLabel>
          <TextField
            required
            label="https://"
            id="repositorio"
            name="repositorio"
            type="text"
            variant="outlined"
          />
        </FormControl>
        <FormControlLabel
          value="ci"
          control={<Checkbox name="ci" />}
          label="Tiene integración Continua"
          labelPlacement="start"
        />
        <br />
        <FormControlLabel
          value="cd"
          control={<Checkbox name="cd" />}
          label="Tiene Despliegue Continuo"
          labelPlacement="start"
        />
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="desarrolladores">Desarrolladores</FormLabel>
          <Autocomplete
            multiple
            id="desarrolladores"
            options={developersOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={selectedDevelopers}
            onChange={(event, newValue) => setSelectedDevelopers(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                name="desarrolladores"
                label="Quienes son los responsables?"
                placeholder="Seleccione los desarrolladores"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="frontend">Frontend</FormLabel>
          <Autocomplete
            multiple
            id="frontend"
            options={frontTechnologiesOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={selectedFrontTechnologies}
            onChange={(event, newValue) => setSelectedFrontTechnologies(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                name="frontend"
                label="Que tecnología Frontend se usa?"
                placeholder="Seleccione tecnologías frontend"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="backend">Backend</FormLabel>
          <Autocomplete
            multiple
            id="backend"
            options={backTechnologiesOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={selectedBackTechnologies}
            onChange={(event, newValue) => setSelectedBackTechnologies(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                name="backend"
                label="Que tecnología Backend se usa?"
                placeholder="Seleccione tecnologías backend"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="baseDeDatos">Base de Datos</FormLabel>
          <TextField
            label="Que base de datos se usa?"
            required
            id="baseDeDatos"
            name="baseDeDatos"
            type="text"
            variant="outlined"
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
