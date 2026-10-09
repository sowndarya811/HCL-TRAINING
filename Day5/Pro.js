async function func(){
    let response=await fetch('Info.txt');
    let text=await response.text()
    document.getElementById('sweety').innerHTML=text
    console.log(text)

}
func()