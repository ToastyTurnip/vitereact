function ProductRow ( {product} ) {
    const name = product.stocked ? product.name : <span style={{color:"red"}}>{product.name}</span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductCategoryRow ( {category_name} ) {
    return (
        <tr>
            <th>
                {category_name}
            </th>
        </tr>
    )
}

function ProductTable ( {data} ) {
    var categories = [];
    var rows = [];
    for (let i = 0; i < data.length; i++) {
        if (!categories.includes(data[i].category))
            categories.push(data[i].category)
    }

    categories.forEach(categ => {
        rows.push(<ProductCategoryRow category_name={categ} key={categ}/>)
        data.forEach(entry => {
            if (entry.category === categ) {
                rows.push(<ProductRow product={entry} key={entry.name} />)
            }
        });
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

// function SearchBar() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//         <label>
//           <input type="checkbox" />
//           {' '}
//           Only show products in stock
//         </label>
//       </form>
//     );
//   }

//   function FilterableProductTable() {
//     const [filterText, setFilterText] = useState('');
//     const [inStockOnly, setInStockOnly] = useState(false);

//     return (
//         <div>
//         <SearchBar 
//             filterText={filterText} 
//             inStockOnly={inStockOnly} 
//             onFilterTextChange={setFilterText} 
//             onInStockOnlyChange={setInStockOnly} />
//         <ProductTable 
//             products={products} 
//             filterText={filterText}
//             inStockOnly={inStockOnly} />
//         </div>
//     );
//   }


// export default function ProductTable ( {tabledata} ) {
//     var categories = {};
//     for (let i = 0; i < tabledata.length; i++) {
//         if (categories.keys.includes(tabledata[i].category)) {
//             categories[tabledata[i].category] = [tabledata[i]] 
//         } else {
//             categories[tabledata[i]] = [...categories[tabledata[i]], tabledata[i]]
//         }
//     }

//     function _subtable(categ) {
//         const rows = categories[categ].map((product) => {return (<ProductRow product={product} />)})
//         return (
//             <table>
//                 <ProductCategoryRow category_name={categ} />
//                 {rows}
//             </table>
//         )
//     }
    
//     const fulltable = [];
//     for (let i = 0; i < categories.keys.length; i++) {
//         fulltable[i] = _subtable(categories.keys[i]);
//     }

//     return (
//         <table>
//             {fulltable}
//         </table>
//     )
// }