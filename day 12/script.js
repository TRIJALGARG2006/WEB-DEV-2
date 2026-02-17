console.log("start....")
function login(uname, password, cb){
    setTimeout(() => {
        cb({uname: uname, isloggedin: true, message : "Login successful"});
    }, 1000)};


function getvideolist(email,cb){
    setTimeout(() => {
        cb({title:"video1", duration: "2hr"});
    }, 1000)};

function getvideodetail(video, cb){
    setTimeout(() => {
        cb({title: video.title, duration: "2hr", description: "This is a sample video description"});
    }, 1000)};

login("john", "password123" , (userdata) => {
    console.log(userdata);
    getvideolist(userdata.uname, (videodata) => {
        console.log(videodata);
        getvideodetail(videodata, (detaildata) => {
            console.log(detaildata);
        });
    });
});




console.log("end....")