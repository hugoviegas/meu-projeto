function OtherList({ items }) {
    return (
        <>
            {items.length > 0 ? (
                items.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                <p>Notthing on list</p>
            )}
        </>
    )
}

export default OtherList