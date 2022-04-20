<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="loadItemDemo">

    </div>
    <script type="text/javascript">
      // winCached
      var winCached = $(window), docCached = $(document)
      // currLeng
      var currLeng = 0;
      // addContent
      function addContent() {
        dettachScrollEvent();
        setTimeout(function() {
          var htmlAdd = '';
          for (var i = currLeng; i < currLeng + 30; i++)
          htmlAdd += ('<p>' + ('loadItemDemo' + '_' + i) + '</p>');
          $('#loadItemDemo').append(htmlAdd);
          currLeng = i;
          console.log("called loader!");
          attachScrollEvent();
        }, 500);
      }
      // infiNLoader
      function infiNLoader() {
        if (winCached.scrollTop() + winCached.height() > docCached.height() - 300) {
          addContent();
        }
      }
      // attachScrollEvent
      function attachScrollEvent() {
        winCached.scroll(infiNLoader);
      }
      // dettachScrollEvent
      function dettachScrollEvent() {
        winCached.unbind('scroll', infiNLoader);
      }
      // addContent
      addContent();
    </script>
  </body>
</html>
