import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://pacific-wave-51314.herokuapp.com/products?page=1&size=100",
      { method: "get" }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const products = data;
        this.setState({ products });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="col-xs-12">
            <div class="box">
              <div class="row">
                <div class="col-xs-12">
                  <div class="box">
                    <span class="titulo">Lista de Produtos</span>
                  </div>
                </div>
              </div>
              <div class="row">
                {this.state.products.map(p => (
                  <div class="col-md-4 col-sm-6 col-xs-12" key={p.sku}>
                    <div class="box card">
                      <div class="row ">
                        <div class="col-xs-4">
                          <div class="box">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="box">
                                  <img
                                    class="imagem"
                                    src={p.imageObjects[0].small}
                                    alt="Imagem"
                                  ></img>
                                </div>
                              </div>
                              <div class="col-xs-12">
                                <div class="box pai">
                                  <span class="codigo">cod: {p.sku}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-8">
                          <div class="box caixa-infos">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="box">
                                  <p>{p.name}</p>
                                  <span class="texto-informacoes">
                                    {p.details.shortDescription}
                                  </span>
                                </div>
                              </div>
                              <div class="col-xs-12">
                                <div class="box">
                                  <span class="valor-cortado">
                                    R$ {p.priceSpecification.originalPrice},00
                                  </span>
                                  <span class="valor">
                                    R$ {p.priceSpecification.price},00
                                  </span>
                                </div>
                              </div>
                              <div class="col-xs-12">
                                <div class="box">
                                  <a href={"/detail/" + p.sku}>
                                    <button class="btn-verdetalhes">
                                      VER DETALHES
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <button class="carregar-mais text-center">
              <span>CARREGAR MAIS PRODUTOS</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
