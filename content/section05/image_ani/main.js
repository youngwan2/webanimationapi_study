import "./scroll-timeline.js";

const progressBar = document.querySelector(".progress");
const targetImages = document.querySelectorAll(".target-image");

console.log(targetImages);
progressBar.animate(
  [
    {
      transform: "scaleX(0)",
    },
    {
      transform: "scaleX(1)",
    },
  ],
  {
    timeline: new ScrollTimeline({
      // 오프셋은 애니메이션의 시작과 중간, 끝 지점의 기준이 되는 설정
      scrollOffsets: [
        // target:타임라인 기준이 되는 요소, edge: 해당요소에서 타임라인 시작 위치(start 는 윗면을 말함)
        // threshold : 요소의 시작점이 타임라인을 지나갈 때 애니메이션 시작 위치
        // 1 은 윗면과 일치하는 지점에서 시작, 0.5는 요소의 중간지점에서 시작
        { target: document.body, edge: "start", threshold: 1 },
        { target: document.body, edge: "end", threshold: 1 },
      ],
    }),
  }
);

targetImages.forEach((img) => {
  // 브라우저에서 이미지의 상단 까지 길이 + 이미지의 높이 - 브라우저 내부 높이
  const imageTop = img.offsetTop + img.offsetHeight - window.innerHeight;
  const imageHeight = img.offsetHeight;
  console.log("이미지 상단 모서리까지 길이:", imageTop);
  console.log("innerHeight:",window.innerHeight)
  console.log("이미지의 높이:", imageHeight);

  img.animate(
    [
      {
        transform:"translate(-150px)",
        opacity: 0,
      },
      {
        transform:"translate(0)",
        opacity: 1,
      },
    ],
    {
      timeline: new ScrollTimeline({
        scrollOffsets: [
          new CSSUnitValue(imageTop, "px"), // 시작 지점
          new CSSUnitValue(imageTop + imageHeight, "px"), // 끝나는 지점
        ],
      }),
    }
  );
});
