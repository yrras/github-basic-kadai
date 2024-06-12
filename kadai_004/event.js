$(function () {
  // HTMLドキュメントが読み込み完了した際
  $(window).on("load", () => {
    console.log('loadイベントが発生しました');
  });

  // 画面スクロールをした際
  $(window).on("scroll", () => {
    console.log('scrollイベントが発生しました');
  });
});