import { Button,iconButton } from "@mui/material";
import { useContext } from "react";
import {link} from "react-router-dom"
import {CartContext} from "../../../context/CartContext"
import Swal from "sweetalert2"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"


const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("¡Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Reset", "", "warning");
      }
    });
  };

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>

          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h3>cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon color="primary" />
          </IconButton>

        </div>

      )
      )}

      {cart.length > 0 && (
        <div>
          <h2>Total a pagar: {total}</h2>

          <Link to="/checkout">

            <Button variant="contained">Finalizar</Button>

          </Link>

          <Button variant="contained" onClick={clearCartWithAlert}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;

