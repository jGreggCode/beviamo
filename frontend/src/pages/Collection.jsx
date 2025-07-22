import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";
import ProdcutsItem from "../components/ProdcutsItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  let applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="bg-white mb-20 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* FILTER OPTIONS */}
      <div className="min-w-60">
        <p
          onClick={() => setFilter((prev) => !prev)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <IoIosArrowForward
            className={`h-10 sm:hidden  ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* CATEGORY FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"1833 Syrups"}
                onChange={toggleCategory}
              />{" "}
              1833 Syrups
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro"}
                onChange={toggleCategory}
              />{" "}
              Allegro
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Frappe Powder"}
                onChange={toggleCategory}
              />{" "}
              Allegro Frappe Powder
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Ripple Base"}
                onChange={toggleCategory}
              />{" "}
              Allegro Ripple Base
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Tea"}
                onChange={toggleCategory}
              />{" "}
              Allegro Tea
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Fruit Topping"}
                onChange={toggleCategory}
              />{" "}
              Allegro Fruit Topping
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Baking Improvers"}
                onChange={toggleCategory}
              />{" "}
              Baking Improvers
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Beviamo Beverage Powders"}
                onChange={toggleCategory}
              />{" "}
              Beviamo Beverage Powders
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Beviamo Sauces"}
                onChange={toggleCategory}
              />{" "}
              Beviamo Sauces
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Beviamo Syrups"}
                onChange={toggleCategory}
              />{" "}
              Beviamo Syrups
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Biadgi Sauces"}
                onChange={toggleCategory}
              />{" "}
              Biadgi Sauces
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Cake Mix"}
                onChange={toggleCategory}
              />{" "}
              Cake Mix
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Chocolate Chips"}
                onChange={toggleCategory}
              />{" "}
              Chocolate Chips
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Chocolate Compound"}
                onChange={toggleCategory}
              />{" "}
              Chocolate Compound
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Coffee Beans"}
                onChange={toggleCategory}
              />{" "}
              Coffee Beans
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dairy"}
                onChange={toggleCategory}
              />{" "}
              Dairy
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dionysus Fruity Mix"}
                onChange={toggleCategory}
              />{" "}
              Dionysus Fruity Mix
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dionysus Sauce"}
                onChange={toggleCategory}
              />{" "}
              Dionysus Sauce
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dionysus Syrups"}
                onChange={toggleCategory}
              />{" "}
              Dionysus Syrups
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"DLA Canned Fruit Filling & Topping"}
                onChange={toggleCategory}
              />{" "}
              DLA Canned Fruit Filling & Topping
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Puratos Fillings & Toppings"}
                onChange={toggleCategory}
              />{" "}
              Puratos Fillings & Toppings
            </p>
          </div>
        </div>
        {/* SUB CATEGORY
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUB CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"1833 Syrups"} />{" "}
              1833 Syrups
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Allegro"} />{" "}
              Allegro
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Frappe Powder"}
              />{" "}
              Allegro Frappe Powder
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Ripple Base"}
              />{" "}
              Allegro Ripple Base
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Allegro Tea"} />{" "}
              Allegro Tea
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Allegro Fruit Topping"}
              />{" "}
              Allegro Fruit Topping
            </p>
          </div>
        </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title
            text1={"ALL"}
            text2={"PRODUCTS " + "(" + filterProducts.length + ")"}
          />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 rounded-lg"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProdcutsItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
