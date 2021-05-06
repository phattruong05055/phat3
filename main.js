const navitems =[
    {
        date:"Mon",
    },
    {
        date:"Tue",
    },
    {
        date:"Wed",
    },
    {
        date:"Thu",
    },
    {
        date:"Fri",
    },
    {
        date:"Sat",
    },
    {
        date:"Sun",
    }

]
function loadinfo(item){
        var item = document.getElementById("header-item");
        item.innerHTML+=`
        <div id="item-con">
            <h5>`+items.date+`</h5>
            <img src="https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_rain_thunder.png" alt="">
            <h3>26℃</h3>
        </div>  
`
}

for(items of navitems){
    loadinfo();
}
function loadinfo2(item){
    var item = document.getElementById("header-item2");
    item.innerHTML+=`
    <div id="item-con">
        <h5>`+items.date+`</h5>
        <img src="https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_rain_thunder.png" alt="">
        <h3>26℃</h3>
    </div>  
`
}

for(items of navitems){
    loadinfo2();
}


