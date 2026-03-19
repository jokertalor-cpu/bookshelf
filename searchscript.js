function searchBooks() {
  // ၁။ Input ထဲက စာသားကို ယူတယ်
  let input = document.getElementById('searchinput').value.toLowerCase();
  let ul = document.getElementById('booklist');
  let li = ul.getElementsByTagName('li');

  // ၂။ စာရိုက်ထားရင် List ကို ဖော်မယ်၊ ဘာမှမရှိရင် ပြန်ဖျောက်မယ်
  if (input.length > 0) {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }

  // ၃။ တစ်ခုချင်းစီကို လိုက်စစ်တယ်
  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent || li[i].innerText;
    
    // စာသားတူတာ ပါနေရင် ပြမယ်၊ မပါရင် ဖျောက်မယ်
    if (textValue.toLowerCase().indexOf(input) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}