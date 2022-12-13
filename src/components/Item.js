import PropTypes from 'prop-types'

function Item({movie, year}){
    return(
        <>
        <li>
            {movie} - {year}
        </li>
        </>
    )   
}

Item.propsTypes = {
    movie: PropTypes.string.isRequired,
    year: PropTypes.number,
}

Item.defaultProps = {
    movie: "Movie not found",
    year: 0,
}

export default Item