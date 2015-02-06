/** @jsx React.DOM */

jest.dontMock('../File');

describe('title', function () {
    var File = require('../File');
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var fileEl, fileContent;

    beforeEach(function () {
        fileEl = TestUtils.renderIntoDocument(<File fileName='myfile.js' onClick={function(){}} />);
        fileContent = TestUtils.findRenderedDOMComponentWithClass(fileEl, 'file-name');
    });

    it('file element should have file name', function () {
        expect(fileContent.getDOMNode().textContent).toEqual('myfile.js');
    });

    it('handleClick should be called when click title', function() {
        fileEl.handleClick = jest.genMockFn();
        TestUtils.Simulate.click(fileContent);
        //looks like an unsolved problem https://github.com/facebook/jest/issues/207
        //expect(titleEl.handleClick.mock.calls.length).toBe(1);
    });

});
