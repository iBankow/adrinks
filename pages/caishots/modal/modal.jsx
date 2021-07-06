/* eslint-disable @next/next/no-sync-scripts */
import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import Head from "next/head";
import script from "../../../static/script";

import { Container, Form, TransactionTypeContainer, RadioBox } from "./style";

export const NewTransactionModal = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(openModal);

  async function handleCreateNewPayment(event) {
    event.preventDefault();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    console.log(event.nativeEvent.data);
    const target = event.target.value;
    alert(target);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Head>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Head>
      <Container>
        <Form>
          <form id="form-checkout">
            <input
              type="text"
              name="cardNumber"
              id="form-checkout__cardNumber"
            />
            <input
              type="text"
              name="cardExpirationMonth"
              id="form-checkout__cardExpirationMonth"
            />
            <input
              type="text"
              name="cardExpirationYear"
              id="form-checkout__cardExpirationYear"
            />
            <input
              type="text"
              name="cardholderName"
              id="form-checkout__cardholderName"
            />
            <input
              type="email"
              name="cardholderEmail"
              id="form-checkout__cardholderEmail"
            />
            <input
              type="text"
              name="securityCode"
              id="form-checkout__securityCode"
            />
            <select name="issuer" id="form-checkout__issuer"></select>
            <select
              name="identificationType"
              id="form-checkout__identificationType"
            ></select>
            <input
              type="text"
              name="identificationNumber"
              id="form-checkout__identificationNumber"
            />
            <select
              name="installments"
              id="form-checkout__installments"
            ></select>
            <button type="submit" id="form-checkout__submit">
              Pagar
            </button>
            <progress value="0" className="progress-bar">
              Carregando...
            </progress>
          </form>
          <div>
            <h1>EAE</h1>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};
