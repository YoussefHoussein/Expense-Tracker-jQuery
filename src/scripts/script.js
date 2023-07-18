const expense = $("#expense")
const btn_submit = $("#submit")

function addExpense(name,amount){
    return `<table>
    <td class="name">${name}</td>
    <td class="amount">: ${amount}</td>
  </table>`
}



expense.click(function(){
    const name_input = $("#input-name")
    const amount_input = $("#input-amount");
    const exp_table = $("#expenses")
    btn_submit.show(200)
    
    if(name_input.val().trim() === "" || amount_input.val().trim() === ""){
        return
    }
    
    
    const table = $(addExpense(name_input.val(),amount_input.val()))
    
    exp_table.append(table)
    
    
    
    
    name_input.val("")
    amount_input.val("")
})

