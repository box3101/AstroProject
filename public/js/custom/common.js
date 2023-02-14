(function () {
  // 수강신청 -> 상세검색 클릭시 스크립트
  const detailedSearch = () => {
    if (document.querySelector('.searchArea')) {
      const $detailedSearchBtn = document.querySelector(".detailedSearch");
      $detailedSearchBtn.addEventListener("click", (e) => {
        const target = e.target;
        target.closest(".searchArea__info").classList.toggle("on");
      });
    }
  }
  detailedSearch();
  // 수강신청 -> 상세검색 클릭시 스크립트 eee
})();