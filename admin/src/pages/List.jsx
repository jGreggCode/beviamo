import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { formatPrice } from "../utils/formatPrice";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { assets } from "../assets/assets";
import { categories } from "../assets/category";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const [allProducts, setAllProducts] = useState([]); // full unfiltered list
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({});

  // EDIT
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("1833 Syrups");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bestSeller, setBestSeller] = useState(false);

  const handleShowModal = async (id) => {
    setProductId(id);
    setShowModal(true);

    try {
      const response = await axios.get(
        backendUrl + "/api/product/get-product",
        {
          params: { id }, // send it directly
        }
      );
      const productData = response.data.product;

      setImage1(productData.image[0] || false);
      setImage2(productData.image[1] || false);
      setImage3(productData.image[2] || false);
      setImage4(productData.image[3] || false);

      setName(productData.name);
      setDescription(productData.description);
      setCategory(productData.category);
      setPrice(productData.price);
      setQuantity(productData.quantity);
      setBestSeller(productData.bestSeller);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const onEditHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("id", productId);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("bestSeller", bestSeller);

      // Preserve existing URLs
      formData.append(
        "existingImages",
        JSON.stringify([
          typeof image1 === "string" ? image1 : null,
          typeof image2 === "string" ? image2 : null,
          typeof image3 === "string" ? image3 : null,
          typeof image4 === "string" ? image4 : null,
        ])
      );

      // Append only new files
      if (image1 instanceof File) formData.append("image1", image1);
      if (image2 instanceof File) formData.append("image2", image2);
      if (image3 instanceof File) formData.append("image3", image3);
      if (image4 instanceof File) formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/edit",
        formData,
        { headers: { token } }
      );

      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // refresh table
        setShowModal(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImages = () => {
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
  };

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/products");
      if (response.data.success) {
        setAllProducts(response.data.products);
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.errror(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(filtered);
  }, [searchTerm, allProducts]);

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      {/* EDIT MODAL */}
      {showModal ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="">Edit Product ({productId})</p>
            <IoMdCloseCircleOutline
              className="text-2xl cursor-pointer hover:text-brown-primary"
              onClick={(prev) => setShowModal(!prev)}
            />
          </div>

          <form
            onSubmit={onEditHandler}
            className="flex flex-col w-full items-start gap-3"
          >
            <div>
              <p className="flex gap-3 items-center mb-2">
                Upload Image
                <button
                  type="button"
                  onClick={handleRemoveImages}
                  className="cursor-pointer text-red-500 underline"
                >
                  Remove Images
                </button>
              </p>
              <div className="flex gap-2">
                <label htmlFor="image1">
                  <img
                    className="w-20 cursor-pointer"
                    src={
                      !image1
                        ? assets.upload_area
                        : typeof image1 === "string"
                        ? image1
                        : URL.createObjectURL(image1)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage1(e.target.files[0])}
                    type="file"
                    id="image1"
                    hidden
                  />
                </label>
                <label htmlFor="image2">
                  <img
                    className="w-20 cursor-pointer"
                    src={
                      !image2
                        ? assets.upload_area
                        : typeof image2 === "string"
                        ? image2
                        : URL.createObjectURL(image2)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage2(e.target.files[0])}
                    type="file"
                    id="image2"
                    hidden
                  />
                </label>
                <label htmlFor="image3">
                  <img
                    className="w-20 cursor-pointer"
                    src={
                      !image3
                        ? assets.upload_area
                        : typeof image3 === "string"
                        ? image3
                        : URL.createObjectURL(image3)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage3(e.target.files[0])}
                    type="file"
                    id="image3"
                    hidden
                  />
                </label>
                <label htmlFor="image4">
                  <img
                    className="w-20 cursor-pointer"
                    src={
                      !image4
                        ? assets.upload_area
                        : typeof image4 === "string"
                        ? image4
                        : URL.createObjectURL(image4)
                    }
                    alt=""
                  />
                  <input
                    onChange={(e) => setImage4(e.target.files[0])}
                    type="file"
                    id="image4"
                    hidden
                  />
                </label>
              </div>
            </div>

            <div className="w-full">
              <p className="mb-2">Product Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full max-w-[500px] px-3 py-2"
                type="text"
                placeholder="Eg: Coffee"
                required
              />
            </div>

            <div className="w-full">
              <p className="mb-2">Product Description</p>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full max-w-[500px] px-3 py-2"
                type="text"
                placeholder="Eg: Coffee is the best!"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
              <div>
                <p className="mb-2">Product Category</p>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="w-full px-3 py-2"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="mb-2">Product Price</p>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="w-full px-3 py-2 sm:w-[120px]"
                  type="number"
                  placeholder="250"
                />
              </div>
            </div>

            <div>
              <p>Product Quantity</p>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                className="w-full px-3 py-2 sm:w-[120px]"
                type="number"
                placeholder="1"
              />
            </div>

            <div className="flex gap-2 mt-2">
              <input
                onChange={() => setBestSeller((prev) => !prev)}
                checked={bestSeller}
                type="checkbox"
                id="bestSeller"
              />
              <label className="cursor-pointer " htmlFor="bestSeller">
                Add to Best Seller
              </label>
            </div>

            <button
              type="submit"
              className="w-28 py-3 mt-4 bg-brown-primary text-white"
            >
              {loading ? "Editting..." : "EDIT"}
            </button>
          </form>
        </div>
      ) : (
        <>
          <p className="mb-2 flex items-center justify-between">
            All Products ({list.length} products)
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1"
              type="text"
              placeholder="Search product"
            />
          </p>
          <div className="flex flex-col gap-2">
            {/* LIST TABLE */}
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm">
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Quantity</b>
              <b className="text-center">Action</b>
            </div>
            {/* PRODUCT LIST */}
            {list <= 0 ? (
              <div className="text-center">No Products yet</div>
            ) : (
              list.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_3fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
                >
                  <img className="w-12" src={item.image[0]} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>
                    {currency}
                    {formatPrice(item.price)}
                  </p>
                  <p>{item.quantity}</p>
                  <div className="flex items-center justify-center gap-4">
                    <FaRegEdit
                      onClick={() => handleShowModal(item._id)}
                      className="text-xl cursor-pointer hover:text-brown-primary"
                    />
                    <MdOutlineDelete
                      onClick={() => removeProduct(item._id)}
                      className="text-xl cursor-pointer hover:text-brown-primary"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default List;
