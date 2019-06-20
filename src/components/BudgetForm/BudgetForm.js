import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form/Form';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';

export default class BudgetForm extends Component {
  state = { budget: 0 };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { value } }) => this.setState({ budget: value });

  handleSubmit = e => {
    const { onSave } = this.props;
    const { budget } = this.state;
    e.preventDefault();

    onSave(budget);

    this.setState({ budget: 0 });
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
