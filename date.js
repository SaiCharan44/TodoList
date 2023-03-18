module.exports= datee
function datee(){
let date = new Date()
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"

}
let day1 = date.toLocaleDateString("en-US", options)
return day1
}