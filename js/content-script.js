setTimeout(function () {
  $(document).ready(function () {
    alert("welcome");
    console.log("on load page");
    var table = $("mat-card.table.mat-card.ng-star-inserted");
    var renderCells = $(table[1]).find("render-cell");
    var lslData = {
      assigne: $("#mat-input-0").prop("title"),
      falsePositiveReason: $("#mat-input-1").prop("title"),
      triageResult: $("#mat-input-2").prop("title"),
      run: $(renderCells[0]).find("a").text(),
      done: true,
      WVUnavailable: false,
      runOffset: $(renderCells[1]).find("text span").text(),
      eventCategory: $(renderCells[5]).find("text span").text(),
      LSLTimestamp: $(renderCells[6]).find("text span").text(),
      release: $(renderCells[7]).find("text span").text(),
      timestamp: "",
      startTime: new Date().toLocaleString(),
      url: window.location.href
    }

    $("#mat-input-0").on('blur', function () {
      lslData.assigne = $("#mat-input-0").prop("title");
    })

    $("#mat-input-1").on('blur', function () {
      lslData.falsePositiveReason = $("#mat-input-1").prop("title");
    })

    $("#mat-input-2").on('blur', function () {
      lslData.triageResult = $("#mat-input-2").prop("title");
    })

    $("#mat-checkbox-1-input").on('click', function () {
      lslData.done = true;
      console.log("true");
    })

    $("#mat-checkbox-2-input").on('click', function () {
      lslData.WVUnavailable = true;
    })

    $(".nav-button .right-column .mat-raised-button.mat-primary").on('click', function () {

      lslData.timestamp = new Date().toLocaleString();
      console.log(lslData.timestamp);
      var queryString =
        "&assigne=" + lslData.assigne +
        "&falsePositiveReason=" + lslData.falsePositiveReason +
        "&triageResult=" + lslData.triageResult +
        "&done=" + lslData.done +
        "&WVUnavailable=" + lslData.WVUnavailable +
        "&run=" + lslData.run +
        "&runOffset=" + lslData.runOffset +
        "&eventCategory=" + lslData.eventCategory +
        "&LSLTimestamp=" + lslData.LSLTimestamp +
        "&release=" + lslData.release +
        "&timestamp=" + lslData.timestamp +
        "&startTime=" + lslData.startTime +
        "&url=" + lslData.url +
        "&timeDiff=" + (new Date(lslData.timestamp) - new Date(lslData.startTime)) / 1000 + " Sec"

      // var timeDiff =  (new Date(lslData.timestamp) - new Date(lslData.startTime))/1000;
      // console.log(timeDiff);
      // alert(timeDiff);

      console.log(queryString);

      $.get("https://script.google.com/a/google.com/macros/s/AKfycbz8fpZMrcueC7hiMowXrysRR8DNvHMmS3rjcEMqbPXR_uSzLUs/exec?" + queryString, function (result) {
     //   alert("success")
     console.log("success");
      });

    })
  })
}, 3000)