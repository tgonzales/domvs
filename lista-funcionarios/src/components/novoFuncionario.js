import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class NovoFuncionario extends React.Component {
  state = {
    open: true,
    id: '',
    nome: '',
    idade: '',
    cargo: '',
    nascimento: ''
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (type, evt) => {
      //console.log('change', type, evt.target.value)
      this.setState({ [type]: evt.target.value })
  }

  handleSubmit = () => {
    const { onSubmit } = this.props
    const { id, nome, idade, cargo, nascimento } = this.state
    const payload = { id, nome, idade, cargo, nascimento }
    onSubmit(payload)
  }

  render() {
    return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Novo Funcionário</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Adicione um novo funcionário, preenchendo o cadastro abaixo
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              label="Número do registro"
              fullWidth
              onChange={evt => this.handleChange('id', evt)}
            />
            <TextField
              margin="dense"
              id="nome"
              label="Nome"
              fullWidth
              onChange={evt => this.handleChange('nome', evt)}
            />
            <TextField
              margin="dense"
              id="idade"
              label="Idade"
              fullWidth
              onChange={evt => this.handleChange('idade', evt)}
            />
            <TextField
              margin="dense"
              id="cargo"
              label="cargo"
              fullWidth
              onChange={evt => this.handleChange('cargo', evt)}
            />
            <TextField
              margin="dense"
              id="nascimento"
              label="data de nascimento"
              fullWidth
              onChange={evt => this.handleChange('nascimento', evt)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}
