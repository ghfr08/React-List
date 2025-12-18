function List(){
    const fruits = [
        {id: 1, name: "apple", color: "red"},
        {id: 2, name: "tomato", color: "orange"},
        {id: 3, name: "orange", color: "light orange"},
        {id: 4, name: "durian", color: "yellow"},
    ]

    fruits.sort((a, b) => a.name.localeCompare(b.name)) // alphabetical orders
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // reverse-alphabetical orders

    const listItems = fruits.map(fruit =>
    <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.color}</li>
    )

    return (
        <ul>{listItems}</ul>
    )
}

export default List