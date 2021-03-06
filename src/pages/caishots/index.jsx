import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import {
  Body,
  Top,
  Tutorial,
  Beneficios,
} from "../../components/caishots/style";

import drink from "../../assets/img/drink-2.png";
import crew from "../../assets/img/crew.jpg";

import { api, directus } from "../../services/api";
import beer from "../../assets/img/beer.svg";
import beerdark from "../../assets/img/beerdark.svg";

export default function Caishots({ theme, setLocation }) {
  useEffect(() => {
    setLocation("caishots");
  });

  const [categories, setCategories] = useState([]);

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [categorie, setCategorie] = useState(2);

  function addProduct(product, productId) {
    const updateCart = [...cart];
    const productExist = updateCart.find((product) => product.id === productId);

    const currentAmount = productExist ? productExist.amount : 0;

    const amount = currentAmount + 1;

    if (productExist) {
      productExist.amount = amount;
    } else {
      const newProduct = {
        ...product,
        amount: 1,
      };
      updateCart.push(newProduct);
    }

    setCart(updateCart);

    if (typeof window !== "undefined") {
      localStorage.setItem("@Adrinks:cart", JSON.stringify(updateCart));
    }
  }

  function removeProduct(productId) {
    const updateCart = [...cart];
    const product = updateCart.find((product) => product.id === productId);

    if (product.amount >= 2) {
      const newAmount = product.amount - 1;
      product.amount = newAmount;
      setCart(updateCart);
      localStorage.setItem("@Adrinks:cart", JSON.stringify(updateCart));
    } else {
      const productIndex = updateCart.findIndex(
        (product) => product.id === productId
      );
      updateCart.splice(productIndex, 1);
      setCart(updateCart);
      localStorage.setItem("@Adrinks:cart", JSON.stringify(updateCart));
    }
  }

  function selectCategorie(categorie) {
    setCategorie(categorie);
  }

  useEffect(() => {
    async function Load() {
      if (localStorage.getItem("@Adrinks:cart") !== null) {
        const storage = localStorage.getItem("@Adrinks:cart");
        setCart(JSON.parse(storage));
      }
    }
    Load();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      const result = await directus.get("/items/category");
      setCategories(result.data.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function LoadItems(id) {
      const results = await directus.get(
        `/items/items?filter[category_id][_eq]=${id}`
      );
      setItems(results.data.data);
    }
    LoadItems(categorie);
  }, [categorie]);

  async function payment() {
    const items = [...cart];
    const carrinho = items.map((item) => {
      let obj = {};
      obj.id = item?.id;
      obj.unit_price = item?.price;
      obj.title = item?.name;
      obj.quantity = item?.amount;
      obj.currency_id = "BRL";
      return obj;
    });
    const data = {
      items: carrinho,
    };
    const response = await api.post("/process_payment", data);
    window.open(response.data, "_blank");
  }

  return (
    <>
      <Helmet>
        <title>a.drinks | Caishots</title>
      </Helmet>
      <Top>
        <section className="head">
          <div className="slide">
            <div className="info">
              <h1>Caishots</h1>
              <p className="subtittle">
                Selecione os produtos que voc?? quer no seu kit
              </p>
              <hr className="divisor" />
              <p>
                Cada kit inclui X produtos em sach?? com X doses de Gin e um copo
              </p>
            </div>
            <div className="slide-container">
              <div className="slider">
                <div className={`image`}>
                  <img src={drink} width="449" height="559" alt="drink" />
                </div>
              </div>
              <div className="bg"></div>
            </div>
          </div>
        </section>
      </Top>
      <Body>
        <section className="body">
          <div className="title">
            <h1>
              MONTE SEU KIT<span>.</span>
            </h1>
          </div>
          <div className="container">
            <div className="shop">
              <div className="filter-container">
                <div className="filter">
                  <div className="filter-content">
                    <div className="buttons">
                      {categories.map((item) => {
                        if (categorie === item.id) {
                          return (
                            <button key={item.id} className={`select`}>
                              {item.category.toUpperCase()}
                            </button>
                          );
                        } else {
                          return (
                            <button
                              key={item.id}
                              onClick={() => selectCategorie(item.id)}
                            >
                              {item.category.toUpperCase()}
                            </button>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <p className="title">TODAS OS ITENS</p>
                <div className="item-container">
                  <div className="shop-items">
                    {items.map((item) => {
                      return (
                        <div key={item.id} className="item">
                          <div className="img">
                            <img
                              width={91}
                              height={61}
                              src={`http://adrinks-painel.host.zukt.cloud/assets/${item.image}`}
                              alt={item.name}
                            />
                          </div>
                          <div className="infos">
                            <p className="name">{item.name}</p>
                            <p className="desc">{item.desc}</p>
                          </div>
                          <div
                            className={
                              theme.title === "dark" ? "plus dark" : "plus"
                            }
                            onClick={() => {
                              addProduct(item, item.id);
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {cart.length > 0 && (
              <div className="cart">
                <div className="cart-title">
                  <>
                    <p className="title">Seu kit cont??m</p>

                    <p className="desc">
                      Voc?? j?? selecionou <span>{cart.length} produtos</span>
                    </p>
                  </>
                </div>

                <div className="cart-content">
                  {cart.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <div className="img">
                          <img
                            src={`http://adrinks-painel.host.zukt.cloud/assets/${item.image}`}
                            width={91}
                            height={61}
                            alt={item.name}
                          />
                        </div>
                        <div className="infos">
                          <p className="desc">
                            {item.amount < 2
                              ? `${item.amount} Sach??`
                              : `${item.amount} Sach??s`}
                          </p>
                          <p className="name">{item.name}</p>
                        </div>
                        <div
                          className={
                            theme.title === "dark" ? "less dark" : "less"
                          }
                          onClick={() => {
                            removeProduct(item.id);
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                {cart.length > 0 && (
                  <button className="button" onClick={payment}>
                    <p>FINALIZAR</p>
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </Body>
      <Tutorial>
        <div className="container">
          <div className="title">
            <p>TUTORIAL</p>
            <h1>Preparo</h1>
          </div>
          <div className="content">
            <div className="tutorial-content">
              <ol>
                <li>Sirva 50 ml de Gin em um copo</li>
                <li>
                  Adicione seu sach??, misture e deixe infusionar por pelo menos
                  1 minuto, at?? que as especiarias liberem aroma
                </li>
                <li>
                  Caso queira seguir nossa dica, inclua a fruta fresca nesta
                  etapa (vide sugest??o na frente da embalagem)
                </li>
                <li>Coloque gelo at?? a borda do copo</li>
                <li>
                  Complete a mistura com ??gua t??nica a gosto e mexa para
                  envolver todos os ingredientes. <span>Pronto!</span> J?? pode
                  degustar seu drink especial
                </li>
              </ol>
            </div>
            <div className="image">
              <img src={crew} alt="Bar" className="image-content" />
            </div>
          </div>
        </div>
      </Tutorial>
      <Beneficios>
        <div className="container">
          <div className="infos">
            <h2>BENEF??CIOS</h2>
            <p>Por qu?? comprar kit gin?</p>
          </div>
          <hr className="divisor" />
          <div className="services">
            <div className="services-container">
              <div className="service-content">
                <div className="img">
                  {theme.title === "dark" ? (
                    <img src={beerdark} alt="beer-logo" />
                  ) : (
                    <img src={beer} alt="beer-logo" />
                  )}
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Facilidade no preparo. Basta abrir a embalagem e colocar no
                    seu copo com Gin j?? vem na quantidade exata para um copo.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  {theme.title === "dark" ? (
                    <img src={beerdark} alt="beer-logo" />
                  ) : (
                    <img src={beer} alt="beer-logo" />
                  )}
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Te proporciona uma variedade de combina????es de ingredientes.
                    Descobrindo um sabor de bebida diferente sempre.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  {theme.title === "dark" ? (
                    <img src={beerdark} alt="beer-logo" />
                  ) : (
                    <img src={beer} alt="beer-logo" />
                  )}
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Compre apenas os ingredientes que voc?? ir?? utilizar e n??o
                    corra o risco de perder ingredientes.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  {theme.title === "dark" ? (
                    <img src={beerdark} alt="beer-logo" />
                  ) : (
                    <img src={beer} alt="beer-logo" />
                  )}
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Entregamos o kit na sua casa, sem precisar encarar filas no
                    supermercado ou conveni??ncia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Beneficios>
    </>
  );
}
