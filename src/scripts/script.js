const expense = $("#expense")
const btn_calculate = $("#calculate")
const total =$("#exp_total")
let count_exp =0
let display_value =0
function addExpense(name,amount){
    return `<table>
    <td><span class="remove">&#128465</span></td>
    <td class="name">${name}: </td>
    <td class="amount">${amount}</td>
  </table>`
}



expense.click(function(){
    const name_input = $("#input-name")
    const amount_input = $("#input-amount");
    const exp_table = $("#expenses")
    btn_calculate.show(200)
    
    if(name_input.val().trim() === "" || amount_input.val().trim() === ""){
        return
    }
    
    
    const table = $(addExpense(name_input.val(),amount_input.val()))
    
    
    exp_table.append(table)
     
    let amount_val = parseFloat(amount_input.val())
    count_exp += amount_val
    
    table.find(".remove").click(function(){
        console.log(table.find(".amount").text().trim())
        changeTotal(table.find(".amount").text().trim())
        table.remove()
    })
    
    
    
    
    name_input.val("")
    amount_input.val("")
})
btn_calculate.click(function(){
    
    display_value+=count_exp
   
     total.text(display_value+" $")
     count_exp=0
 })
 function changeTotal(value){
    
    display_value -=parseInt(value)
    total.text(display_value+" $")

 }

