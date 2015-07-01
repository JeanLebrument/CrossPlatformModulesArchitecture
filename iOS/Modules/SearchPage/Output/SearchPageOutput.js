'use strict';

var SearchResults = require('../../SearchResults/SearchResults');

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
