/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import Script from "next/script";
import script from "./script";

import { Container, Form, TransactionTypeContainer, RadioBox } from "./style";

export const NewTransactionModal = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(openModal);
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event) {
    event.preventDefault();

    await createTransaction({ type, title, amount, category });

    setType("deposit");
    setTitle("");
    setAmout(0);
    setCategory("");
    onRequestClose();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Script src="https://sdk.mercadopago.com/js/v2"></Script>
      <Script>
        const mp = new MercadoPago("TEST-cd886a3e-19c3-4f04-a858-3c3c3330e937");
      </Script>
      <Script src={script}></Script>

      <Container>
        <Form>
          <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
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
          <select name="installments" id="form-checkout__installments"></select>
          <button type="submit" id="form-checkout__submit">
            Pagar
          </button>
          <progress value="0" className="progress-bar">
            Carregando...
          </progress>
        </Form>
      </Container>
    </Modal>
  );
};
