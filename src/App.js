import React from "react";
import "./styles.css";

// Class componets
// tienen un metodo render()
// podian guardar state mientras que los componentes
// funcionales antes no
// tenian la posibilidad de incorporar ciclos de
// vida como constructor, CDD, CDU, etc

// DATA
import { itemsData } from "./itemsData";

class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("ComponentDidMount");
      this.setState({ items: itemsData });
    }, 2000);
  }

  /*
  componentWillMount() {
    console.log("El componente se esta por renderizar");
  } */

  componentDidUpdate() {
    console.log("El componente ha sido modificado");
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <h1>Clase num 6 del curso de React.js</h1>
        {this.state.items.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                {item.name} - ${item.price}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

var promesa = new Promise(function (resolve, reject) {
  var y = 2 + 2;
  if (y === 4) {
    resolve("Exitosa");
  } else {
    reject("Fallo");
  }
});

promesa
  .then((message) => {
    console.log("Promesa resuelta " + message);
  })
  .catch((message) => {
    console.log("Promesa no resuelta " + message);
  });

export default App;
