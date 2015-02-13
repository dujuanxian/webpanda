/** @jsx React.DOM */

jest.dontMock('../File');

describe('title', function() {
    var File = require('../File');
    var ProjectActions = require('../../../actions/project');
    var React = require('react/addons');

    var TestUtils = React.addons.TestUtils;

    var component;

    beforeEach(function() {
        component = TestUtils.renderIntoDocument(<File fileName='myfile.js' />);
    });

    it('file element should have file name', function() {
        var node = TestUtils.findRenderedDOMComponentWithClass(component, 'file-name');
        expect(node.getDOMNode().textContent).toEqual('myfile.js');
    });

    it('handleClick should be called when click title', function() {
        TestUtils.Simulate.click(component.getDOMNode());
        // FIXME
        // expect(ProjectActions.selectFile).toHaveBeenCalledWith('myfile.js');
    });

});
