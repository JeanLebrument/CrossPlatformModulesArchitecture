'use strict';

var SearchResults = require('../../SearchResults/View/SearchResultsView');

class SearchPageOutput {
  static goToNextModule(component, listings) {
    component.props.navigator.push({
      title: 'Results',
      component: SearchResults,
      passProps: {listings: listings}
    });
  }
}

module.exports = SearchPageOutput;
