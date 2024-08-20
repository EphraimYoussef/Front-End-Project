export async function getSingleProductData(ProductID) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${ProductID}`);
        const product = await response.json();
        return product;
    } 
    catch (error) {
        // console.error(error);
    }
}