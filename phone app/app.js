const phones = [
    {
        brand: 'Samsung ',
        model: 'Galaxy A55',
        ram: 12,
        rom: 256,
        camera: '50 megapixel',
        price: 370.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone XS Max',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 202.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone 11',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 252.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg'
    },
    {
        brand: 'Samsung ',
        model: 'Galaxy S24 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg'
    },
    {
        brand: 'Sony ',
        model: 'Xperia 1V',
        ram: 12,
        rom: 256,
        camera: '48 megapixel',
        price: 858.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg'
    },
    {
        brand: 'Xiaomi ',
        model: 'Poco F5',
        ram: 8,
        rom: 256,
        camera: '48 megapixel',
        price: 379.99,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-2.jpg'
    },
    {
        brand: 'Google ',
        model: 'Pixel 8 Pro',
        ram: 12,
        rom: 512,
        camera: '50 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg'
    },
    {
        brand: 'Xiaomi ',
        model: 'Redmi Note 13 Pro+',
        ram: 16,
        rom: 512,
        camera: '108 megapixel',
        price: 329.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus-int.jpg'
    },
]
let div =document.querySelector('.products')
let button =document.querySelector('.button')

phones.map((item,index)=>{
div.innerHTML+=`
    <div class="rounded border card-width  p-2 ">
                    <div class=" text-center  p-2"><img src="${item.img}" class="card-img-width "
                            alt="no image">
                    </div>
                    <p class="mt-1 mb-2"> ${item.brand} ${item.model}</p>
                    <h4 class="mt-5"><sup>RS</sup> ${item.price}</h4>
                    <div class=" fw-lighter wrap1 d-flex align-items-center justify-content-between">
                        <div class="">
                            <p><strike class="strike1 mt-3">
                                    <sup class="strike2">RS</sup>
                                    <span class="strike2">8,000</span>
                                </strike>
                            </p>
                        </div>
                        <div><button type="button" onclick="addtocard(${index})" class="btn card-button-font-size btn-outline-success mb-2">Add To Card</button></div>
                    </div>
                </div>
`
});
button.addEventListener('click',()=>{
window.location='index-2.html'    
})