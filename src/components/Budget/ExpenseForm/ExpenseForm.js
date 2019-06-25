import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../common/Form/Form';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { checkNumber, calculateBalance } from '../../../services/helper';

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  static propTypes = {
    addExpense: PropTypes.func.isRequired,
    budget: PropTypes.number.isRequired,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { name, amount } = this.state;
    const { addExpense, budget } = this.props;

    if (name === '') {
      alert('Put the name of expense!!!');
    } else if (calculateBalance(budget, amount) < 0) {
      alert('You can`t have - balance!!!');
    } else if (checkNumber(amount)) {
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
