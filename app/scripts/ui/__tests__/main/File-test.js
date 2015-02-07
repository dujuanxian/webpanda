/** @jsx React.DOM */

jest.dontMock('../File');

describe('title', function() {
    var File = require('../File');
    var React = require('react/addons');

    var TestUtils = React.addons.TestUtils;

    var component;
    var onClick = jest.genMockFn();

    beforeEach(function() {
        component = TestUtils.renderIntoDocument(<File fileName='myfile.js' onClick={onClick} />);
    });

    it('file element should have file name', function() {
        var node = TestUtils.findRenderedDOMComponentWithClass(component, 'file-name');
        expect(node.getDOMNode().textContent).toEqual('myfile.js');
    });

    it('handleClick should be called when click title', function() {
        TestUtils.Simulate.click(component.getDOMNode());
        expect(onClick.mock.calls.length).toBe(1);
    });

});
