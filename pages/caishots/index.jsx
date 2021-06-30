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

export default function Caishots() {
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
                <p className="title">TODAS ESPECIARIAS</p>
                <div className="shop-items">
                  {ShopItems.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <div className="img">
                          <Image
                            width={91}
                            height={58}
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="infos">
                          <p className="name">{item.name}</p>
                          <p className="desc">{item.desc}</p>
                        </div>
                        <div className="plus"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="cart">
              <p className="title">Seu kit contém</p>
              <p className="desc">
                Você já selecionou <span>X</span> produtos
              </p>
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
