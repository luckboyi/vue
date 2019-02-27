const btn = document.getElementById('btn')
function throttle(fn,wait){
    var timer;
    return function(...args){
        if(!timer){
            timer = setTimeout(() => {
                timer=null
            }, wait);
            return fn.apply(this,args)
        }
    }
}
btn.onclick = throttle( function(){
    console.log('btn clicked')
},3000)