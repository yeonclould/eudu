<h3>마우스를 올려 보세요</h3>
<hr>
    <img src="ba/apple" alt="이미지"
         onMouseOver="over(this)"
         onMouseOut="out(this)">
    </body>

    srfunction over(obj){
    obj.src="ba/apple.jpg"
}
    function out(obj){
    obj.src="ba/banana.jpg"
}

if(true){//만약