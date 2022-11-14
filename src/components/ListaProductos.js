import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState} from 'react'
import ProductCard from './ProductCard'

const ListaProductos = () => {
  

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
      getProducts()
    }, [])

    const getProducts = () => { 
      const db = getFirestore()
      const productsCollection = collection(db, 'productos') 
      getDocs(productsCollection).then( res => {
        const productsData = res.docs.map ( d => ({id: d.id, ...d.data()}) )
        setProducts( productsData )
        setLoading(false)
      } )
    }
    

  return (
    <div className='listaProductos flex max-w-full flex-wrap justify-center'>
        { loading ? <h1 className='p-10 text-xl'>Cargando productos...</h1>
          : products.map(element => {
                    return <ProductCard key={element.id} name={element.name} description={element.description} price={element.price} img={element.img} id={element.id}></ProductCard>
        })}
    </div>
  )
}

export default ListaProductos