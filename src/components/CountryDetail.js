import React from 'react'
import { connect } from 'react-redux'
import {IMAGE_STYLE, IMAGE_SIZE_64} from '../utils/utils';

const CountryDetails = (props) => (
    <div>
        <div className="list-header">
            <div className="show-for-desktop">Selected country details</div>
        </div>
        <div className="list-item">
            <div className="list-item__flag">
                {
                    props.country.alpha2Code === undefined ? (
                        <img width="100" height="auto" alt="placeholder" key="no-image" src="/images/image_1024.png" />  
                    ) : (
                        <img width="100" height="auto" alt={`Flag${props.country.alpha2Code}`} key={props.country.alpha2Code} src={`https://www.countryflags.io/${props.country.alpha2Code}/${IMAGE_STYLE}/${IMAGE_SIZE_64}.png`} />  
                    )
                }
            </div>
            <div>
                <p className="page-header__title">Name:  <span> {props.country.name} </span> </p>
                <p className="page-header__title">Capital:  <span> {props.country.capital} </span> </p>
                <p className="page-header__title">Region:  <span> {props.country.region} </span> </p>
                <p className="page-header__title">Subregion:  <span> {props.country.subregion} </span> </p>
                <p className="page-header__title">Languages: </p>
                <ul>
                    {
                        props.country.languages === undefined || props.country.languages.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No languages</span>
                            </div>
                        ) : (
                            props.country.languages.map(function(language, index){
                                return <li key={ index }>{language}</li>;
                            })
                        )

                        
                    }
                </ul>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    country: state.country
});

export default connect(mapStateToProps)(CountryDetails);