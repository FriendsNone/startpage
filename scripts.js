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
      document.getElementById("links").innerHTML = '<p>Add Shortcut Link</p><input type="text" id="linkName" class="linkText" placeholder="Name"/><br><input type="text" id="linkUrl" class="linkText" placeholder="Address"/><br><input class="linkText" type="button" value=" Save " id="btn" onclick="saveLink()" />';
      document.getElementById('linkName').style.color = localStorage.getItem('color');
      document.getElementById('linkName').style.borderColor = localStorage.getItem('color');
      document.getElementById('linkUrl').style.color = localStorage.getItem('color');
      document.getElementById('linkUrl').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.color = localStorage.getItem('color');
  }

  function editWallpaper() {
      document.getElementById("links").innerHTML = '<p>Edit Wallpaper URL</p><input type="text" id="wallpaperURL" class="linkText" placeholder="Image URL"/><br><input class="linkText" id="btn" type="button" value=" Save " onclick="saveWallpaper()" />';
      document.getElementById('wallpaperURL').style.color = localStorage.getItem('color');
      document.getElementById('wallpaperURL').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.color = localStorage.getItem('color');
  }

  function editText() {
      document.getElementById("links").innerHTML = '<p>Edit Text Color</p><input type="text" id="TextColor" class="linkText" placeholder="Color"/><br><input class="linkText" id="btn" type="button" value=" Save " onclick="saveText()" />';
      document.getElementById('TextColor').style.color = localStorage.getItem('color');
      document.getElementById('TextColor').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.borderColor = localStorage.getItem('color');
      document.getElementById('btn').style.color = localStorage.getItem('color');
  }


  function ducky() {
      if (localStorage.getItem('ducky') == null) {
          localStorage.setItem('ducky', true);
      } else {
          if (localStorage.getItem('ducky') == true) {
              localStorage.setItem('ducky', false);
          } else {
              localStorage.setItem('ducky', true);
          }
      }
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

  function saveText() {
      var color = document.getElementById('TextColor').value;
      
      localStorage.setItem('color', color);
      
      location.reload();
  }
  
  function displayBtns() {
      if (document.getElementById('links').innerHTML.includes('addLink')) {
          var end = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path id="cog" d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" onclick="displayBtns()"></svg>';
          document.getElementById('links').innerHTML= buildLinkString(end);
          
    
    if (localStorage.getItem('color') != null) {
        document.getElementById('cog').style.fill = localStorage.getItem('color');
    } else {
        document.getElementById('cog').style.fill = "white";
    }
    
      } else {
          var end = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path id="cog" d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" onclick="displayBtns()"></svg>';
          var btns = ' | <a onclick="addLink()" style="text-decoration:underline;cursor:pointer;">Add</a> <a onclick="killLinks()" style="text-decoration:underline;cursor:pointer;">Clear</a> <a onclick="editWallpaper()" style="text-decoration:underline;cursor:pointer;">Wallpaper</a> <a onclick="editText()" style="text-decoration:underline;cursor:pointer;">Color</a> <a onclick="ducky()" style="text-decoration:underline;cursor:pointer;">Toggle Ducky</a> ';
        var input = btns + end;
        document.getElementById('links').innerHTML= buildLinkString(input);
        
    
    if (localStorage.getItem('color') != null) {
        document.getElementById('cog').style.fill = localStorage.getItem('color');
    } else {
        document.getElementById('cog').style.fill = "white";
    }
    
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
    var end = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path id="cog" d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" onclick="displayBtns()"></svg>';
    
    
    document.getElementById('links').innerHTML= buildLinkString(end);
    
    
    if (localStorage.getItem('color') != null) {
        document.getElementById('cog').style.fill = localStorage.getItem('color');
    } else {
        document.getElementById('cog').style.fill = "white";
    }
    
    document.getElementById('queryTerm').addEventListener('keyup',function(e){
            if (e.keyCode === 13) {
                performSearch();
            }
        });
    
    loadWallpaper()
    
    loadColor()
    
    GetClock();
}

function loadWallpaper() {
    if (localStorage.getItem('wallpaper') != null) {
        document.getElementById('background').style.backgroundImage = "url('" + localStorage.getItem('wallpaper') + "')";
    }
}

function loadColor() {
    if (localStorage.getItem('color') != null) {
        document.getElementById('search').style.color = localStorage.getItem('color');
        document.getElementById('queryTerm').style.color = localStorage.getItem('color');
        document.getElementById('cog').style.fill = localStorage.getItem('color');
        
        var inputs = document.getElementsByTagName("div");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.color = localStorage.getItem('color');
        }
        
    } else {
        document.getElementById('cog').style.fill = "white";
    }
}

function killLinks() {
    localStorage.clear();
    location.reload();
}

function performSearch() {
    var query = document.getElementById('queryTerm').value;
    var ducky = localStorage.getItem('ducky');
    
    if ((ducky == null) || (ducky == false)) {
        window.location = 'https://www.google.com/search?q=' + query;
    } else {
        window.location = 'https://duckduckgo.com/?q=!ducky+' + query;
    }
}