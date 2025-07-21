import { useEffect, useState } from 'react'
import { useProductStore } from '../../store/store'
import type { Product } from '../../utils/types'
import { ProductDescription, ProductDescriptionTitle, ProductFrameContainer, ProductImage, ProductName, ProductNameTitle, ProductPrice, ProductPriceTitle, ProductPriceWrapper, ProductTitle, SaveButton } from './ProductStyle'

type Props = {
    product?: Product | null,
}

const ProductComponent = ({ product }: Props) => {

    const selectedProduct = useProductStore((state) =>
        product ? state.products.find((p: Product) => p.id === product.id) : null);

    const { addProduct } = useProductStore((state) => state);

    const [editedProduct, setEditedProduct] = useState<Product>({
        id: product?.id || crypto.randomUUID(),
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || 0,
        image: product?.image || '/placeholder.png',
        creationDate: new Date().toISOString()
    });
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (product) {
            setEditedProduct(product);
        } else {
            handleResetValues();
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Product) => {
        const newValue = field === 'price' ? +e.target.value : e.target.value;
        setEditedProduct(prev => {
            if (prev) {
                const updatedProduct = { ...prev, [field]: newValue };

                setIsChanged(JSON.stringify(updatedProduct) !== JSON.stringify(selectedProduct));
                setEditedProduct(updatedProduct);
            }
            return prev;
        });
    };

    const handleResetValues = () => {
        setEditedProduct({
            id: crypto.randomUUID(),
            name: '',
            description: '',
            price: 0,
            image: '/placeholder.png',
            creationDate: new Date().toISOString()
        })
    };

    const handleSave = () => {
        if (!editedProduct) return;

        if (editedProduct.price <= 0) {
            alert('Price must be greater than zero.');
            return;
        }

        if (editedProduct.name.length > 30 || editedProduct.name.length <= 0) {
            alert('The name cannot be empty and must not exceed 30 characters.');
            return;
        }

        if (editedProduct.description!.length > 200) {
            alert('The description must not exceed 200 characters.');
            return;
        }

        if (product) {
            // dispatch(updateProduct({ id: editedProduct.id, updatedProduct: editedProduct }));
            setIsChanged(false);
        } else {
            addProduct(editedProduct);
            setIsChanged(false);
            handleResetValues();
        }

    };

    return (
        <ProductFrameContainer>
            <ProductTitle>{selectedProduct ? `${selectedProduct.name} Details` : `New product`}</ProductTitle>
            <ProductImage alt={selectedProduct?.name} src={product?.image || '/placeholder.png'} />

            <ProductNameTitle>Name</ProductNameTitle>
            <ProductName
                as="input"
                value={editedProduct.name}
                onChange={(e) => handleChange(e, 'name')}
            />

            <ProductDescriptionTitle>Description</ProductDescriptionTitle>
            <ProductDescription
                as="textarea"
                value={editedProduct.description}
                onChange={(e) => handleChange(e, 'description')}
            />

            <ProductPriceTitle>Price</ProductPriceTitle>
            <ProductPriceWrapper>
                <ProductPrice
                    as="input"
                    type="number"
                    value={editedProduct.price}
                    onChange={(e) => handleChange(e, 'price')}
                />$
            </ProductPriceWrapper>

            <SaveButton onClick={handleSave} disabled={!isChanged} >Save</SaveButton>

        </ProductFrameContainer>
    )
}

export default ProductComponent