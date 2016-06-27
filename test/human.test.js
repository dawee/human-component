const Human = require('..');
const React = require('react');
const assert = require('assert');


const div = Human.from('div');
const TableRow = Human.require(module, 'material-ui/Table', 'TableRow');


describe('Human', () => {

  it('should generate element from tag name', () => {
    const el = div.el();

    assert.equal(true, React.isValidElement(el));
  });

  it('should generate element by require', () => {
    const el = TableRow.el();

    assert.equal(true, React.isValidElement(el));
  });

});