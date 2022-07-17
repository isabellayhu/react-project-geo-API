import * as React from "react";
import {
    Table,
    Button
} from 'react-bootstrap';
import {
    House,
    BoxArrowLeft
} from 'react-bootstrap-icons';

class SavedPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places:[],
        }
    }
    
    async getPlaces(){
        const response = await fetch(`http://localhost:3004/places`)
        return response.json()
    }

    async componentDidMount() {
        const places = await this.getPlaces ()
        this.setState ({places})
    }
       
    render (){
        const rows = this.state.places.map((place) => (
            <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.placeName}</td>
                <td>{place.longitude}</td>
                <td>{place.latitude}</td>
            </tr>
        ))
        return(
            <>
                <main className="container">
                    <Table striped id={this.state.places}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Location</th>
                                <th>Longitude</th>
                                <th>Latitude</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </main>
                <nav className="container">
                    <Button variant="secondary" href="/main">
                        <BoxArrowLeft />
                    </Button>{' '}
                    <Button variant="secondary" href="/">
                        <House />
                    </Button>
                </nav>
            </>
        )
    }

}

export default SavedPlaces;