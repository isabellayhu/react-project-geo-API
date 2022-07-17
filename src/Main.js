import * as React from "react";
import SearchForm from './Search'
import ResultForm from './Result';
import { Button } from 'react-bootstrap';
import {
    House,
    FileEarmarkText
} from 'react-bootstrap-icons';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude:"",
            latitude:"",
            placeName:""
        }
    }

    updatePlace = (placeName,longitude,latitude) => {
        this.setState({placeName,longitude,latitude})
    }

    savePlace = async()=>{
        const response = await fetch(`http://localhost:3004/places`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                placeName: this.state.placeName,
                longitude: this.state.longitude,
                latitude: this.state.latitude
            })
        })
        return response.json()
    }

    render() {
        return (
            <>
                <main className="container">
                <SearchForm updatePlace={this.updatePlace}/>
                <ResultForm savePlace={this.savePlace} longitude={this.state.longitude} latitude={this.state.latitude}/>
                </main>
                <nav className="container">
                    <Button variant="secondary" href="/">
                        <House />
                    </Button>{' '}
                    <Button variant="secondary" href="/savedPlaces">
                        <FileEarmarkText />
                    </Button>
                </nav>
            </>
        )
    }
  }

  export default Main;