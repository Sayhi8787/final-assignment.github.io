function jion(){
                var peo=document.getElementById("people");
                if(people.value==""){
                  alert("請輸入痕跡!!");
                }
                else{
                  var txtNode = document.createTextNode(people.value);
                  var li = document.createElement("li");
                  li.appendChild(txtNode);
                  var list = document.getElementById("list");
                  list.appendChild(li);
                 document.getElementById("peopleCount").innerText=list.children.length;
                }
                }