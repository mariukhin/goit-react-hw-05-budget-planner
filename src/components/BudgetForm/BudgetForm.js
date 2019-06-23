import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { checkNumber } from '../../services/helper';

export default class BudgetForm extends Component {
  state = { budget: '' };

  static propTypes = {
    saveBudget: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { value } }) => this.setState({ budget: value });

  handleSubmit = e => {
    e.preventDefault();
    const { saveBudget } = this.props;
    const { budget } = this.state;
    if (checkNumber(budget)) {
      saveBudget(budget);
    } else {
      alert('Your budget must be greater than zero!!!');
    }
    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
