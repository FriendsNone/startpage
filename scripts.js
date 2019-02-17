function GetClock() {
    d = new Date();
    nhour = d.getHours();
    nmin = d.getMinutes();
    nsec = d.getSeconds();
    nmonth = d.getMonth();
    ndaynumber = d.getDate();

    if (nmin <= 9) { nmin = "0" + nmin; }
    if (nhour <= 9) { nhour = "0" + nhour; }
    if (nsec <= 9) { nsec = "0" + nsec; }

    month = new Array(12);
    weekday = new Array(7);

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    nday = weekday[d.getDay()];
    nmonth = month[d.getMonth()];

    document.getElementById('time').innerHTML = nhour + ":" + nmin + ":" + nsec;
    document.getElementById('date').innerHTML = nday + ", " + nmonth + " " + ndaynumber;

    setTimeout("GetClock()", 1000);
}
  
  function addLink() {
      document.getElementById("links").innerHTML = '<p>Add Shortcut Link</p><input type="text" id="linkName" class="linkText" placeholder="Name"/><br><input type="text" id="linkUrl" class="linkText" placeholder="Address"/><br><input class="linkText" type="button" value=" Save " onclick="saveLink()" />';
  }

  function editWallpaper() {
      document.getElementById("links").innerHTML = '<p>Edit Wallpaper URL</p><input type="text" id="wallpaperURL" class="linkText" placeholder="Image URL"/><br><input class="linkText" type="button" value=" Save " onclick="saveWallpaper()" />';
  }
        
  function saveLink() {
      var name = document.getElementById('linkName').value;
      var url = document.getElementById('linkUrl').value;
      var customLinks = 0;
      
      if (localStorage.getItem('customLinks') != null) {
          customLinks = localStorage.getItem('customLinks');
          
      }
      
      localStorage.setItem('customLinks', customLinks + 1);
      localStorage.setItem('LinkUrl' + customLinks, url);
      localStorage.setItem('LinkName' + customLinks, name);
      
      location.reload();
  }

  function saveWallpaper() {
      var url = document.getElementById('wallpaperURL').value;
      
      localStorage.setItem('wallpaper', url);
      
      location.reload();
  }
  
  function displayBtns() {
      if (document.getElementById('links').innerHTML.includes('addLink')) {
          var end = '<img src="cog.png" height="16px" onclick="displayBtns()" />';
          document.getElementById('links').innerHTML= buildLinkString(end);
      } else {
          var end = '<img src="cog.png" height="16px" onclick="displayBtns()" />';
          var btns = ' | <a onclick="addLink()" style="text-decoration:underline;cursor:pointer;">Add</a> <a onclick="killLinks()" style="text-decoration:underline;cursor:pointer;">Clear</a> <a onclick="editWallpaper()" style="text-decoration:underline;cursor:pointer;">Wallpaper</a> ';
        var input = btns + end;
        document.getElementById('links').innerHTML= buildLinkString(input);  
    }
    
}

function buildLinkString(input) {
    var customLinks = 0;
            
    if (localStorage.getItem('customLinks') != null) {
        customLinks = Number(localStorage.getItem('customLinks'));
    }
            
    var links = '';
            
    var i;
    for (i = 0; i < customLinks; i++) { 
        if (localStorage.getItem('LinkUrl' + i) != null) {
            links += '<a href="' + localStorage.getItem('LinkUrl' + i) + '">';
            links += localStorage.getItem('LinkName' + i) + '</a> ';
        }
    }
            
    links += input;
    
    return links;
}
        
function loadShortcuts() {
    var end = '<img src="cog.png" height="16px" onclick="displayBtns()" />';
    
    
    document.getElementById('links').innerHTML= buildLinkString(end);
    
    loadWallpaper()
    
    GetClock();
}

function loadWallpaper() {
    if (localStorage.getItem('wallpaper') != null) {
        document.getElementById('background').style.backgroundImage = "url('" + localStorage.getItem('wallpaper') + "')";
    }
}

function killLinks() {
    localStorage.clear();
    location.reload();
}