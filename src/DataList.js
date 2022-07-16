import * as React from 'react'

export default class DataList extends React.Component {
    render() {
        const { places } = this.props

        const placeNames = Object.keys(places)
        const options = placeNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
        ))
        return <datalist id={this.props.list}>{options}</datalist>
    }
}