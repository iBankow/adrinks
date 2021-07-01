/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Body, Head, Tutorial } from "./style";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";

import drink from "../../public/assets/img/drink-2.png";
import cinamon from "../../public/assets/img/cinamon.png";
import crew from "../../public/assets/img/crew.jpg";

import { ShopItems } from "../../components/data";
import { useEffect, useState } from "react";

export default function Caishots() {
  const categories = ["CAISHOTS", "BEBIDAS", "ESPECIARIAS", "UTENSÍLIOS"];

  const [items, setItems] = useState(ShopItems);
  const [cart, setCart] = useState([]);
  const [categorie, setCategorie] = useState(1);

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
    const filterItems = [...ShopItems].filter((item) => {
      return item.categorie === categorie;
    });
    setItems(filterItems);
  }

  useEffect(() => {
    async function Load() {
      const storage = localStorage.getItem("@Adrinks:cart");
      setCart(JSON.parse(storage));
    }
    Load();
  }, []);

  return (
    <>
      <Header />
      <Head>
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
      </Head>
      <Body>
        <section className="body">
          <div className="title">
            <h1>
              MONTE SEU KIT<span>.</span>
            </h1>
          </div>
          <div className="container">
            <div className="shop">
              <div>
                <div className="filter">
                  <div>
                    <div className="buttons">
                      {categories.map((item, index) => {
                        if (categorie === index) {
                          return (
                            <button key={index} className={`select`}>
                              {item}
                            </button>
                          );
                        } else {
                          return (
                            <button
                              key={index}
                              onClick={() => selectCategorie(index)}
                              className={``}
                            >
                              {item}
                            </button>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <p className="title">TODAS OS ITENS</p>

                <div className="shop-items">
                  {items.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <div className="img">
                          <Image
                            width={91}
                            height={61}
                            src={item.image}
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
            <div className="cart">
              <div className="cart-title">
                {cart.length > 0 && (
                  <>
                    <p className="title">Seu kit contém</p>

                    <p className="desc">
                      Você já selecionou <span>{cart.length} produtos</span>
                    </p>
                  </>
                )}
              </div>

              <div className="cart-content">
                {cart.map((item) => {
                  return (
                    <div key={item.id} className="item">
                      <div className="img">
                        <Image
                          src={item.image}
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
                <div className="button">
                  <p>FINALIZAR</p>
                </div>
              )}
            </div>
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
                  envolver todos os ingredientes. Pronto! Já pode degustar seu
                  drink especial
                </li>
              </ol>
            </div>
            <div className="image">
              <Image src={crew} alt="Bar" className="image-content" />
            </div>
          </div>
        </div>
      </Tutorial>
      <Footer />
      <Background />
    </>
  );
}
