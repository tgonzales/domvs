import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
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
import NovoFuncionario from './novoFuncionario'

import * as actions from '../store/actions'

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

class SimpleTable extends React.Component {
  state = {
    modal: false
  }

  handleSubmit = payload => {
    const { novoFuncionario } = this.props
    this.setState({ modal: false })
    novoFuncionario(payload)
  }

  handleRemoveFuncionario = payload => {
    const { removeFuncionario } = this.props
    removeFuncionario(payload)
  }

  render() {
    const { classes, funcionarios } = this.props;
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
            {funcionarios.map(row => {
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
                      onClick={() => this.handleRemoveFuncionario(row)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {this.state.modal && <NovoFuncionario onSubmit={this.handleSubmit} />}
        <div>
          <Button onClick={() => this.setState({ modal: true})} variant="fab" className={classes.fab} color='primary'>
            <AddIcon />
          </Button>
        </div>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  funcionarios: store.funcionarios.funcionarios
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    novoFuncionario: actions.novoFuncionario,
    removeFuncionario: actions.removeFuncionario
  }, dispatch)
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SimpleTable))