import './ProductDetails.css'
import 'boxicons'
import { useState, useEffect } from 'react'
import formatTime from '../../utils/formatTime'
//lightBox
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import watch from '../../assets/images/apple watch.jpg'
import bottle from '../../assets/images/bottle.jpg'
import headPhone from '../../assets/images/headPhone.jpg'
import rayban from '../../assets/images/rayban-glasses.jpg'



const SIZES = ['S', 'M', 'L', 'XL', 'XXL']

const IMAGES = [watch, bottle, headPhone, rayban]

// how many seconds are left to still get next-day delivery
const DELIVERY_WINDOW_SECONDS = 2 * 60 * 60 + 30 * 60 // 02:30:00

export default function ProductDetails() {
    const [activeImage, setActiveImage] = useState(0)
    const [selectedSize, setSelectedSize] = useState('S')
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(DELIVERY_WINDOW_SECONDS)
    const [openSection, setOpenSection] = useState({ description: true, shipping: true })
    //lightBox
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const slides = IMAGES.map((src) => ({ src }))

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const toggleSection = (key) => {
        setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div>
            <section className="product-section">
                <div className="images-section">
                    <img
                        src={IMAGES[activeImage]}
                        alt="product image"
                        className="hero-img"
                        onClick={() => setLightboxOpen(true)}
                    />

                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        slides={slides}
                        index={activeImage}
                        on={{
                            view: ({ index }) => setActiveImage(index),
                        }}
                        plugins={[Zoom, Thumbnails]}
                    />
                    <div className="product-thumbnails">
                        {IMAGES.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product thumbnail ${index + 1}`}
                                className={index === activeImage ? 'active' : ''}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="description-section">
                    <span className="category-badge">Man Fashion</span>
                    <h1>Loose Fit Hoodie</h1>
                    <p className='product-price'>$24.99</p>

                    <div className="delivery-notice">
                        <box-icon name='info-circle' size='sm' color='#00229C'></box-icon>
                        <p>Order in <strong>{formatTime(secondsLeft)}</strong> to get next day delivery</p>
                    </div>

                    <div className="size">
                        <p className='section-label'>Select Size</p>
                        <div className="size-options">
                            {SIZES.map((size) => (
                                <button
                                    key={size}
                                    className={size === selectedSize ? 'active' : ''}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="cta-row">
                        <button className='add-to-cart'>Add to Cart</button>
                        <button
                            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            <box-icon name={isWishlisted ? 'heart' : 'heart'} type={isWishlisted ? 'solid' : 'regular'} color={isWishlisted ? '#ffffff' : '#00229C'}></box-icon>
                        </button>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-header" onClick={() => toggleSection('description')}>
                            <h4>Description & Fit</h4>
                            <box-icon name={openSection.description ? 'chevron-up' : 'chevron-down'}></box-icon>
                        </div>
                        {openSection.description && (
                            <p className="accordion-content">
                                Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous,
                                but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders,
                                long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.
                            </p>
                        )}
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-header" onClick={() => toggleSection('shipping')}>
                            <h4>Shipping</h4>
                            <box-icon name={openSection.shipping ? 'chevron-up' : 'chevron-down'}></box-icon>
                        </div>
                        {openSection.shipping && (
                            <div className="shipping-grid">
                                <div className="shipping-item">
                                    <div className="icon-circle">
                                        <box-icon name='purchase-tag-alt' color='#00229C'></box-icon>
                                    </div>
                                    <div>
                                        <p className='shipping-label'>Discount</p>
                                        <p className='shipping-value'>Disc 50%</p>
                                    </div>
                                </div>
                                <div className="shipping-item">
                                    <div className="icon-circle">
                                        <box-icon name='package' color='#00229C'></box-icon>
                                    </div>
                                    <div>
                                        <p className='shipping-label'>Package</p>
                                        <p className='shipping-value'>Regular Package</p>
                                    </div>
                                </div>
                                <div className="shipping-item">
                                    <div className="icon-circle">
                                        <box-icon name='calendar' color='#00229C'></box-icon>
                                    </div>
                                    <div>
                                        <p className='shipping-label'>Delivery Time</p>
                                        <p className='shipping-value'>3-4 Working Days</p>
                                    </div>
                                </div>
                                <div className="shipping-item">
                                    <div className="icon-circle">
                                        <box-icon name='truck' color='#00229C'></box-icon>
                                    </div>
                                    <div>
                                        <p className='shipping-label'>Estimation Arrive</p>
                                        <p className='shipping-value'>10 - 12 October 2024</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}