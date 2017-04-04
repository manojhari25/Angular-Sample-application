/**
 * Created by Manoj on 2/22/2017.
 */
angular.module("myfirst")
       .service('myservice',function () {
           this.getlist=[{
               ID:"425",
               NAME:"Manojkumar",
               BIRTHDATE:"july/18/1993",
               AGE:"23"
           },
               {
                   ID:"443",
                   NAME:"Vinay",
                   BIRTHDATE:"05/25/1993",
                   AGE:"23"
               }]


           this.getobj=function (x,y,z) {
               x.push(y);
               z(x);
           }

           this.dell=function (addlist,id,callback){
        var obj=addlist.filter(function (i) {
            return i.ID!=id;
        });
              callback(obj);

           }




       });