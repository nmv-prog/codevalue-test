import type { Product } from '../../utils/types'
import { DeleteButton, ImageAndNameWrapper, ProductDescription, ProductFrameContainer, ProductImage, ProductName } from './ProductItemStyle'

type Props = {
    product: Product,
    onDelete: (id: string) => void
}

const ProductItem = ({ product, onDelete }: Props) => {

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(product.id);
    };


    return (
        <ProductFrameContainer>

            <ImageAndNameWrapper>
                <ProductImage src={product.image} alt={product.name} />

                <div>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>
                </div>
            </ImageAndNameWrapper>



            <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>

        </ProductFrameContainer>
    )
}

export default ProductItem