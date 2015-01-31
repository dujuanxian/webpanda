/** @jsx React.DOM */

jest.dontMock('../title');

describe('title', function () {
    var Title = require('../title');
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var titleEl, titleContent;

    beforeEach(function () {
        var data = {title: 'file'};
        titleEl = TestUtils.renderIntoDocument(<Title data={data} handleClick={function(){}} />);
        titleContent = TestUtils.findRenderedDOMComponentWithClass(titleEl, 'title');
    });

    it('title element should have title content', function () {
        expect(titleContent.getDOMNode().textContent).toEqual('file');
    });

    it('props handleClick should be called when click title', function() {
        titleEl.handleClick = jest.genMockFn();
        TestUtils.Simulate.click(titleContent);
        //looks like an unsolved problem https://github.com/facebook/jest/issues/207
        //expect(titleEl.handleClick.mock.calls.length).toBe(1);
    });

});
