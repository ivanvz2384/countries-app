import React from 'react';
import { connect } from 'react-redux'
import { startSetCountry } from '../actions/countries';
import { updateHistory } from '../actions/history';
import { IMAGE_STYLE, IMAGE_SIZE_32} from '../utils/utils';

export class CountryHistoryListItem extends React.Component {

    onSelectCountry = () => {
        this.props.startSetCountry(this.props.history.alpha2Code);
        this.props.updateHistory({
            alpha2Code: this.props.history.alpha2Code,
            name: this.props.history.name
        })
    }

    render() {
        return (
            <div className="list-item" onClick={this.onSelectCountry}>
                <div>
                    <img alt={`Flag${this.props.history.alpha2Code}`} key={`Image${this.props.history.alpha2Code}`} src={`https://www.countryflags.io/${this.props.history.alpha2Code}/${IMAGE_STYLE}/${IMAGE_SIZE_32}.png`} />  
                    <p key={`Name${this.props.history.alpha2Code}`}>{this.props.history.name}</p>
                </div>
                <p key={`Count${this.props.history.alpha2Code}`}>{this.props.history.count}</p>
            </div>
        )
    }
}

const mapDispathToProps = (dispath) => ({
    startSetCountry: (alpha2Code) => dispath(startSetCountry(alpha2Code)),
    updateHistory: (history) => dispath(updateHistory(history))
})

export default connect(undefined, mapDispathToProps)(CountryHistoryListItem);