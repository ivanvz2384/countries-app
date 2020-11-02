import React from 'react';
import { connect } from 'react-redux';
import selectedHistory from '../selectors/history';
import CountryHistoryListItem from '../components/CountryHistoryListItem';

export const CountryHistoryList = (props) => (
    <div>
        <div className="list-header">
            <div className="show-for-mobile">History</div>
            <div className="show-for-desktop">Country</div>
            <div className="show-for-desktop">Count</div>
        </div>
        <div className="list-body">
            {
                props.history.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No history</span>
                    </div>
                ) : (
                    props.history.map((history) => {
                        return <CountryHistoryListItem key={history.alpha2Code} history={ history }/>
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    history: selectedHistory(state.history, state.filters)
})

export default connect(mapStateToProps, undefined)(CountryHistoryList) 

