window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");
  let latestNewsfeedIndex=bacefook.newsfeed.length;

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    // add timestamp
    const timestampEl=document.createElement("div");
    const nowDate =moment();
    const passedTimeSeconds=nowDate.diff(post.timestamp)/1000;
    const passedTimeUnit=
      passedTimeSeconds <60       ? "seconds"
     :passedTimeSeconds <60*60    ? "minutes"
     :passedTimeSeconds <60*60*24 ? "hours"
     :"days";

    //trial
    // console.log(nowDate._d);
    // console.log(post.timestamp);
    // console.log(`posted ${nowDate.diff(post.timestamp,"minutes")} minutes ago`);
    //

    timestampEl.innerText=`posted ${nowDate.diff(post.timestamp,passedTimeUnit)} ${passedTimeUnit} ago`;
    postEl.append(timestampEl);

    // add feeling
    const feelingEl=document.createElement("div");
    const feelingSymbol =
      post.feeling === "happy"  ? "😄"
     :post.feeling === "smug"   ? "😏"
     :post.feeling === "lovestruck" ? "😍"
     :post.feeling === "gross"  ? "😨"
     :post.feeling === "scared" ? "😱"
     :post.feeling === "tired"  ? "😩"
     :post.feeling === "angry"  ? "😡"
     :post.feeling === "frustrated" ? "😤"
     :post.feeling === "excited"    ? "🤩"
     :"";
    feelingEl.innerHTML=feelingSymbol;
    postEl.append(feelingEl);

    containerEl.append(postEl);
  }

  const btn = document.getElementById("update");
  
  const postUpdate=()=>{
    for (let index = bacefook.newsfeed.length - 1; index > latestNewsfeedIndex; index--) {
      const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    const timestampEl=document.createElement("div");
    const nowDate =moment();
    const passedTimeSeconds=nowDate.diff(post.timestamp)/1000;
    const passedTimeUnit=
      passedTimeSeconds <60       ? "seconds"
     :passedTimeSeconds <60*60    ? "minutes"
     :passedTimeSeconds <60*60*24 ? "hours"
     :"days";

    //trial
    // console.log(nowDate._d);
    // console.log(post.timestamp);
    // console.log(`posted ${nowDate.diff(post.timestamp,"minutes")} minutes ago`);
    //

    timestampEl.innerText=`posted ${nowDate.diff(post.timestamp,passedTimeUnit)} ${passedTimeUnit} ago`;
    postEl.append(timestampEl);

    containerEl.append(postEl);
    };
  }

  btn.addEventListener("click", postUpdate);
});




