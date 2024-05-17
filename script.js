if(window.innerWidth < 700)
{
   $(".mobile-bar").add()
   $(".navbar-role").remove()
   console.log("Activated")
}
else {
   $(".mobile-bar").remove()
   $(".navbar-role").add()
}


// scrolled navbar
// window.addEventListener("scroll", function () {
//    let navbar = document.getElementsByClassName("navbar-role")
//    if(this.window.scrollY)
//    {
//       navbar.classList.add(".navbar-scrolled")
//    }
//    else {
//       navbar.classList.remove(".navbar-scrolled"); // Hapus kelas jika navbar kembali ke posisi awal
//     }

// })
