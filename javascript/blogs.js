const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function yesy_motion() {
     //alert('has motion')
}

function no_motion() {
     //alert('no motion')
}

function is_motion(asdr) {
     if (asdr.matches == true) {
          yesy_motion()
     } else {
          no_motion()
     }
}

is_motion(motionQuery)
motionQuery.addEventListener('change', is_motion);