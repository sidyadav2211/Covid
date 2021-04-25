
new Vue({
    el:'#app',
    data:{
       search:'',
        allCount:[],
        global:{}
    },
    methods:{
        fetchCovid(){
            // if(this.search){
            //      this.search.filter(function(val){
            //         if(val=this.allCount.Country){
            //             return val
            //             console.log('Yes')
            //         }
            //         else{
            //             console.log('not')
            //         }
            //     })
               
            // }else{
            //     console.log('No')
            // }
            // if(this.search){
            //     this.allCount =this.allCount.filter((country)=>{
            //         country.Country = this.search;
            //         console.log('Print')
            //     })
            // }else{
            //     return this.allCount
            // }
            // this.allCount 
            // console.log('Click')
        }
    },
  
     mounted(){
        axios.get("https://api.covid19api.com/summary")
        .then(res=>{
             this.global = res.data.Global;
             this.allCount =res.data.Countries
            
        })
        .catch(err=>{
            console.log("Error:"+err)
        })
    }
})