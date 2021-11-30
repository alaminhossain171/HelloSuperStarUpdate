import React from "react";

import "../../../../CSS/Profile/starProfile/starPost.css";
// import profilePhoto from "../../../../../images/Profile/azhari-profile.jpg";
import ReactPlayer from "react-player";
import CardComponent from "./StarCardComponent/CardComponent";
import WazContent from "../../../../../images/starProfile/waz-content.jpg";
// import Children from "../../../../../images/starProfile/starPostLeftContent/children.jpg";
// import Jainamaj from "../../../../../images/starProfile/starPostLeftContent/jainamaz.jpg";
// import Topi from "../../../../../images/starProfile/starPostLeftContent/Cap.jpg";
// import Habibi from "../../../../../images/starProfile/starPostLeftContent/Habibi.jpg";
// import Vector1 from "../../../../../images/starProfile/starPostLeftContent/Card3/1.jpg";
// import Vector2 from "../../../../../images/starProfile/starPostLeftContent/Card3/2.jpg";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";

export default function StarPost() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="cards-start">
            <div className="card-scroll">
              <CardComponent
                name="Mizanur Rahman Azhari"
                time="5.31 pm"
                date="2nd july"
                msg="As-salamu alaykum take greeting brothers"
                content={
                  <ReactPlayer
                    url="https://youtu.be/3jtqM_EsUCQ"
                    playing={false}
                    volume={1}
                    width="95%"
                    height="320px"
                    style={{ margin: "0 auto" }}
                    onReady={() => console.log("ready now")}
                  />
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />
              <CardComponent
                name="Mizanur Rahman Azhari"
                time="5.31 pm"
                date="2nd july"
                msg="As-salamu alaykum take greeting brothers"
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <img
                        src={WazContent}
                        alt=""
                        className="img-fluid star-post-img"
                      />
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />

              <CardComponent
                name="Mizanur Rahman Azhari"
                time="5.31 pm"
                date="2nd july"
                msg="As-salamu alaykum take greeting brothers"
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <small className="container mt-2">
                        ইবরাহীম (‘আ.) বলেন, (وَلَكِنْ لِيَطْمَئِنَّ قَلْبِي)
                        ‘তবে এ তো কেবল চিত্ত প্রশান্তির জন্য’- (২ঃ ২৬০)। মু‘আয
                        (রাঃ) বলেন, ‘এসো আমাদের সঙ্গে বস, কিছুক্ষণ ঈমানের আলোচনা
                        করি।’ ইবনু মাস‘ঊদ (রাঃ) বলেন, ‘ইয়াকীন হল পূর্ণ ঈমান।’
                        ইবনু ‘উমার (রাঃ) বলেন, ‘বান্দা প্রকৃত তাকওয়ায় পৌঁছতে
                        পারে না, যতক্ষণ পর্যন্ত সে, মনে যে বিষয় সন্দেহের সৃষ্টি
                        করে, তা পরিত্যাগ না করে।’ মুজাহিদ (রহঃ) এ আয়াতের
                        ব্যাখ্যায় বলেন, অর্থাৎ হে মুহাম্মাদ সাল্লাল্লাহু আলাইহি
                        ওয়াসাল্লাম! আমি আপনাকে এবং নূহকে একই ধর্মের আদেশ করেছি।
                        ইবনু ‘আব্বাস (রাঃ) বলেন, (شِرْعَةً وَمِنْهَاجًا) অর্থাৎ
                        পথ ও পন্থা—এবং তোমাদের দু'আ অর্থাৎ তোমাদের ঈমান।
                        উবায়দুল্লাহ্ ইবনু মূসা (রহঃ) ... ইবনু উমর (রাঃ) থেকে
                        বর্ণিত, তিনি বলেন, রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি
                        ওয়াসাল্লাম ইরশাদ করেন, ইসলামের ভিত্তি পাঁচটি।
                        <br />
                        <br />
                        <br />
                        ১। আল্লাহ্ ছাড়া ইলাহ্ নেই এবং নিশ্চয় মুহাম্মদ আল্লাহ্‌র
                        রাসূল-এ কথার সাক্ষ্য দান। ২। সালাত (নামায/নামাজ) কায়েম
                        করা ৩। যাকাত দেওয়া ৪। হাজ্জ (হজ্জ) করা এবং ৫। রামাদান এর
                        সিয়াম পালন করা।
                      </small>
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />

              <CardComponent
                name="Mizanur Rahman Azhari"
                time="5.31 pm"
                date="2nd july"
                msg="As-salamu alaykum take greeting brothers"
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <small className="container mt-2">
                        "যে ব্যাক্তি আল্লাহ ও আখিরাতে বিশ্বাস রাখে, সে যেন তার
                        মেহমানকে সম্মান করে। ....." "আল্লাহ তোমাদের চেহারা সুরত
                        ও ধনসম্মদ দেখবেন না, তিনি দেখবেন তোমাদের অন্তর ও কাজ।
                        ....."
                        <br />
                        <br />
                        <br />
                        ১। আল্লাহ্ ছাড়া ইলাহ্ নেই এবং নিশ্চয় মুহাম্মদ আল্লাহ্‌র
                        রাসূল-এ কথার সাক্ষ্য দান। ২। সালাত (নামায/নামাজ) কায়েম
                        করা ৩। যাকাত দেওয়া ৪। হাজ্জ (হজ্জ) করা এবং ৫। রামাদান এর
                        সিয়াম পালন করা।
                      </small>
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />
            </div>
          </div>
        </div>

        {/* left side bar start */}

        <div className="col-md-4">
          <StarProfileRightContent />
          {/* <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Audition Announcement</h6>

              <div className="container star-content">
                <img
                  src={Children}
                  class="card-img-top img-fluid star-left-photo"
                  alt="..."
                />
                <div className="other-content">
                  <h6 className="text-bold">Quran Recetiong Audition</h6>
                  <small>Form july 22 to july 25</small>
                </div>
              </div>

              <div className="text-center ">
                <button className="w-100 enroll-btn mt-3">Enroll now</button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Souvenir</h6>

              <div className="container">
                <OwlCarousel className="owl-theme" loop margin={5} nav>
                  <div class="item">
                    <img
                      src={Jainamaj}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Topi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Habibi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                </OwlCarousel>
              </div>

              <div className="text-center">
                <button className="w-100 enroll-btn">
                  Browse Mizanur Rahman Souvenir
                </button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Requested for</h6>

              <div className=" d-flex justify-content-around">
                <img
                  src={Vector1}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
                <img
                  src={Vector2}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
              </div>
            </div>

            <div className="container mb-2">
              <div className="row">
                <div className="col-6 ">
                  <button className="w-100 star-last-btn p-1">
                    Greeting/Birthday/wish
                  </button>
                </div>
                <div className="col-6">
                  <button className="w-100 star-last-btn p-1">Live Chat</button>
                </div>
              </div>
            </div>
          </div> */}



        </div>

        {/* left sidebar end */}
      </div>
    </div>
  );
}
