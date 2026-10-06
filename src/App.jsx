import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Smartphone, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    brand: 'Apple',
    name: 'iPhone 17 Pro Max',
    storage: '256GB',
    price: 'Rp 24.249.000',
    condition: 'New',
    image: '/images/img3.jpg'
  },
  {
    id: 2,
    brand: 'Apple',
    name: 'iPhone 17 Basic',
    storage: '128GB',
    price: 'Rp 19.999.000',
    condition: 'New',
    image: '/images/img2.jpg'
  },
  {
    id: 3,
    brand: 'Apple',
    name: 'iPhone 15',
    storage: '128GB',
    price: 'Rp 15.099.000',
    condition: 'Like New',
    image: '/images/img1.jpg'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1.5rem 0',
          transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-gray)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--charcoal)' }}>
            OG Store
          </div>
          <a href="https://wa.me/6282370707033" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <MessageCircle size={16} style={{ marginRight: '0.5rem' }} />
            Hubungi Kami
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ maxWidth: '600px' }}
            >
              <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                <span className="badge badge-outline" style={{ marginBottom: '1rem' }}>Samarinda's Premium Tech</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="hero-heading" style={{ marginBottom: '1.5rem' }}>
                Elevate Your <br/>Digital Life.
              </motion.h1>
              <motion.p variants={fadeUp} className="subheadline" style={{ marginBottom: '2.5rem' }}>
                Temukan smartphone premium incaranmu dengan garansi terpercaya. Melayani tukar tambah dan cicilan.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#collection" className="btn btn-primary">
                  Lihat Koleksi <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
                <a href="https://wa.me/6282370707033" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Tukar Tambah
                </a>
              </motion.div>
            </motion.div>

            {/* Right Mockup Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'var(--soft-gray)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Placeholder for real product shot - using an elegant Unsplash placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1200&h=1600" 
                  alt="Premium Smartphone Presentation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="collection" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
          >
            <div>
              <h2 className="section-heading" style={{ marginBottom: '0.5rem' }}>Koleksi Pilihan</h2>
              <p className="body-text">Kurasi smartphone terbaik minggu ini.</p>
            </div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', fontWeight: 500, color: 'var(--charcoal)', transition: 'opacity 0.2s' }}>
              Lihat Semua <ChevronRight size={18} />
            </a>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '2.5rem' 
            }}
          >
            {products.map((product) => (
              <motion.div 
                key={product.id}
                variants={fadeUp}
                className="shadow-hover"
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-gray)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--white)',
                  transition: 'box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div className="img-hover-scale-container" style={{ height: '320px', backgroundColor: 'var(--white)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', borderBottom: '1px solid var(--soft-gray)' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="img-hover-scale"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span className={product.condition === 'New' ? 'badge badge-accent' : 'badge'} style={{ backgroundColor: product.condition !== 'New' ? 'var(--white)' : undefined, color: product.condition !== 'New' ? 'var(--charcoal)' : undefined }}>
                      {product.condition}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="caption" style={{ marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {product.brand}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--charcoal)' }}>
                    {product.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <span className="badge badge-outline">{product.storage}</span>
                  </div>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      {product.oldPrice && (
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>
                          {product.oldPrice}
                        </div>
                      )}
                      <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--charcoal)' }}>
                        {product.price}
                      </div>
                    </div>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                      Beli
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Mobile CTA */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
        }}
      >
        <a 
          href="https://wa.me/6282370707033" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '3.5rem',
            height: '3.5rem',
            backgroundColor: 'var(--charcoal)',
            color: 'var(--white)',
            borderRadius: '50%',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageCircle size={24} />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
