import React from "react";
import Star from "../Assets/Vector.png";
import userProfile from "../Assets/image 4.png";
import userImage1 from "../Assets/image 16.png";

function CommentBox2({ commandtext, userName, userImage, rating }) {
  const RatingStars = Array.from({ length: rating });

  return (
    <div className="w-[450px] h-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col justify-between">
        <div className="bg-[#F1F3F7] p-4 rounded-xl mb-2">
          <div className="flex items-center gap-3">
            <img
              src={userProfile}
              alt=""
              className="w-[30px] h-[30px] rounded-full flex overflow-hidden"
            />
            <span className="font-bold text-sm">{userName}</span>
          </div>
          <div className="flex mb-2">
            {RatingStars.map((_, index) => (
              <img key={index} src={Star} alt="star" className="w-4 h-4 mr-1" />
            ))}
          </div>
          <p className="text-sm">{commandtext}</p>
          <img src={userImage1} alt="" className="w-full" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] rounded-full flex overflow-hidden"></div>
          </div>
          <div className="flex gap-2 ">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.70588 8.99726V18.409C5.70588 18.721 5.58193 19.0203 5.3613 19.2409C5.14067 19.4615 4.84143 19.5855 4.52941 19.5855H2.17647C1.86445 19.5855 1.56521 19.4615 1.34458 19.2409C1.12395 19.0203 1 18.721 1 18.409V10.1737C1 9.86171 1.12395 9.56247 1.34458 9.34184C1.56521 9.12121 1.86445 8.99726 2.17647 8.99726H5.70588ZM5.70588 8.99726C6.95396 8.99726 8.15092 8.50146 9.03344 7.61894C9.91597 6.73641 10.4118 5.53945 10.4118 4.29137V3.1149C10.4118 2.49087 10.6597 1.89239 11.1009 1.45112C11.5422 1.00986 12.1407 0.761963 12.7647 0.761963C13.3887 0.761963 13.9872 1.00986 14.4285 1.45112C14.8697 1.89239 15.1176 2.49087 15.1176 3.1149V8.99726H18.6471C19.2711 8.99726 19.8696 9.24516 20.3108 9.68642C20.7521 10.1277 21 10.7262 21 11.3502L19.8235 17.2326C19.6543 17.9543 19.3334 18.574 18.909 18.9984C18.4846 19.4228 17.9798 19.6288 17.4706 19.5855H9.23529C8.29924 19.5855 7.40152 19.2136 6.73962 18.5518C6.07773 17.8899 5.70588 16.9921 5.70588 16.0561"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0612 22.3529C16.2455 22.3529 15.551 22.0667 14.9776 21.4941C14.4043 20.9231 14.1176 20.229 14.1176 19.4118C14.1176 19.2549 14.1314 19.0929 14.1588 18.9259C14.1855 18.758 14.2259 18.6004 14.28 18.4529L5.17176 13.0859C4.88392 13.4106 4.54902 13.6635 4.16706 13.8447C3.78588 14.0267 3.37725 14.1176 2.94118 14.1176C2.12392 14.1176 1.4298 13.8318 0.858824 13.26C0.286275 12.689 0 11.9953 0 11.1788C0 10.3631 0.286275 9.66863 0.858824 9.09529C1.42902 8.52196 2.12314 8.23529 2.94118 8.23529C3.37725 8.23529 3.78588 8.32627 4.16706 8.50824C4.54902 8.68941 4.88392 8.94235 5.17176 9.26706L14.28 3.9C14.2259 3.75255 14.1855 3.5949 14.1588 3.42706C14.1314 3.26 14.1176 3.09804 14.1176 2.94118C14.1176 2.12392 14.4035 1.4298 14.9753 0.858824C15.5463 0.286275 16.24 0 17.0565 0C17.8722 0 18.5667 0.285882 19.14 0.857647C19.7133 1.42863 20 2.12235 20 2.93882C20 3.75451 19.7137 4.44902 19.1412 5.02235C18.5702 5.59569 17.8761 5.88235 17.0588 5.88235C16.6227 5.88235 16.2141 5.79137 15.8329 5.60941C15.451 5.42824 15.1161 5.17529 14.8282 4.85059L5.72 10.2176C5.77412 10.3651 5.81451 10.522 5.84118 10.6882C5.86863 10.8553 5.88235 11.0165 5.88235 11.1718C5.88235 11.3271 5.86863 11.4898 5.84118 11.66C5.81451 11.8294 5.77412 11.9878 5.72 12.1353L14.8282 17.5024C15.1161 17.1776 15.451 16.9247 15.8329 16.7435C16.2141 16.5616 16.6227 16.4706 17.0588 16.4706C17.8761 16.4706 18.5702 16.7565 19.1412 17.3282C19.7137 17.8992 20 18.5929 20 19.4094C20 20.2251 19.7141 20.9196 19.1424 21.4929C18.5714 22.0663 17.8776 22.3529 17.0612 22.3529ZM17.0588 4.70588C17.5427 4.70588 17.958 4.53294 18.3047 4.18706C18.6506 3.84039 18.8235 3.4251 18.8235 2.94118C18.8235 2.45726 18.6506 2.04196 18.3047 1.69529C17.958 1.34941 17.5427 1.17647 17.0588 1.17647C16.5749 1.17647 16.1596 1.34941 15.8129 1.69529C15.4671 2.04196 15.2941 2.45726 15.2941 2.94118C15.2941 3.4251 15.4671 3.84039 15.8129 4.18706C16.1596 4.53294 16.5749 4.70588 17.0588 4.70588ZM2.94118 12.9412C3.4251 12.9412 3.84039 12.7682 4.18706 12.4224C4.53294 12.0757 4.70588 11.6604 4.70588 11.1765C4.70588 10.6925 4.53294 10.2773 4.18706 9.93059C3.84039 9.58471 3.4251 9.41177 2.94118 9.41177C2.45726 9.41177 2.04196 9.58471 1.69529 9.93059C1.34941 10.2773 1.17647 10.6925 1.17647 11.1765C1.17647 11.6604 1.34941 12.0757 1.69529 12.4224C2.04196 12.7682 2.45726 12.9412 2.94118 12.9412ZM17.0588 21.1765C17.5427 21.1765 17.958 21.0035 18.3047 20.6576C18.6506 20.311 18.8235 19.8957 18.8235 19.4118C18.8235 18.9278 18.6506 18.5126 18.3047 18.1659C17.958 17.82 17.5427 17.6471 17.0588 17.6471C16.5749 17.6471 16.1596 17.82 15.8129 18.1659C15.4671 18.5126 15.2941 18.9278 15.2941 19.4118C15.2941 19.8957 15.4671 20.311 15.8129 20.6576C16.1596 21.0035 16.5749 21.1765 17.0588 21.1765Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox2;