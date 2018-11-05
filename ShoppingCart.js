var grid = document.getElementById("griditems");
var row1 = document.getElementById("row-table");
var l = 0;
//  function mouseover() {
//  var test = document.getElementById("b-plus-minus-del");
// test.style.display='inline';
// test.style.visibility= 'visible';
//   test.style.animation='bounceInUp 2s ease-in';
//  }
//  function mouseout() {
//      var test = document.getElementById("b-plus-minus-del");
// //    test.style.display='none';
//  }
// function mouseover1() {

//     var test = document.getElementById("b-plus-minus-del1");
//     test.style.display='block';
//     test.style.visibility= 'visible';
//     test.style.opacity = 1;}

//     function mouseout1() {

//         var test = document.getElementById("b-plus-minus-del1");
//        test.style.display='none';
//     }
//     function mouseover2() {

//         var test = document.getElementById("b-plus-minus-del2");
//         test.style.display='block';
//         test.style.visibility= 'visible';
//         test.style.opacity = 1;}

//         function mouseout2() {

//             var test = document.getElementById("b-plus-minus-del2");
//            test.style.display='none';
//         }
var prixp1 = document.getElementById("price1").innerHTML;
var prixp2 = document.getElementById("price2").innerHTML;
var prixp3 = document.getElementById("price3").innerHTML;
var prixp4 = document.getElementById("price4").innerHTML;
var prixp5 = document.getElementById("price5").innerHTML;
var prixp6 = document.getElementById("price6").innerHTML;
document.getElementById("UPValue").innerHTML = (parseFloat(prixp1) + parseFloat(prixp2) + parseFloat(prixp3) + parseFloat(prixp4) + parseFloat(prixp5) + parseFloat(prixp6)).toFixed(3)
var prix1 = document.getElementById("UPValue").innerHTML
function addbutton1() {

    var test = document.getElementById("productnumber1")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f
    document.getElementById("price1").innerHTML = parseFloat(prixp1 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price1").innerHTML) + parseFloat(prix1) - parseFloat(prixp1)).toFixed(3);
}

function addbutton2() {
    var test = document.getElementById("productnumber2")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f;
    document.getElementById("price2").innerHTML = parseFloat(prixp2 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price2").innerHTML) + parseFloat(prix1) - parseFloat(prixp2)).toFixed(3);

}
function addbutton3() {
    var test = document.getElementById("productnumber3")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f;
    document.getElementById("price3").innerHTML = parseFloat(prixp3 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price3").innerHTML) + parseFloat(prix1) - parseFloat(prixp3)).toFixed(3);

}
function addbutton4() {
    var test = document.getElementById("productnumber4")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f;
    document.getElementById("price4").innerHTML = parseFloat(prixp4 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price4").innerHTML) + parseFloat(prix1) - parseFloat(prixp4)).toFixed(3);

}
function addbutton5() {
    var test = document.getElementById("productnumber5")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f;
    document.getElementById("price5").innerHTML = parseFloat(prixp5 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price5").innerHTML) + parseFloat(prix1) - parseFloat(prixp5)).toFixed(3);
}
function addbutton6() {
    var test = document.getElementById("productnumber6")
    var m = test.innerText.split('').splice(1, 2);
    var f = +m + 1;
    var v = test.innerText.split('').splice(0, 1);
    test.innerText = v + f;
    document.getElementById("price6").innerHTML = parseFloat(prixp6 * f);
    document.getElementById("UPValue").innerHTML = (parseFloat(document.getElementById("price6").innerHTML) + parseFloat(prix1) - parseFloat(prixp6)).toFixed(3);
}
function minubutton1() {
    var test = document.getElementById("productnumber1")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price1").innerHTML = parseFloat(prixp1 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp1) - document.getElementById("price1").innerHTML))).toFixed(3);

    }
}
function minubutton2() {
    var test = document.getElementById("productnumber2")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price2").innerHTML = parseFloat(prixp2 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp2) - document.getElementById("price2").innerHTML))).toFixed(3);

    }

}
function minubutton3() {
    var test = document.getElementById("productnumber3")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price3").innerHTML = parseFloat(prixp3 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp3) - document.getElementById("price3").innerHTML))).toFixed(3);

    }
}
function minubutton4() {
    var test = document.getElementById("productnumber4")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price4").innerHTML = parseFloat(prixp4 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp4) - document.getElementById("price4").innerHTML))).toFixed(3);

    }
}
function minubutton5() {
    var test = document.getElementById("productnumber5")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price5").innerHTML = parseFloat(prixp5 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp5) - document.getElementById("price5").innerHTML))).toFixed(3);

    }
}
function minubutton6() {
    var test = document.getElementById("productnumber6")
    var m = test.innerText.split('').splice(1, 2);
    if (m > 0) {
        var f = +m - 1;
        var v = test.innerText.split('').splice(0, 1);
        test.innerText = v + f
        document.getElementById("price6").innerHTML = parseFloat(prixp6 * f);
        document.getElementById("UPValue").innerHTML = (parseFloat(prix1) - (parseFloat(parseFloat(prixp6) - document.getElementById("price6").innerHTML))).toFixed(3);

    }
}
function deletebutton1() { document.getElementById("product1").style.display = 'none'; }
function deletebutton2() { document.getElementById("product2").style.display = 'none'; }
function deletebutton3() { document.getElementById("product3").style.display = 'none'; }
function deletebutton4() { document.getElementById("product4").style.display = 'none'; }
function deletebutton5() { document.getElementById("product5").style.display = 'none'; }
function deletebutton6() { document.getElementById("product6").style.display = 'none'; }
//  var ball = document.getElementById("griditems");
//  ball.onmousemove = function(event) { // (1) start the process

//     // (2) prepare to moving: make absolute and on top by z-index
//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;
//     // move it out of any current parents directly into body
//     // to make it positioned relative to the body
//     // document.body.append(ball);
//     // ...and put that absolutely positioned ball under the cursor

//     // moveAt(event.pageX);

//     // // centers the ball at (pageX, pageY) coordinates
//    function moveAt(pageX) {

// ball.style.left = pageX - ball.offsetWidth / 2 + 'px';

//      }

//   function onMouseMove(event) {
//      moveAt(event.pageX);
//     }

//  // (3) move the ball on mousemove
//  document.addEventListener('mousemove', onMouseMove);
//        // (4) drop the ball, remove unneeded handlers
//    ball.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//     ball.onmouseup = null;
//      };

//   };
var cntWd, sldWd, tb;
$(function () {

    cntWd = $('#rowproduct').innerWidth();
    tb = $('#griditems');
    sldWd = tb.outerWidth();

    $('#rowproduct').mousemove(function (e) {
        tb.css({ left: ((cntWd - sldWd) * ((e.pageX / cntWd).toFixed(3))).toFixed(1) + "px" });
    });
});