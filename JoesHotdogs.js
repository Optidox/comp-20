function hotdogCalc() {
    const hotdogs = prompt("How many hotdogs do you want?");
    const frenchfries = prompt("How many french fries do you want?");
    const drinks = prompt("How many drinks do you want?");
    const subtotal = 3.75 * hotdogs + 2.00 * frenchfries + 1.50 * drinks;
    const discount = (subtotal >= 20 ? .1 * subtotal : 0);
    const tax = .0625 * (subtotal - discount);
    const total = subtotal - discount + tax;

    document.write( 
                    `<style>
                        #col1 { 
                            display: inline-block;
                            padding: 16px;
                            color: blue;
                            font-size: 24px
                        }
                        #col2 {
                            display: inline-block;
                            padding: 16px;
                            color: red;
                            font-size: 24px
                        }
                    </style>
                    <div id=col1>
                        <p>Hotdogs:&nbsp;</p> 
                        <p>French Fries:&nbsp;</p>
                        <p>Drinks:&nbsp;</p>
                        <p>Subtotal:&nbsp;</p>
                        <p>Discount:&nbsp;</p>
                        <p>Tax:&nbsp;</p>
                        <p>Total:&nbsp;</p>
                    </div>
                    <div id=col2>
                        <p>${hotdogs}</p>
                        <p>${frenchfries}</p>
                        <p>${drinks}</p>
                        <p>$${subtotal}</p>
                        <p>$${discount.toFixed(2)}</p>
                        <p>$${tax.toFixed(2)}</p>
                        <p>$${total.toFixed(2)}</p>
                    </div>`);
    document.close();
}