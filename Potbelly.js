function
openCity(cityName,elmnt,color){
    var i,tabcontent,tablinks;
    tabcontent=
    document.getElementsByClassName("tabcontent");
    for (i = 0; i <tabcontent.length; i++)
    {
            tabcontent[i].style.display ="none";
        }
        tablinks =
        document.getElementsByClassName("tablink"); for (i = 0; i<tablinks.length; i++)
        {

            tablinks[i].style.backgroundColor="purple";
        }
        document.getElementById(cityName).style.display="block";
        elmnt.style.backgroundColor=color;
    }  
    
    // Get the element with id = "defaultOpen" and click on it
    document.getElementById("defaultOpen").click();


    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");

    }

    function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.Value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementByTagName("a");
        for (i = 0; i <a.length; i++) {
            txtValue = a [i].textContent || a[i].innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";

            }
            else {
                a[i].style.display = "none"
            }
        }
        

    }
    

  // Initialize and add the map
    function initMap(){
        //The location of Bwari
        const Bwari = { lat: -9.285067, lng:7.379610 };
        // The map, centered at Bwari
        const map = new google.maps.Map(document.getElementById("map"),{
            zoom: 4,
            center: Bwari,
        });
        // The marker, positioned at Bwari
        const marker = new google.maps.Marker({
            position: Bwari,
            map: map,
        });
    }

    