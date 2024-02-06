let secretvalue = (function() {
    let myvalue = 1000;

    return {
        getter: function(){
            console.log(myvalue);
        },
        setter: function(value){
                myvalue = value;
            
        }
    };

})();
secretvalue.getter(); // 1000
secretvalue.setter(256789);
secretvalue.getter(); //256789

