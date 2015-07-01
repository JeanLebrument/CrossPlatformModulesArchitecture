'use strict';

var React = require('react-native');
var SearchResults = require('../../SearchResults/SearchResults');
var SearchPageAction = require('../../../../Core/Modules/SearchPage/Action/SearchPageAction');
var SearchPageStore = require('../../../../Core/Modules/SearchPage/Store/SearchPageStore');
var SearchPageOutput = require('../Output/SearchPageOutput');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: 'london',
      isLoading: false,
      resultError: ''
    };
  }

  setState(obj) {
    console.log('setState before');
    super.setState(obj);
    console.log('setState after');
  }

  resultsFounds() {
    console.log('resultsFounds before');
    var results = SearchPageStore.getResults();
    var resultError = SearchPageStore.getResultError();
    var formatedLocation = results ? results.formatedLocation : '';

    console.log('resultsFounds before SET STATE');

    // console.log('Thread.currentThread().getId(): ' + Thread.currentThread().getId());

    this.setState({
      searchString: formatedLocation,
      isLoading: false,
      resultError: ''
    });

    //
    // if (results && results.listings) {
    //   SearchPageOutput.goToNextModule(this, results.listings)
    // }
    console.log('resultsFounds after');
  }

  componentDidMount() {
    console.log('componentDidMount');
    SearchPageStore.addChangeListener(this.resultsFounds);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    SearchPageStore.removeChangeListener(this.resultsFounds);
  }

  onSearchPressed() {
    if (this.state.isLoading == false) {
      this.setState({isLoading: true});
      SearchPageAction.searchResultsForLocation(this.state.searchString);
    }
  }

  onLocationPressed() {
    if (this.state.isLoading == false) {
      this.setState({isLoading: true});
      SearchPageAction.searchResultsForCurrentLocation();
    }
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text });
  }

  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/>);

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}/>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
            onPress={this.onLocationPressed.bind(this)}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('image!house')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.resultError}</Text>
      </View>
    );
  }
}

module.exports = SearchPage;
