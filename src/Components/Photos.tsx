import React from "react";
import NavBar from "./NavBar";

export default function Cars() {
  const places = [
    {
      carname: "Ford RAM trx",
      model_year: "2019 ",
      Price:"Rs.52.5L",
      description:
        "Ford RAM trx + 1.5L PETROL AT",
      url: "https://cdni.autocarindia.com/ExtraImages/20210624071148_Hennessey_Mammoth_1000_trx_front.jpg",
    },

    {
      carname: "Rubicon",
      model_year: "1999 ",
      Price: "Rs.75L",
      description:
        " JEEP Rubicon PLUS  PETROL",
      url: "https://i.ytimg.com/vi/vLH5nEatHq0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACpUOtBtbTcqlRWKXgoj_1Fe57mA",
    },
    {
      carname: "Benz C63",
      model_year: "2000 ",
      Price: "Rs.1.5C",
      description:
        "Benz turbo engine v8",
      url:"https://www.cnet.com/a/img/resize/e9bfb16ba6b6c79d6c38e417ccd3ab8e33b8e94d/hub/2020/10/22/430d2249-3e10-422d-8e2b-dd0720920d3e/ogi-2020-mercedes-amg-c63-s-coupe-71.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
    {
      carname: "Ford Mustang shelby",
      model_year: "2019 ",
      Price: "Rs.88.2L",
      description:
        "Ford Mustang is a 4 seater Coupe with 4951 cc engine option ",
      url: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.carname}</h5>
                <p className="card-text">{place.model_year}</p>
                <p className="card-text">{place.Price}</p>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}