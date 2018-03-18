new Vue({
    el:'#myTodoApp',
    data:{
        inputText:'',
        editIndex:-1,
        myList:[
            {
                text:'吃饭',
                completed:false
            }, {
                text:'睡觉',
                completed:false
            }, {
                text:'打豆豆',
                completed:false
            }
        ]
    },
    methods:{
        add:function(){
            if(!this.inputText)return;
            this.myList.push({
                text:this.inputText,
                completed:false
            });
            this.inputText='';
        },
        del:function(i){
            this.myList.splice(i,1)
        },
        checkCompleted:function(){
            for(var i=0;i<this.myList.length;i++){
                if(this.myList[i].completed)return true;
            }
            return false;
        },
        chooseAll:function(){
            for(var i=0;i<this.myList.length;i++){
                if(!this.myList[i].completed){
                    for(var j=0;j<this.myList.length;j++){
                        this.myList[j].completed=true;
                    }
                    return;
                }
            }
            for(var j=0;j<this.myList.length;j++){
                this.myList[j].completed=false;
            }
        },
        editItem:function(i){
            this.editIndex=i;
        },
        editCompleted:function(){
            this.editIndex=-1;
        },
        delCompleted:function(){
            for(var i=0;i<this.myList.length;i++){
                if(!this.myList[i].completed){

                }else{
                    this.myList.splice(i,1);
                }
            }
        }

    }
});