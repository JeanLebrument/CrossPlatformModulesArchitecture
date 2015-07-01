'use strict';

var PropertyView = require('../../PropertyView/PropertyView');

class SearchResultOutput {
  static goToNextModule(component, property) {
    component.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: {property: property}
    });
  }
}

module.exports = SearchResultOutput;
