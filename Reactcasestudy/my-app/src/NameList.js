import React from 'react';

function NameList(){
    const names=['Devika','Bhargavi','Harshi','Vyshu']
    const nameList = names.map(name=><h3>{name}</h3>)
    const Product = [{id:1,name:'Mobile',rate:2000},
                      {id:2,name:'TV',rate:4000},
                      {id:3,name:'Laptop',rate:6000}]
    const productList = Product.map(products =><h3>{products.id} {products.name}</h3>)
    return(
        <div>
            {nameList}
            {productList}
        </div>
    )
}
export default NameList