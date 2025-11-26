const reels = [
  {
    id: 1,
    reelVideo: "https://www.pexels.com/download/video/34040063/",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    username: "alexandra",
    description: "Enjoying the sunset vibes 🌅✨",
    likes: 1234,
    comments: 89,
    shares: 45,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 2,
    reelVideo: "https://www.pexels.com/download/video/30982132/",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "michael",
    description: "Roadtrip memories 🚗💨",
    likes: 2540,
    comments: 120,
    shares: 66,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 3,
    reelVideo: "https://www.pexels.com/download/video/34742807/",
    profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
    username: "sophia",
    description: "Workout grind never stops 💪🔥",
    likes: 754,
    comments: 34,
    shares: 12,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 4,
    reelVideo: "https://www.pexels.com/download/video/34475371/",
    profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
    username: "johnny",
    description: "Rainy days and coffee ☕🌧️",
    likes: 1860,
    comments: 77,
    shares: 22,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 5,
    reelVideo: "https://www.pexels.com/download/video/34804625/",
    profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
    username: "emma",
    description: "Nature is therapy 🌿💚",
    likes: 960,
    comments: 41,
    shares: 18,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 6,
    reelVideo: "https://www.pexels.com/download/video/34737091/",
    profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "liam",
    description: "Late night city walks 🌃",
    likes: 1430,
    comments: 58,
    shares: 28,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 7,
    reelVideo: "https://www.pexels.com/download/video/9558748/",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    username: "olivia",
    description: "Perfect morning coffee ☕✨",
    likes: 2100,
    comments: 77,
    shares: 35,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 8,
    reelVideo: "https://www.pexels.com/download/video/34696325/",
    profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
    username: "ethan",
    description: "Supercar moments 🏎️🔥",
    likes: 4320,
    comments: 156,
    shares: 92,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 9,
    reelVideo: "https://www.pexels.com/download/video/34722109/",
    profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
    username: "mia",
    description: "Dance like nobody's watching 💃✨",
    likes: 3200,
    comments: 140,
    shares: 67,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 10,
    reelVideo: "https://www.pexels.com/download/video/34717604/",
    profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
    username: "noah",
    description: "First snow of the season ❄️",
    likes: 980,
    comments: 33,
    shares: 12,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 11,
    reelVideo: "https://www.pexels.com/download/video/34738008/",
    profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
    username: "ava",
    description: "Beach day vibes 🌊🌤️",
    likes: 1740,
    comments: 49,
    shares: 26,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 12,
    reelVideo: "https://www.pexels.com/download/video/30025281/",
    profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
    username: "logan",
    description: "Festival nights 🔥✨",
    likes: 2650,
    comments: 102,
    shares: 58,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 13,
    reelVideo: "https://www.pexels.com/download/video/34697317/",
    profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
    username: "isabella",
    description: "Chasing waterfalls 💧🌿",
    likes: 2930,
    comments: 88,
    shares: 40,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 14,
    reelVideo: "https://www.pexels.com/download/video/34294407/",
    profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
    username: "james",
    description: "Road to peace 🛣️",
    likes: 760,
    comments: 22,
    shares: 11,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 15,
    reelVideo: "https://www.pexels.com/download/video/34226230/",
    profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
    username: "ella",
    description: "Music heals 🎶💜",
    likes: 4100,
    comments: 132,
    shares: 80,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 16,
    reelVideo: "https://www.pexels.com/download/video/34681654/",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    username: "jack",
    description: "Doggo day 🐶❤️",
    likes: 5400,
    comments: 200,
    shares: 99,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 17,
    reelVideo: "https://www.pexels.com/download/video/33304325/",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    username: "grace",
    description: "Morning cycling 🚴‍♀️✨",
    likes: 1540,
    comments: 64,
    shares: 34,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 18,
    reelVideo: "https://www.pexels.com/download/video/14268098/",
    profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
    username: "henry",
    description: "Working café style ☕💻",
    likes: 2740,
    comments: 107,
    shares: 55,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 19,
    reelVideo: "https://www.pexels.com/download/video/31223578/",
    profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
    username: "chloe",
    description: "Leg day 🔥🔥",
    likes: 3800,
    comments: 130,
    shares: 70,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 20,
    reelVideo: "https://www.pexels.com/download/video/34132249/",
    profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
    username: "daniel",
    description: "Surfing the waves 🌊🏄",
    likes: 4500,
    comments: 199,
    shares: 120,
    isLiked: false,
    isFollowed: false,
  }
];




 let allreels = document.querySelector(".all-reels");





 function addData(){
clutter = " "
reels.forEach(function(elem , idx){
    //console.log(idx);
        clutter += ` <div class="reel-card">
            <div class="reels">
              <video autoplay loop muted playsinline>
               <source src="${elem.reelVideo}" type="video/mp4" />
                alt=""
              </video>
            </div>

            <div class="bottom">
              <div class="bottom-top">
                <div class="profileimage">
                  <img
                    src="${elem.profileImage}"
                    alt=""
                  />
                </div>
                <div class="username">
                  <h3>${elem.username}</h3>
                </div>
                <button class="followInfo" data-id=${idx}>${elem.isFollowed ? "Unfollow" : "Follow"}</button>

              </div>

              <div class="description">
                <p>
                  ${elem.description}
                </p>
              </div>
            </div>
            <div class="right">
              <div class="right-icons">
              <div class="like" data-id=${idx}>
            ${elem.isLiked 
              ? '<i class="ri-heart-3-fill red"></i>'
              : '<i class="ri-heart-3-line"></i>'}
            <span>${elem.likes}</span>
            </div>
          </div>
              <div class="right-icons">
              <div class="comment" id=${idx}>
                <i class="ri-chat-3-line"></i> <span>${elem.comments}</span>
                </div>
              </div>
              <div class="right-icons">
              <div class="share" id=${idx}>
                <i class="ri-share-forward-line"></i> <span>${elem.shares}</span>
              </div>
              </div>
              <div class="right-icons">
              <div class="menu" id=${idx}>
              <i class="ri-more-2-fill"></i></div>
            </div>
            </div>
          </div>`
    })

    
    allreels.innerHTML = clutter
 }


 addData();


 allreels.addEventListener("click",function(dets){

const follow = dets.target.closest(".followInfo");
if (follow) {
  const idx1 = follow.dataset.id;

  reels[idx1].isFollowed = !reels[idx1].isFollowed;

  addData();
  return;
}


    const like = dets.target.closest(".like");
    if(!like) return;
    const idx = like.dataset.id;
    // console.log(like.dataset.id);
    if(!reels[idx].isLiked){
    reels[idx].likes++;
    reels[idx].isLiked = true;
    }else{
       reels[idx].likes--;
    reels[idx].isLiked = false;
    }
 
    addData();
 })


