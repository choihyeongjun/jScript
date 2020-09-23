let days=['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

{/* <table border='1'>
    <th>일요일</th>
    <th>월요일</th>
    <th>화요일</th>
    <th>수요일</th>
    <th>목요일</th>
    <th>금요일</th>
    <th>토요일</th>
</table> */}

{/* <table>
    <tr>
        <th>일요일</th>
        <th>월요일</th>
    </tr>
</table> */}
function loadPage(){
    let $table=document.createElement("table");
    let $tr=document.createElement("tr");
    let $tr1=document.createElement("tr");
    $table.setAttribute('border','1');


    var count=0;
   
    let date=[];
    for(var b=1;b<=31;b++){
        date[b]=b;
    }
    
    days.forEach(function(){
        let $th=document.createElement("th");
        let text=document.createTextNode(days[count]);
        
        $th.appendChild(text);
        $tr.appendChild($th);
        count++;
       
    });
    $table.appendChild($tr);
    $table.appendChild($tr1);
    var i=1;
    date.forEach(function(){
        let $th1=document.createElement("th");
        let text1=document.createTextNode(date[i]);
        if(i%7==1){
            $tr1=document.createElement("tr");
            $table.appendChild($tr1);
        }
      
        $th1.appendChild(text1);
        $tr1.appendChild($th1);
        i++;

    });
 
  


    // for(let day of days){
    //     let $th=document.createElement("th");
    //     let text=document.createTextNode(day);
    //     $th.appendChild(text);
    //     $tr.appendChild($th);
    // }
    

    document.getElementById("bdy").appendChild($table);
}
