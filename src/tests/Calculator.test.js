import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers', ()=> {
    const button1 = container.getByTestId('number1')
    const operator_add = container.getByTestId('operator_add')
    const button4 = container.getByTestId('number4')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    
    fireEvent.click(button1);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_equals)
    expect(runningTotal.textContent).toEqual('5')

  })

  it('should substract two numbers', ()=> {
    const button7 = container.getByTestId('number7')
    const operator_subtract = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    
    fireEvent.click(button7);
    fireEvent.click(operator_subtract);
    fireEvent.click(button4);
    fireEvent.click(operator_equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should add multiply numbers', ()=> {
    const button3 = container.getByTestId('number3')
    const operator_multiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    
    fireEvent.click(button3);
    fireEvent.click(operator_multiply);
    fireEvent.click(button5);
    fireEvent.click(operator_equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide two numbers', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const operator_divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operator_divide);
    fireEvent.click(button7);
    fireEvent.click(operator_equals)

    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple numbers button clicks', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(operator_equals)

    expect(runningTotal.textContent).toEqual('217')
  })

  it('should chain mmultiple operations together', ()=> {
    const button7 = container.getByTestId('number7')
    const operator_subtract = container.getByTestId('operator-subtract')
    const button5 = container.getByTestId('number5')
    const operator_add = container.getByTestId('operator_add')
    const button4 = container.getByTestId('number4')
    const operator_divide = container.getByTestId('operator-divide')
    const button2 = container.getByTestId('number2')
    const operator_multiply = container.getByTestId('operator-multiply')
    const button1 = container.getByTestId('number1')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button7);
    fireEvent.click(operator_subtract);
    fireEvent.click(button5);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_divide);
    fireEvent.click(button2);
    fireEvent.click(operator_multiply);
    fireEvent.click(button1);
    fireEvent.click(operator_equals);

    expect(runningTotal.textContent).toEqual('3')
  })

  it('clear the running total', ()=> {
    const button3 = container.getByTestId('number3')
    const operator_multiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const operator_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    
    fireEvent.click(button3);
    fireEvent.click(operator_multiply);
    fireEvent.click(button5);
    fireEvent.click(operator_equals)
    fireEvent.click(clear)
    expect(runningTotal.textContent).toEqual('0')
  })
  
})
  