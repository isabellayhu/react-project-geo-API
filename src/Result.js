import * as React from "react";
import {
    Form,
    FloatingLabel
  } from 'react-bootstrap';

class ResultForm extends React.Component {
    render () {
        return (
            <>
                <Form.Label>Coordinates</Form.Label>
                <div className="row g-2">
                <div className="col-md">
                    <FloatingLabel controlId="floatingLongitude" label="Longitude">
                    <Form.Control type="number" placeholder="Longitude" value={this.props.longitude} disabled/>
                    </FloatingLabel>
                </div>
                <div className="col-md">
                    <FloatingLabel controlId="floatingLatitude" label="Latitude">
                    <Form.Control type="number" placeholder="Latitude" value={this.props.latitude} disabled/>
                    </FloatingLabel>
                </div>
                </div>
            </>
        )
    }
}

export default ResultForm;