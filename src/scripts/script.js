const expense = $("#expense")
const income = $("#income")
const btn_submit = $("#submit")
const name_text = $("#name")
const amount_text =$("#amount")
expense.click(function(){
    const name_input = $("#input-name")
    const amount_input = $("#input-amount");
    
    
    btn_submit.show(200)
    if(name_input.val().trim() === "" || amount_input.val().trim() === ""){
        return
    }
    name_text.text(name_input.val())
    amount_text.append(": -"+amount_input.val()+" $ <br>")
    name_input.val("")
    amount_input.val("")
})
income.click(function(){
    const name_input = $("#input-name")
    const amount_input = $("#input-amount");
    btn_submit.show(200)
    if(name_input.val().trim() === "" || amount_input.val().trim() === ""){
        return
    }
    name_text.text(name_input.val())
    amount_text.append(": +"+amount_input.val()+" $ <br>")

    name_input.val("")
    amount_input.val("")
})
