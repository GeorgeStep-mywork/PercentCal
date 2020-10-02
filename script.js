document.getElementById('container').onchange = function () {
  var Phy = Number(document.getElementById('Phym').value);
  var Che = Number(document.getElementById('Chem').value);
  var Bio = Number(document.getElementById('Biom').value);
  var Mat = Number(document.getElementById('Mathm').value);
  var His = Number(document.getElementById('Hism').value);
  var Geo = Number(document.getElementById('Geom').value);
  var Eng = Number(document.getElementById('Engm').value);
  var Sl = Number(document.getElementById('Slm').value);
  var Com = Number(document.getElementById('Comm').value);
  var tp = (Phy + Che + Bio + Mat + His + Geo + Eng + Sl + Com)*2 /9 ;
  document.getElementById('tipOutput').innerHTML = tp + " %";
}

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/1700/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
                },
        error: function(){
          alert("There was an error :(")
        }
    });
}

function SubForm1 (){
  $.ajax({
      url:'https://api.apispreadsheets.com/data/1700/',
      type:'post',
      data:$("#myForm").serializeArray(),
      success: function(){
        alert("Feedback Submitted :)")
      },
      error: function(){
        alert("There was an error :(")
      }
  });
}