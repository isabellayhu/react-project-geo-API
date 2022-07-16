import * as React from "react";
import SearchForm from './Search'
import ResultForm from './Result';
import { Link } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude:"",
            latitude:""
        }
    }

    updateCoordinates = (longitude,latitude) => {
        this.setState({longitude,latitude})
    }
    render() {
        return (
            <>
                <main className="container">
                <SearchForm updateCoordinates={this.updateCoordinates}/>
                <ResultForm longitude={this.state.longitude} latitude={this.state.latitude}/>
                </main>
                <nav className="container">
                <Link to="/">Exit</Link>
                </nav>
            </>
        )
    }
  }

  export default Main;