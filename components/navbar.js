const navbar= ()=>{
    return ` <div id = "navbar">
    <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqBXkNSYJ24k0kBJdiiyVsyA_Qv8vizCYrQ&usqp=CAU" alt="Swiggy"></a>
    <div class = "searchbox">
        <input type="text" placeholder="Search" id = "searchvalue">
        <div id = "searchitems"></div>
    </div>
    <div><a href="recpie.html">Recpie of the Day</a></div>
    <div><a href="recpies.html">Latest Recpies</a></div>
    <div>Sign In</div>
    <div>Cart</div>
    </div>`
}

export default navbar