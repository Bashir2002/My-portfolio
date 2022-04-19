var navToggle = document.querySelector(".menu");
var navigation = document.querySelector(".navlinks");
// var visibility = navigation.getAttribute("data-visible");

navToggle.addEventListener('click', (event) => {
    // var visibility = navigation.getAttribute("data-visible")
    // console.log(visibility);
    if (navigation.getAttribute("data-visible")=== "false"){
        navigation.setAttribute('data-visible', true )
    }else{
        navigation.setAttribute('data-visible', false )

    }
})
