var data_div = document.getElementById( 'data' );
function appendCart ( el )
{
    let div = document.createElement( 'div' );
    let img = document.createElement( 'img' );
    img.src = el.img;
    let brand = document.createElement( 'p' );
    brand.innerHTML = el.brand;
    let price = document.createElement( 'p' );
    price.innerHTML = el.price;
    div.append( img, brand, price );
    data_div.append( div );
}
function showCart ()
{
    let data = JSON.parse( localStorage.getItem( 'cart' ) );
    data_div.innerHTML = null;
    data.forEach( el =>
    {
        appendCart( el );
    } );
}
showCart();