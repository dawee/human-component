const Human = require('..');
const React = require('react');
const assert = require('assert');


const div = Human.from('div');
const TableRow = Human.require(module, 'material-ui/Table', 'TableRow')

class TestComponent extends Human.Component {}


describe('Human', () => {

  it('should generate a react element', () => {
    const el = TestComponent.el();

    assert.equal(true, React.isValidElement(el));
  });


  it('should set properties', () => {
    const el = TestComponent.set({width: 100}).el();

    assert.equal(100, el.props.width);
  });

  it('should generate element from tag name', () => {
    const el = div.el();

    assert.equal(true, React.isValidElement(el));
  });

  it('should generate element by require', () => {
    const el = TableRow.el();

    assert.equal(true, React.isValidElement(el));
  });

});