function navOpen() {
  var menu = document.querySelector("#menu")
  var box = document.querySelector("#nav-mbl")
  var close = document.querySelector("#nav-mbl i")
  var check = true

  menu.addEventListener("click", function () {
    if (check == true) {
      box.style.right = "15px"
      check = false
    }

    else {
      box.style.right = "-300px"
      check = true
    }

  })

  close.addEventListener("click", function () {
    box.style.right = "-300px"
    check = true

  })

}
navOpen()

function homeAnimation() {
  gsap.from('#home span', {
    y: 50,
    duration: 1.5,
    delay: 0.5,
    opacity: 0,
    ease: "all",
    stagger: 0.3
  })
}
homeAnimation()

function about() {
  var frame = document.querySelector(".frame");

  frame.addEventListener("mousemove", function (dets) {
    gsap.to(".frame span", {
      color: "orange",
      duration: .1,
      y: "-5vw"
    })
  })

  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(".frame span", {
      color: "white",
      duration: .1,
      y: 0
    })
  })
}
about()

function SendMail() {
  var params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value
  }
  emailjs.send("service_n5epj5t","template_h3cm58u",params).then(function (res) {
      alert("Success");
  })
}