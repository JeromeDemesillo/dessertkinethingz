'use client';

import { useRef } from 'react';
import { Button, Container, Image } from 'react-bootstrap';

/** The Home page. */
const Home = () => {
  const menuSectionRef = useRef<HTMLElement | null>(null);

  const scrollToMenu = () => {
    menuSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <Container
        id="landing-page"
        fluid
        className="d-flex flex-column align-items-center text-center py-5"
        style={{ minHeight: '100%' }}
      >
        <div className="d-flex flex-column align-items-center w-100" style={{ maxWidth: '760px' }}>
          <Image src="/logo-transparent.png" width={150} height={150} alt="Logo" className="mb-4" />
          <h1>Jesus & Coffee</h1>
          <p className="mt-3">It's about proclaiming Jesus</p>
          <p>Kapolei • Wahiawa, Hawai'i</p>

          <div className="d-flex flex-column align-items-center gap-2 mt-3">
            <Button
              type="button"
              onClick={scrollToMenu}
              style={{
                backgroundColor: '#c96c8c',
                borderColor: '#c96c8c',
                color: '#fff',
                minWidth: '180px',
              }}
            >
              View Menu
            </Button>
            <Button
              href="https://form.jotform.com/260498405627161?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              style={{
                border: '2px solid #c96c8c',
                color: '#c96c8c',
                backgroundColor: '#fff',
                minWidth: '180px',
              }}
            >
              Submit a Prayer Request
            </Button>
          </div>

          <div
            className="mt-4 p-3 rounded-4 shadow-sm"
            style={{
              backgroundColor: '#fff',
              width: 'min(90vw, 320px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="/IMG_7043.jpeg"
              alt="Placeholder food or drink image"
              width={280}
              height={220}
              style={{ objectFit: 'cover', borderRadius: '1rem' }}
            />
          </div>

          <section className="mt-5 text-center" style={{ maxWidth: '700px', padding: '0 1rem' }}>
            <p style={{ color: '#c96c8c', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              our story
            </p>
            <h2 style={{ color: '#a43f63', fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              More than coffee - it's ministry.
            </h2>
            <p style={{ color: '#5a2a3d', lineHeight: 1.7, fontSize: '1rem' }}>
              DKT.HNL started as a pink trailer with a big prayer: that every cup we hand out would carry a little more of Jesus into someone&apos;s day. We&apos;re a family-run coffee &amp; matcha ministry rooted right here in Hawai&apos;i. Whether you come for the strawberry matcha or you come needing prayer, you belong at our window.
            </p>
          </section>

          <div
            className="mt-4 p-4 rounded-4 shadow-sm"
            style={{
              backgroundColor: '#fff',
              width: 'min(90vw, 520px)',
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#a43f63', fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: 1.4 }}>
              “Lord, let them see You in Me.”
            </p>
            <p style={{ color: '#c96c8c', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
              - our daily prayer
            </p>
          </div>

          <section
            ref={menuSectionRef}
            className="mt-5 text-center"
            style={{ width: '100%', padding: '2rem 1rem 3rem' }}
          >
            <p style={{ color: '#c96c8c', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              the menu
            </p>
            <h2 style={{ color: '#a43f63', fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              Named for the Word.
            </h2>
            <div style={{ maxWidth: '390px', margin: '0 auto 1.5rem', padding: '0 0.5rem' }}>
              <p style={{ color: '#5a2a3d', lineHeight: 1.5, fontSize: '0.95rem', margin: 0 }}>
                Every drink is named after a bok of the Bible - the flavor&apos;s in the parentheses. 16 oz / 24 oz where marked.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center gap-3" style={{ width: '100%' }}>
              <div style={{ backgroundColor: '#f7b7c9', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <Image src="/IMG_7043.jpeg" alt="Espresso drink" width={220} height={150} style={{ objectFit: 'cover', borderRadius: '0.75rem', border: '2px solid #fff' }} />
                </div>
                <div style={{ color: '#a43f63', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Handcrafted Espresso</div>
                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#7a4b63', marginBottom: '0.75rem' }}>16oz / 24oz - pulled fresh, poured with love</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Colossians</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(cookie butter)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Philippians</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Vanilla Rose)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Ephesians</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Brown Sugar Oat)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Romans</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Salted Caramel)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7.5 / 8.5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Galatians</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Lavender Honey)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7.5 / 8.5</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#cfe8a9', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <Image src="/IMG_7142.jpeg" alt="Matcha drink" width={220} height={150} style={{ objectFit: 'cover', borderRadius: '0.75rem', border: '2px solid #fff' }} />
                </div>
                <div style={{ color: '#5f7a2f', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Matcha</div>
                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#5f7a2f', marginBottom: '0.75rem' }}>Ceremonial grade. Whisked to order.</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', borderTop: '1px solid rgba(95, 122, 47, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Psalms</div>
                    <div style={{ color: '#5f7a2f', fontSize: '0.8rem' }}>(Classic Matcha Latte)</div>
                  </div>
                  <div style={{ color: '#5f7a2f', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(95, 122, 47, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Proverbs</div>
                    <div style={{ color: '#5f7a2f', fontSize: '0.8rem' }}>(Strawberry Matcha)</div>
                  </div>
                  <div style={{ color: '#5f7a2f', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7.5 / 8.5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(95, 122, 47, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Ruth</div>
                    <div style={{ color: '#5f7a2f', fontSize: '0.8rem' }}>(Coconut Matcha)</div>
                  </div>
                  <div style={{ color: '#5f7a2f', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7.5 / 8.5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(95, 122, 47, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Esther</div>
                    <div style={{ color: '#5f7a2f', fontSize: '0.8rem' }}>(Vanilla Rose Matcha)</div>
                  </div>
                  <div style={{ color: '#5f7a2f', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7.5 / 8.5</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#b7dff4', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <Image src="/IMG_7138.jpeg" alt="Cold brew drink" width={220} height={150} style={{ objectFit: 'cover', borderRadius: '0.75rem', border: '2px solid #fff' }} />
                </div>
                <div style={{ color: '#2f5f7a', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cold Brew</div>
                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#2f5f7a', marginBottom: '0.75rem' }}>Slow steeped. Topped with our signature cold foams.</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', borderTop: '1px solid rgba(47, 95, 122, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>John</div>
                    <div style={{ color: '#2f5f7a', fontSize: '0.8rem' }}>(Sweet Cream Cold Brew)</div>
                  </div>
                  <div style={{ color: '#2f5f7a', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$6.5 / 7.5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(47, 95, 122, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Luke</div>
                    <div style={{ color: '#2f5f7a', fontSize: '0.8rem' }}>(Strawberry Cold Foam)</div>
                  </div>
                  <div style={{ color: '#2f5f7a', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(47, 95, 122, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Mark</div>
                    <div style={{ color: '#2f5f7a', fontSize: '0.8rem' }}>(Salted Caramel Cold Foam)</div>
                  </div>
                  <div style={{ color: '#2f5f7a', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(47, 95, 122, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Matthew</div>
                    <div style={{ color: '#2f5f7a', fontSize: '0.8rem' }}>(Cookie Butter Cold Foam)</div>
                  </div>
                  <div style={{ color: '#2f5f7a', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$7 / 8</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f7b7c9', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ color: '#a43f63', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Entry Menu</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Genesis</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Drip Coffee)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$4 / 5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Exodus</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Americano)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$4.5 / 5.5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Numbers</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Hot Tea)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$4 / 5</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f7b7c9', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ color: '#a43f63', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Keiki Menu</div>
                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#7a4b63', marginBottom: '0.75rem' }}>For the little ones. 12oz.</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Jonah</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Strawberry Steamer)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>Noah</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Vanilla Steamer)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$5</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(164, 63, 99, 0.25)' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#5a2a3d', fontWeight: 600 }}>David</div>
                    <div style={{ color: '#7a4b63', fontSize: '0.8rem' }}>(Chocolate Milk)</div>
                  </div>
                  <div style={{ color: '#a43f63', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.75rem' }}>$5</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#cfe8a9', borderRadius: '1.25rem', padding: '1rem', width: 'min(100%, 320px)' }}>
                <div style={{ color: '#5f7a2f', fontWeight: 700, fontSize: '1.1rem' }}>Monthly Special</div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Home;
