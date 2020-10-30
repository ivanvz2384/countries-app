import React from 'react'
import { Link } from 'react-router-dom'

const CountryListItem = ({ name }) => (
    <div>
        <h4 className="list-item__title">{ name }</h4>
    </div>
)

export default CountryListItem