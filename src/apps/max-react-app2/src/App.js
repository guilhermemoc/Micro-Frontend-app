import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    products: {}
  };

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://pacific-wave-51314.herokuapp.com/products/54417",
      { method: "get" }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
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
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="box card">
                    <div class="row ">
                      <div class="col-xs-12 col-md-12">
                        <div class="box">
                          <div class="row">
                            <div class="col-xs-12">
                              <div class="box">
                                <span class="texto-titulo">
                                  {this.state.products.name}
                                </span>
                                <img
                                  class="imagem imagem-interna"
                                  src={this.state.products.imageObjects[0].large}
                                  alt="Imagem"
                                ></img>
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <div class="box pai">
                                <span class="codigo text-right fonte-md ">
                                  cod: {this.state.products.sku}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12">
                        <div class="box caixa-infos">
                          <div class="row">
                            <div class="col-xs-12">
                              <div class="box">
                                <span class="valor-cortado fonte-md">
                                  R${" "}
                                  {this.state.products.priceSpecification.price}
                                  ,00
                                </span>
                                <span class="valor fonte-lg">
                                  R${" "}
                                  {
                                    this.state.products.priceSpecification
                                      .originalPrice
                                  }
                                  ,00
                                </span>
                              </div>
                            </div>
                            <div class="col-xs-12">
                              <div class="box">
                                <button class="btn-verdetalhes">COMPRE</button>
                              </div>
                            </div>

                            <div class="col-xs-12">
                              <div class="box margin-t-b">
                                <span class="texto-titulo">
                                  Descrição do produto:
                                </span>
                                <p>{this.state.products.details.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
