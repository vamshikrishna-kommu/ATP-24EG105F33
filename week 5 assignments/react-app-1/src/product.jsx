function Product(props){ //{props:{productObj}:{}}
const {productObj}=props;
//state
//return a react element
return(
<div className="shadow-2xl">
<h2 className="text-2xl text-blue-400">{productObj.title}</h2>
<p className="font-bold">{productObj.price}</p>
<p className="font-mono">{productObj.description}</p>
</div>
)
}

export default Product;