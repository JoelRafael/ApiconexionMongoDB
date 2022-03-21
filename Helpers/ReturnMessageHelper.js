
var ReturnMessgeHelper = () =>{}

ReturnMessgeHelper.MessageHttp = (estado, message, rows)=>{
 let Message={
     Error:estado,
     Message:message,
     Data:rows
    }
return Message;
}


   module.exports = ReturnMessgeHelper;
