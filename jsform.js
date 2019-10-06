window.addEventListener("load", addListeners)

function addListeners() {
    // event handler for the adult jerseys
    // num, price, total
    document.getElementById("jersey_adult_num").addEventListener("change",function() {
        var num = document.getElementById("jersey_adult_num").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("jersey_adult_num").value = 0
            document.getElementById("jersey_adult_total").value = "0.00"
        }
        else {
            var price = document.getElementById("jersey_adult_price").value 
            var total = num * price
            document.getElementById("jersey_adult_num").value = num
            document.getElementById("jersey_adult_total").value = total   
        }
        
        computeTotal()
    })
    
    // event handler for the child adult jerseys
    // num, price, total
    document.getElementById("jersey_child_num").addEventListener("change",function() {
        var num = document.getElementById("jersey_adult_num").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("jersey_child_num").value = 0
            document.getElementById("jersey_child_total").value = "0.00"
        }
        else {
            var price = document.getElementById("jersey_child_price").value 
            var total = num * price
            document.getElementById("jersey_child_num").value = num
            document.getElementById("jersey_child_total").value = total   
        }
        
        computeTotal()
    })
    
    // event handler for the adult shirts
    // num, price, total
    document.getElementById("adult_shirt").addEventListener("change",function() {
        var num = document.getElementById("adult_shirt").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("adult_shirt").value = 0
            document.getElementById("adult_shirt_total").value = "0.00"
        }
        else {
            var price = document.getElementById("adult_shirt_price").value 
            var total = num * price
            document.getElementById("adult_shirt").value = num
            document.getElementById("adult_shirt_total").value = total   
        }
        
        computeTotal()
    })
    
    // event handler for the child shirts
    // num, price, total
    document.getElementById("child_shirt").addEventListener("change",function() {
        var num = document.getElementById("child_shirt").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("child_shirt").value = 0
            document.getElementById("child_shirt_total").value = "0.00"
        }
        else {
            var price = document.getElementById("child_shirt_price").value 
            var total = num * price
            document.getElementById("child_shirt").value = num
            document.getElementById("child_shirt_total").value = total   
        }
        
        computeTotal()
    })
    
    // event handler for the adult hats
    // num, price, total
    document.getElementById("adult_hat").addEventListener("change",function() {
        var num = document.getElementById("adult_hat").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("adult_hat").value = 0
            document.getElementById("adult_hat_total").value = "0.00"
        }
        else {
            var price = document.getElementById("adult_hat_price").value 
            var total = num * price
            document.getElementById("adult_hat").value = num
            document.getElementById("adult_hat_total").value = total   
        }
        
        computeTotal()
    })
    
    // event handler for the child hats
    // num, price, total
    document.getElementById("child_hat").addEventListener("change",function() {
        var num = document.getElementById("child_hat").value 
        num = parseInt(num)
        if(isNaN(num)) {
            document.getElementById("child_hat").value = 0
            document.getElementById("child_hat_total").value = "0.00"
        }
        else {
            var price = document.getElementById("child_hat_price").value 
            var total = num * price
            document.getElementById("child_hat").value = num
            document.getElementById("child_hat_total").value = total   
        }
        
        computeTotal()
    })
}

function  computeTotal() {
    var subtotal = 
        parseFloat(document.getElementById("jersey_adult_total").value) +
        parseFloat(document.getElementById("jersey_child_total").value) +
        parseFloat(document.getElementById("adult_shirt_total").value) +
        parseFloat(document.getElementById("child_shirt_total").value) +
        parseFloat(document.getElementById("adult_hat_total").value) +
        parseFloat(document.getElementById("child_hat_total").value)
    var tax = subtotal * .07
    tax = Math.round(tax * 100)/100
    var total = subtotal + tax
    
    document.getElementById("sales_tax").value = tax.toFixed(2)
    document.getElementById("total").value = total.toFixed(2)
}

function updateCost(numId) {
    var priceId = numId.replace("num", "price")
    var totalId = numId.replace("num", "total")

    var num = document.getElementById(numId).value 
    num = parseInt(num)
    if(isNaN(num)) {
        document.getElementById(numId).value = 0
        document.getElementById(totalId).value = "0.00"
    }
    else {
        var price = document.getElementById(priceId).value 
        var total = num * price
        document.getElementById(qtyId).value = num
        document.getElementById(totalId).value = total   
    }
        
    computeTotal()
}