import * as React from "react";
import {
    Button,
    Form,
    InputGroup,
    FormControl,
  } from 'react-bootstrap';
  import {
    Search
  } from 'react-bootstrap-icons';
  import DataList from './DataList'

const token = "pk.eyJ1IjoiaXNhYmVsbGEtaHUiLCJhIjoiY2wzZnFiOHlhMDJ3YzNjbGp4NWEzMWtndiJ9.kVgtyWuoNZESQuCvX0jkIA"

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event) {
        const searchText = event.target.value

        this.setState({ isLoading: true })

        const json = await this.fetchSuggestions(searchText)
        const newPlaces = {}
        json.features.forEach( (val) => {
            const key = val.place_name;
            newPlaces[key] = val;
        });

        this.setState({ isLoading: false, places: newPlaces, searchText })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const newplace = this.state.places[this.state.searchText];
        if (newplace){
            this.props.updatePlace(this.state.searchText,newplace.geometry.coordinates[0],newplace.geometry.coordinates[1])
        }
    }

    async fetchSuggestions(searchText) {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${token}`)
        return response.json()
    }

    render () {
        return (
            <Form className="mb-3" id="searchForm" onSubmit={this.handleSubmit}>
                <Form.Label>Location</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl list="suggestions" placeholder="Search" onChange={this.handleChange} />
                    <DataList list={"suggestions"} places={this.state.places} />
                    <Button variant='outline-secondary' type="submit">
                        <Search />
                    </Button>
                </InputGroup>
            </Form>
        )
    }
}

export default SearchForm;