$(document).ready(function() {
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const carImg = ['assets/Img_05.png', 'assets/Img_06.png'];

    $(document).on('keypress',function(e) {
        if (e.which == 106) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
        // console.log(e.which) // test keycode
    })

    $(document).on('keypress',function(e) {
        if (e.which == 107) {
            flag = !flag;
            if (flag) {
                $($img).attr('src', carImg[1])
            }
            else {
                $($img).attr('src', carImg[0])
            }
            // console.log(flag);
        }
    })
})