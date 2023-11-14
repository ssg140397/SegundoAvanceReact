import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/cartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore"

export const Navbar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(database, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>SportShop</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
