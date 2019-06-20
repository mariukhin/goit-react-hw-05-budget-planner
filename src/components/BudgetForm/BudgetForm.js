import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default class BudgetForm extends Component {
  state = { budget: 0 };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  // handleChange = ({ target: { value } }) => this.setState({ budget: value });
  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);
    // const { saveBudget } = this.props;
    // const { budget } = this.state;
    // console.log(budget);
    // saveBudget(budget);

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
