const reels = [
  {
    id: 1,
    reelImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
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
    reelImage: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
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
    reelImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
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
    reelImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
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
    reelImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
    username: "emma",
    description: "Nature is therapy 🌿💚",
    likes: 960,
    comments: 41,
    shares: 18,
    isLiked: false,
    isFollowed: false,
  }
];




 let allreels = document.querySelector(".all-reels");


clutter = " "
reels.forEach(function(elem){
        clutter += ` <div class="reel-card">
            <div class="reels">
              <img
                src="${elem.reelImage}"
                alt=""
              />
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
                <button>${elem.isFollowed?"Unfollow":"Follow"}</button>
              </div>

              <div class="description">
                <p>
                  ${elem.description}
                </p>
              </div>
            </div>
            <div class="right">
              <div class="right-icons">${elem.isLiked ? '<i class="ri-heart-3-line"></i>': '<i class="ri-heart-3-fill"></i>'} <span>${elem.likes}</span>
              </div>
              <div class="right-icons">
                <i class="ri-chat-3-line"></i> <span>${elem.comments}</span>
              </div>
              <div class="right-icons">
                <i class="ri-share-forward-line"></i> <span>${elem.shares}</span>
              </div>
              <div class="right-icons"><i class="ri-more-2-fill"></i></div>
            </div>
          </div>`
    })

    
    allreels.innerHTML = clutter