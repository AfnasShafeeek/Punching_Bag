new Vue({
    el:"#punchingbag",
    
    data: {
    bag_health :100,
    ended :false,
    },
    
    methods :{
    
    punch:function(){
    this.bag_health -=10;
    
    if(this.bag_health <=0)
    {
    this.ended =true
    }
    
    },
    
    restart : function(){
    this.bag_health =100;
    this.ended =false;
    
    }
    }
    
    });