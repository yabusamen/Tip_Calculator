    function calculate_tip(check_amount, tip_percent) {
        var temp = parseFloat(tip_percent / 100);
        return parseFloat(check_amount * temp);
    }

    function tryParse(string, int) {

        for (i = 0; i < string.length; i++) {
            if (string[i] === "-") {
                return false;
            }
            if (string[i] == ".") {
                if (string.length - (i + 1) > int) {
                    return false;
                }
            }
        }
        if (isNaN(string)) {
            return false;
        }
        return true;
    }

    function button_preTax() {

        var check_amount = document.getElementById("check_amount").value;
        var sales_percent = document.getElementById("sales_tax_percent").value;

        document.getElementById("sales_tax_total").value = calculate_tip(check_amount, sales_percent).toFixed(2);

        var tip_percent = document.getElementById("tip_percent").value;

        if (tryParse(check_amount, 2) && tryParse(sales_percent, 2) && tryParse(tip_percent, 2)) {
            var tip = calculate_tip(check_amount, tip_percent);
            document.getElementById("tip_amount").value = tip.toFixed(2);
        }
        else {
            alert("invalid arguement");
        }
    }

    function button_total() {

        // get the amount of sales tax
        var check_amount = document.getElementById("check_amount").value;
        var sales_percent = document.getElementById("sales_tax_percent").value;
        var tip_percent = document.getElementById("tip_percent").value;

        // calculate the sales tax and update the sales tax total box in the form
        if (tryParse(check_amount, 2) && tryParse(sales_percent, 2) && tryParse(tip_percent, 2)) {
            var sales_tax = calculate_tip(check_amount, sales_percent).toFixed(2);
            document.getElementById("sales_tax_total").value = sales_tax;

            // calculate the total amount for the tip
            var tip = calculate_tip(+check_amount + +sales_tax, tip_percent);
            document.getElementById("tip_amount").value = parseFloat(tip).toFixed(2);
        }
        else {
            alert("invalid arguement");
        }
    }
