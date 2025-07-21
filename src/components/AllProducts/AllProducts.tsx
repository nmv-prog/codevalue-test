import { useState } from "react";
import { useProductStore } from "../../store/store";
import type { Product } from "../../utils/types";
import ProductComponent from "../Product/ProductComponent";
import ProductItem from "../ProductItem/ProductItem";
import { BlockWrapper, ProductFrameContainer } from "./AllProductsStyle";

type Props = {
    showCreateForm: boolean,
    setShowCreateForm: React.Dispatch<React.SetStateAction<boolean>>
}

const AllProducts = ({ showCreateForm, setShowCreateForm }: Props) => {
    // const products = useSelector((state: RootState) => state.products.products);

    const { products, deleteProduct } = useProductStore((state) => state);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    // const dispatch = useDispatch();



    const handleProductClick = (product: Product) => {
        setShowCreateForm(false);
        setSelectedProduct(product);
    };

    const handleDelete = (id: string) => {
        deleteProduct(id);
        setSelectedProduct(null);
    };

    return (
        <ProductFrameContainer>
            <BlockWrapper>
                {products.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product)}>
                        <ProductItem product={product} onDelete={handleDelete} />
                    </div>
                ))}
            </BlockWrapper>

            {(selectedProduct || showCreateForm) && <BlockWrapper>
                {(selectedProduct || showCreateForm) && <ProductComponent product={showCreateForm ? null : selectedProduct} />}

            </BlockWrapper>}


        </ProductFrameContainer>
    )
}

export default AllProducts