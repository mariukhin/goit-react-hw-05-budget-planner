import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { checkNumber } from '../../services/helper';

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  static propTypes = {
    addExpense: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { name, amount } = this.state;
    const { addExpense } = this.props;

    if (checkNumber(amount)) {
      addExpense(name, amount);
    } else {
      alert('Your amount must be greater than zero!!!');
    }

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
