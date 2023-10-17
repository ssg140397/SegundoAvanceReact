import React from 'react'

const Item = (id, name, img, price, stock) => {
  return (
    <div>
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio ${price}
                </p>
                <p>
                    stock disponible ${stock}
                </p>
            </section>
            <footer>
                <button>Ver detalle</button>
            </footer>
        </article>
    </div>
  )
}

export default Item