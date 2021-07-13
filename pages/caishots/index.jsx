import { useEffect, useState } from "react";
import Image from "next/image";
import { Body, Top, Tutorial, Container, Form, Beneficios } from "./style";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";

import drink from "../../public/assets/img/drink-2.png";
import crew from "../../public/assets/img/crew.jpg";

import { api, directus } from "../../services/api";
import { ShopItems } from "../../components/data";
import beer from "../../public/assets/img/beer.svg";

export default function Caishots() {
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
    // const filterItems = [...ShopItems].filter((item) => {
    //   return item.categorie === categorie;
    // });
    // setItems(filterItems);
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
      console.log(results.data);
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
      <Header />
      <Top>
        <section className="head">
          <div className="slide">
            <div className="info">
              <h1>Caishots</h1>
              <p className="subtittle">
                Selecione os produtos que você quer no seu kit
              </p>
              <hr className="divisor" />
              <p>
                Cada kit inclui X produtos em sachê com X doses de Gin e um copo
              </p>
            </div>
            <div className="slide-container">
              <div className="slider">
                <div className={`image`}>
                  <Image src={drink} width="449" height="559" alt="drink" />
                </div>
              </div>
              <div className="bg"></div>
            </div>
          </div>
        </section>
        <section></section>
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
                            <Image
                              width={91}
                              height={61}
                              src={`http://localhost:8055/assets/${item.image}`}
                              alt={item.name}
                            />
                          </div>
                          <div className="infos">
                            <p className="name">{item.name}</p>
                            <p className="desc">{item.desc}</p>
                          </div>
                          <div
                            className="plus"
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
                    <p className="title">Seu kit contém</p>

                    <p className="desc">
                      Você já selecionou <span>{cart.length} produtos</span>
                    </p>
                  </>
                </div>

                <div className="cart-content">
                  {cart.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <div className="img">
                          <Image
                            src={`http://localhost:8055/assets/${item.image}`}
                            width={91}
                            height={61}
                            alt={item.name}
                          />
                        </div>
                        <div className="infos">
                          <p className="desc">
                            {item.amount < 2
                              ? `${item.amount} Sachê`
                              : `${item.amount} Sachês`}
                          </p>
                          <p className="name">{item.name}</p>
                        </div>
                        <div
                          className="less"
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
                  Adicione seu sachê, misture e deixe infusionar por pelo menos
                  1 minuto, até que as especiarias liberem aroma
                </li>
                <li>
                  Caso queira seguir nossa dica, inclua a fruta fresca nesta
                  etapa (vide sugestão na frente da embalagem)
                </li>
                <li>Coloque gelo até a borda do copo</li>
                <li>
                  Complete a mistura com água tônica a gosto e mexa para
                  envolver todos os ingredientes. <span>Pronto!</span> Já pode
                  degustar seu drink especial
                </li>
              </ol>
            </div>
            <div className="image">
              <Image src={crew} alt="Bar" className="image-content" />
            </div>
          </div>
        </div>
      </Tutorial>
      <Beneficios>
        <div className="container">
          <div className="infos">
            <h2>BENEFÍCIOS</h2>
            <p>Por quê comprar kit gin?</p>
          </div>
          <hr className="divisor" />
          <div className="services">
            <div className="services-container">
              <div className="service-content">
                <div className="img">
                  <Image src={beer} alt="beer-logo" />
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Facilidade no preparo. Basta abrir a embalagem e colocar no
                    seu copo com Gin já vem na quantidade exata para um copo.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  <Image src={beer} alt="beer-logo" />
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Te proporciona uma variedade de combinações de ingredientes.
                    Descobrindo um sabor de bebida diferente sempre.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  <Image src={beer} alt="beer-logo" />
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Compre apenas os ingredientes que você irá utilizar e não
                    corra o risco de perder ingredientes.
                  </p>
                </div>
              </div>
              <div className="service-content">
                <div className="img">
                  <Image src={beer} alt="beer-logo" />
                </div>
                <div className="info">
                  <h3>Bartender</h3>
                  <p>
                    Entregamos o kit na sua casa, sem precisar encarar filas no
                    supermercado ou conveniência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Beneficios>
      <Footer />
      <Background />
    </>
  );
}
