window.age=12;

function person(){
    this.age=34;
    setTimeout(() => {
        console.log(this.age);
    },1000)
}
export default person;