import Item from './Item'

function Lists() {
    return (
        <>
        <h1>Lista</h1>
        <ul>
            <Item movie="Star Wars" year={1990}/>
            <Item movie="Avangers" year={2005}/>
            <Item movie="Polar Express" year={2009}/>
            <Item movie="Fast & Furious" />
            <Item year={2012}/>
        </ul>
        </>
    )
}

export default Lists