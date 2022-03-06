//welcome message
var today = new Date(),
    hourNow = today.getHours(),
    salutation;
    if (hourNow > 18){
        salutation = 'Good evening';
    }else if (hourNow > 12){
        salutation = "Good afternoon";
    } else if (hourNow > 0){
        salutation = "Good morning";
    } else{
        salutation = "Welcome";
    }
    
var user = ', fellow 4K Blu-Ray enthusiast',
    greeting = salutation + user + '! You will find some basic information on 4K Blu-Ray discs and releases here.',
    greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//GOT price
var gotPrice = 161.49,
    gotDiscount = 0.06,
    gotSalePrice = gotPrice - (gotPrice * gotDiscount),
    gotPriceEl = document.getElementById('got-price'),
    gotSalePriceEl = document.getElementById('got-sale-price'),
    gotDiscountEl = document.getElementById('got-discount');

gotPriceEl.textContent = gotPrice.toFixed(2);
gotSalePriceEl.textContent = gotSalePrice.toFixed(2),
gotDiscountEl.textContent = gotDiscount * 100;

//JL price
var jlPrice = 29.99,
    jlDiscount = 0.24,
    jlSalePrice = jlPrice - (jlPrice * jlDiscount),
    jlPriceEl = document.getElementById('jl-price'),
    jlSalePriceEl = document.getElementById('jl-sale-price'),
    jlDiscountEl = document.getElementById('jl-discount');

jlPriceEl.textContent = jlPrice.toFixed(2);
jlSalePriceEl.textContent = jlSalePrice.toFixed(2)
jlDiscountEl.textContent = jlDiscount * 100;