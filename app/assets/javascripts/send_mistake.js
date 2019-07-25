$(document).keypress(function(event) {
  // На клавиатуре "1"
  if (event.keyCode == 49) {
    $('#myModal').modal({
      backdrop: 'static',
      keyboard: true
    });
    copy_txt();
    paste_txt('txt_msg');
  };
});

var txt_quote="";

function copy_txt() { 
  txt_quote=""; 
  if (window.getSelection) { 
    txt_quote = window.getSelection().toString(); 
  } else if (document.getSelection) { 
    txt_quote = document.getSelection(); 
  } else if (document.selection) { 
    txt_quote = document.selection.createRange().text; 
  } 
} 

function paste_txt(textarea) { 
  if (txt_quote=="") { 
    alert("Для вставки цитаты в новое сообщение выделите нужный текст и нажмите - Вставить цитату"); 
    document.getElementById("fade_button").disabled = true;
  } else if (txt_quote.length > 0) { 
    document.getElementById("fade_button").disabled = false;
    document.getElementById(textarea).value += "[q]" + txt_quote + "[/q]\n"; 
  } 
}