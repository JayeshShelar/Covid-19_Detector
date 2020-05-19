let net = null;

function showFiles() {
  // An empty img element
  let demoImage = document.getElementById("idImage");
  // read the file from the user
  let file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    demoImage.src = reader.result;
  };
  reader.readAsDataURL(file);

  app();
}
/*
google.charts.load("current", { packages: ["corechart", "bar"] });

function drawStacked(result) {
  var data_ = Array(result.length + 1);
  data_[0] = ["clase", "Probabilidad", { role: "style" }];
  data_[1] = [result[0].className, result[0].probability, "#982107"];
  for (iter = 1; iter < result.length; iter++) {
    data_[iter + 1] = [
      result[iter].className,
      result[iter].probability,
      "#6F76C2",
    ];
  }
  var data = google.visualization.arrayToDataTable(data_);
  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },
    2,
  ]);
  var options = {
    width: 600,
    height: 200,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(view, options);
}*/

async function app() {
  console.log("loading mobilenet...");
  model = await tf.loadLayersModel("model.json");

  console.log("Sucessfully loaded model");
  predice();
}

function preprocessImage(image) {
  prediction = model.predict(
    tf.browser.fromPixels(image).cast("float32").expandDims()
  );

  console.log("prediction:::" + prediction);

  prediction;
  //console.log("tensor pro", tensor);
}

async function predice() {
  img_ = document.getElementById("idImage");

  let tensor = preprocessImage(img_);

  //let prediction = await model.predict(tensor).data();

  //console.log("prediction:::" + prediction);
}

app();
