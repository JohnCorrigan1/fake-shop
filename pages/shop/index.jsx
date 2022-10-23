import Header from "../../components/Header";
import CategoryCard from "./CategoryCard"



const Shop = () => {
    return (
        <>
            <Header />
            <style jsx >{`.grid-container{
    grid-template-columns: repeat(auto-fit, minmax(250px, 400px));`}</style>
            <div className="grid grid-container justify-center w-full mb-10">
            <CategoryCard img="/shoes.png" link="/shop/shoes" btnText="Shoes" />
            <CategoryCard img="/shorts.png" link="/shop/shorts" btnText="Shorts" />
            <CategoryCard img="/shirts.png" link="/shop/shirts" btnText="Shirts" />
            <CategoryCard img="/all.png" link="/shop/all" btnText="View All" />
            </div>

        </>
    )
}

export default Shop;