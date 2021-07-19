var data_div = document.getElementById( 'data' );

const jewelleryImg = [
    {
        brand: 'Anjali',
        price: 8000,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg',
    },
    {
        brand: 'SecnoGold',
        price: 13000,
        img: 'https://m.media-amazon.com/images/S/aplus-media/vc/bd24f0bb-1f63-44ae-a8fe-42939fd33d1a.__CR0,303,2000,1237_PT0_SX970_V1___.jpg',
    },
    {
        brand: 'PcChandra',
        price: 18000,
        img: 'https://5.imimg.com/data5/MI/BX/BB/SELLER-11950276/bridal-jewellery-set-500x500.jpg',
    },
    {
        brand: 'SecnoGold',
        price: 20000,
        img: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/13/w900X450/Gold_Jewellery_EPS.jpg',
    },
];
function storeProduct ()
{

    let arr;
    arr = localStorage.getItem( 'jewelleryImg' );
    if ( arr == null )
    {
        arr = [];
    } else
    {
        arr = JSON.parse( localStorage.getItem( 'jewelleryImg' ) );
    }
    arr.push( jewelleryImg );
    localStorage.setItem( 'jewelleryImg', JSON.stringify( arr ) );
    showJewellery();
}


function appendJewellery ( el )
{

    let div = document.createElement( 'div' );
    let img = document.createElement( 'img' );
    img.src = el.img;
    let brand = document.createElement( 'p' );
    brand.innerHTML = el.brand;
    let price = document.createElement( 'p' );
    price.innerHTML = el.price;
    let btn = document.createElement( 'button' );
    btn.textContent = 'Add to Cart';
    btn.addEventListener( 'click', function ()
    {
        // console.log( el );
        addtoCart( el );
    } )
    btn.style.display = "block";
    div.append( img, brand, price, btn );
    data_div.append( div )
}

var data = JSON.parse( localStorage.getItem( 'jewelleryImg' ) );
function showJewellery ( j )
{
    data_div.innerHTML = null;
    j.forEach( function ( el )
    {
        appendJewellery( el );
    } );
}
showJewellery( data );

function addtoCart ( el )
{
    console.log( el );
    let arr;
    arr = localStorage.getItem( 'cart' );
    if ( arr == null )
    {
        arr = [];
    } else
    {
        arr = JSON.parse( localStorage.getItem( 'cart' ) );
    }
    arr.push( el );
    localStorage.setItem( 'cart', JSON.stringify( arr ) );
}

function showCart ()
{
    window.location.href = 'cart.html';
}

function sortLH ()
{
    let jewellery = JSON.parse( localStorage.getItem( 'jewelleryImg' ) )
    jewellery.sort( function ( a, b )
    {
        // console.log( a.price );
        // console.log( b.price );
        return a.price - b.price;
    } );
    // console.log( jewellery );
    showJewellery( jewellery )
}
function sortHL ()
{
    let jewellery = JSON.parse( localStorage.getItem( 'jewelleryImg' ) )
    jewellery.sort( function ( a, b )
    {
        // console.log( a.price );
        // console.log( b.price );
        return b.price - a.price;
    } );
    // console.log( jewellery );
    showJewellery( jewellery )
}