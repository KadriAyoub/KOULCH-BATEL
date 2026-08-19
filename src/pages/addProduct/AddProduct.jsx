import { useState } from "react";
import { useNavigate } from "react-router";
import "./AddProduct.css";

export default function AddProduct() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  // معالجة اختيار صورة وعرض المعاينة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم ربط البيانات مع API الخلفي (Backend)
    console.log("Submitted Data:", { ...formData, imagePreview });
    navigate("/"); // العودة للصفحة الرئيسية بعد الحفظ
  };

  return (
    <div className="add-product-page">
      <div className="add-product-container">
        <h1>Add New Product</h1>

        <form onSubmit={handleSubmit} className="add-product-form">
          {/* قسم رفع وحاوي الصورة */}
          <div className="image-upload-section">
            <label htmlFor="product-image" className="image-preview-label">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="image-preview" />
              ) : (
                <div className="upload-placeholder">
                  <span className="upload-icon">+</span>
                  <span>Upload Product Image</span>
                </div>
              )}
            </label>
            <input
              type="file"
              id="product-image"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* حقل اسم المنتج */}
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Premium Cotton T-Shirt"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* حقل السعر والتصنيف */}
          <div className="form-row">
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                step="0.01"
                placeholder="29.99"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="shoes">Shoes</option>
              </select>
            </div>
          </div>

          {/* حقل الوصف */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a brief description of the product..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* أزرار الإلغاء والحفظ */}
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}