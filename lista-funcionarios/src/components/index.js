import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function createData(id, nome, idade, cargo, nascimento) {
  return { id, nome, idade, cargo, nascimento };
}

const rows = [
  createData(10, 'Aiden Jacobs', 30, 'Developer', '26-01-1988'),
  createData(11, 'Marjorie Roberts', 31, 'Administrativo', '26-01-1987'),
  createData(12, 'Ethan Fleming', 40, 'Gerente de Marketing', '26-01-1969'),
  createData(13, 'Shane Dean', 41, 'Vice Presidente', '26-01-1971'),
  createData(14, 'Lester Silva', 50, 'Presidente', '26-01-1970'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <TextField
        id="outlined-full-width"
        label="Funcionários"
        style={{ margin: 8 }}
        placeholder="Procure um funcionário pelo nome"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell numeric>Idade</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Data Nascimento</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell numeric>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell numeric>{row.idade}</TableCell>
                <TableCell>{row.cargo}</TableCell>
                <TableCell>{row.nascimento}</TableCell>
                <TableCell>
                  <IconButton
                    className={classes.icon}
                    color='primary'
                    onClick={() => {}}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    className={classes.icon}
                    color='primary'
                    onClick={() => {}}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div>
        <Button variant="fab" className={classes.fab} color='primary'>
          <AddIcon />
        </Button>
      </div>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);