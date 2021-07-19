//Javascript code
function search_meal() {
    let input = document . getElementById( 'searchbar') .value
     input = input . toLowerCase() ;

     let x = document.getElementsByClassName( 'meals' );

     for (i = 0 ; i < x. length; i++) {
         if (! x [i] . innerHTML.toLowerCase () . includes(input)) {
             x[i] . style.display="none";
     }
        else {
            x[i] . style.display="list-item" ;
        }
    }
    
}