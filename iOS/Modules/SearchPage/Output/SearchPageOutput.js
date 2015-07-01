'use strict';

var SearchResults = require('../../SearchResults/SearchResults');

class SearchPageOutput {
  static goToNextModule(component, listing) {
    this.props.navigator.push({
      title: 'Results',
      component: SearchResults,
      passProps: {listings: listings}
    });
  }
}
