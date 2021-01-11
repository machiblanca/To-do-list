
import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import { Filters } from '../redux/actionTypes'

function VisibilityFilter({ setFilter}) {
    return (
        Filters.map((filter, i) => (
            <button
             //   className={filter === activeFilter ? 'active' : ''} //Add parameter activefilter for use this className
               onClick={() => setFilter(filter)}
                key={i}
              >
                {filter}
            </button>
        ))
    )
}
//use this when use className and in 'null' replace for mapState
//const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(null, { setFilter })(VisibilityFilter)
