import React from "react";

class Favorites extends React.Component {
  render() {
    const { favorite_id, title, videoid, thumbnail, date_added} = this.props.details;
    return (
      <li>
        <div className="iFrames">

          <h4 className="video-list-items" >{title} {favorite_id}</h4>
          <div className="row">
            <div className="thumbnail">
                <img
                  src={thumbnail}
                  alt="thumbnail image"
                  className="img-thumbnail img-fluid" />
            </div>
          </div>
        </div>
      </li>
    );
  };
}

export default Favorites;

/* <div class="container">
  <div ng-if="favVideos != undefined">
    <h3>Favorites Matching "{{ searchWordMessage }}" ({{ favVideos.length }} Total):</h3>
      <ul ng-repeat="video in favVideos | orderBy : '-date_added' | limitTo:10:index">
        <li class="row">

            <!-- iFrame/Thumbnail section -->
          <div class="col-md-12 iFrames">

                <!-- Title -->
              <h4 class="video-list-items" >{{ video.title }} {{ video.favorite_id }}</h4>
              <div class="row">

                <!-- Thumbnail -->
              <div  class="col-md-6 thumbnail"
                    ng-if="video.videoid !== shownFavoriteID">
                  <img
                    src="{{ video.thumbnail }}"
                    alt="thumbnail image"
                    class="img-thumbnail img-fluid"
                    ng-click="showFavoriteVideo(video)">
              </div>

            <!-- iFrame -->
              <div  class="col-md-6"
                    ng-if="video.videoid === shownFavoriteID">
              <div>
                <iframe
                  width="480"
                  height="360"
                  src="{{ video.embedUrl }}"
                  frameborder="0"
                  allowfullscreen>
                </iframe>
              </div>
            </div>

            <!-- "Assign Search Words" section -->
            <div class="col-md-5 col-md-offset-1">
              <div>
                <pk-assign-search-words></pk-assign-search-words>
              </div>

                <!-- "Delete Favorite" button -->
              <div>
                <span  class="deleteBtn">Delete From Collection</span><br>
                <button type="submit"
                        class="btn btn-primary btn-sm"
                        ng-click="deleteFavorite(video)">Delete Favorite
                </button>
              </div>
            </div>

            <!-- Close video list display section -->
          </div>

        <!-- Close wrapper row -->
        </div>
      </li>
    </ul>
    <!-- "Submit" button for next videos in list -->
    <button
            ng-show="!isEndOfList"
            type="submit"
            class="btn btn-primary btn-md isEndOfList"
            ng-click="increaseIndex(favVideos)">Get More Videos
    </button>
    <span class="good isEndOfList" ng-show="isEndOfList">End of search results</span>
    <!-- Close iFrame/Thumbnail section -->
  </div>
</div> */
