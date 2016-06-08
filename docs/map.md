##**Map**

maps `type` to mongo db `collection` name


###**Definition**
``` javascript
var map = { 
        Period: "periods",
        UserWorkplan: "user-workplans" 
}
``` 



###**Usage**

```
    var map = require('workplan-models').map;
    
    //prints 'periods'
    console.log(map.Period)
```