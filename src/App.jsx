import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails"; // تعديل المسار حسب المجلد لديك
import NotFound from "./pages/notFound/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        {/* الصفحة الرئيسية التي تعطي قائمة المنتجات وزر الإضافة */}
        <Route path="/" element={<Home />} />

        {/* صفحة تفاصيل المنتج */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* صفحة 404 لجميع المسارات الخاطئة */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}