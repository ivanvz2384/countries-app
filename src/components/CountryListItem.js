import React from 'react';
import { connect } from 'react-redux'
import { startSetCountry } from '../actions/countries';
import { updateHistory } from '../actions/history';

export class CountryListItem extends React.Component {

    onSelectCountry = () => {
        this.props.startSetCountry(this.props.country.alpha2Code);
        this.props.updateHistory({
            alpha2Code: this.props.country.alpha2Code,
            name: this.props.country.name
        })
    }

    render() {
        return (
            <div className="list-item-country" onClick={this.onSelectCountry}>
                <p className="list-item__title">{this.props.country.name}</p>
            </div>
        )
    }
}

const mapDispathToProps = (dispath) => ({
    startSetCountry: (alpha2Code) => dispath(startSetCountry(alpha2Code)),
    updateHistory: (history) => dispath(updateHistory(history))
})

export default connect(undefined, mapDispathToProps)(CountryListItem)