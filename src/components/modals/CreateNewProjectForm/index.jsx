import React from 'react';
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

export default function CreateNewProjectForm({ open, setOpen }) {
  const developersOptions = ['dev1', 'dev2', 'dev3'];
  const frontTechnologiesOptions = ['React', 'React-native', 'VueJS', 'Angular'];
  const backTechnologiesOptions = ['.Net', 'Java', 'Python', 'NodeJS'];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            value="start"
            control={<Checkbox />}
            label="Tiene integración Continua"
            labelPlacement="start"
          />
          <br />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
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
    </>
  );
}
