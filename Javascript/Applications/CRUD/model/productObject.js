var obj = {
    id : 0,
    productList : [],

    addProduct : function(name,price,desc) {
        this.id++;
        var productObj = new Product(this.id,name,price,desc);
        this.productList.push(productObj);
        console.log(this.productList);
    },

    toggleProduct : function(id){
        var toggle = this.productList.filter(function(obj_1){
            return obj_1.id == id;
        })
        toggle[0].selected = !toggle[0].selected;
        console.log(toggle);
    },

    deleteProduct:  function(){
        this.productList = this.productList.filter(function(obj_2){
            return obj_2.selected == false;
        })
    }

}