import React from "react";
import "./style.css";
import CurrencyFormat from "react-currency-format";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../Reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const isMobile = window.innerWidth <= 767; // Check if the screen width is less than or equal to 767px

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input className="input_subtotal" type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <Button variant="warning">Proceed to checkout</Button>{" "}
      </div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 150 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        >
          <img
            className="car-ani"
            src="https://www.pngkey.com/png/full/195-1956755_tesla-car-png-tesla-models-s-png.png"
            alt="Cute Cat Drawing"
            style={{
              width: "180px",
              background: "transparent",
              marginTop: "10px",
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default Subtotal;

